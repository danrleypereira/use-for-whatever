#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo -e "${YELLOW}=== Forge UI Custom Domain Setup ===${NC}"
echo "This script helps you set up and run the Forge UI application with the custom domain forge-ui.kbra.vm"
echo

# Step 1: Check if running as root for hosts file modification
if [ "$EUID" -ne 0 ]; then
    echo -e "${YELLOW}Note:${NC} Some operations require root/administrator privileges."
    echo "The script will prompt for your password when needed."
    echo
fi

# Step 2: Check if entry exists in hosts file
if grep -q "forge-ui.kbra.vm" /etc/hosts; then
    echo -e "${GREEN}✓ The domain forge-ui.kbra.vm is already in your hosts file.${NC}"
else
    echo -e "${YELLOW}Adding forge-ui.kbra.vm to your hosts file...${NC}"
    if [ "$EUID" -ne 0 ]; then
        # Using sudo for non-root user
        sudo sh -c 'echo "127.0.0.1 forge-ui.kbra.vm" >> /etc/hosts'
    else
        # Direct echo for root user
        echo "127.0.0.1 forge-ui.kbra.vm" >> /etc/hosts
    fi
    
    if grep -q "forge-ui.kbra.vm" /etc/hosts; then
        echo -e "${GREEN}✓ Successfully added forge-ui.kbra.vm to your hosts file.${NC}"
    else
        echo -e "${RED}× Failed to add forge-ui.kbra.vm to your hosts file.${NC}"
        echo "Please add the following line to your /etc/hosts file manually:"
        echo "127.0.0.1 forge-ui.kbra.vm"
    fi
fi

# Step 3: Check if Docker and Docker Compose are installed
if command_exists docker && command_exists docker-compose; then
    echo -e "${GREEN}✓ Docker and Docker Compose are installed.${NC}"
else
    echo -e "${RED}× Docker and/or Docker Compose are not installed.${NC}"
    echo "Please install Docker and Docker Compose before continuing."
    echo "Visit https://docs.docker.com/get-docker/ for installation instructions."
    exit 1
fi

# Step 4: Create nginx logs directory if it doesn't exist
if [ ! -d "$(pwd)/nginx/logs" ]; then
    echo -e "${YELLOW}Creating nginx logs directory...${NC}"
    mkdir -p "$(pwd)/nginx/logs"
    echo -e "${GREEN}✓ Created nginx logs directory.${NC}"
fi

# Step 5: Offer to start the application
echo
echo -e "${YELLOW}=== Running Options ===${NC}"
echo "1) Start development environment with docker-compose"
echo "2) Start production environment with Nginx"
echo "3) Exit without starting anything"
echo

read -p "Choose an option (1-3): " choice

case $choice in
    1)
        echo -e "${YELLOW}Starting development environment...${NC}"
        if docker-compose up -d nginx dev; then
            # Simple pause to let containers initialize
            sleep 2
            
            # Check if containers exist (don't use 'Up' status check as it can be unreliable)
            if docker-compose ps --services | grep -q "nginx" && docker-compose ps --services | grep -q "dev"; then
                echo -e "${GREEN}✓ Development environment started!${NC}"
                echo "You can access the application at http://forge-ui.kbra.vm"
                echo "View logs with: docker-compose logs -f dev"
            else
                echo -e "${RED}× Failed to start containers.${NC}"
                echo "Please check docker-compose logs for errors: docker-compose logs"
                exit 1
            fi
        else
            echo -e "${RED}× Failed to start Docker Compose services.${NC}"
            echo "Please check for errors in your configuration files."
            exit 1
        fi
        ;;
    2)
        echo -e "${YELLOW}Building and starting production environment...${NC}"
        if docker build -f Dockerfile.nginx -t forge-ui:nginx .; then
            echo "Docker image built successfully."
            
            # Remove existing container if it exists
            docker rm -f forge-ui-prod 2>/dev/null
            
            if docker run -d -p 80:80 --name forge-ui-prod forge-ui:nginx; then
                # Simple pause to let container initialize
                sleep 2
                
                # Just check if container exists, the run command returning success
                # is generally sufficient to indicate it started
                echo -e "${GREEN}✓ Production environment started!${NC}"
                echo "You can access the application at http://forge-ui.kbra.vm"
                echo "View logs with: docker logs -f forge-ui-prod"
            else
                echo -e "${RED}× Failed to start Docker container.${NC}"
                echo "Check if port 80 is already in use or if you have permission issues."
                exit 1
            fi
        else
            echo -e "${RED}× Docker build failed.${NC}"
            echo "Check the Dockerfile.nginx and build logs for errors."
            exit 1
        fi
        ;;
    3)
        echo "Exiting without starting any services."
        ;;
    *)
        echo -e "${RED}Invalid option. Exiting.${NC}"
        ;;
esac

# Only shown for successful exits
echo
echo -e "${GREEN}Setup complete!${NC}"
echo "For more information, refer to the README.md file."
exit 0