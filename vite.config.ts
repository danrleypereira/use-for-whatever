import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Vite configuration for the Forge UI application.
 * 
 * This configuration enables:
 * - External access via the forge-ui.kbra.vm hostname
 * - Binding to all network interfaces (0.0.0.0)
 * - Proper HMR (Hot Module Replacement) through Nginx proxy
 * - React Router integration
 * - Tailwind CSS support
 * - TypeScript path resolution
 */
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  
  // Server configuration for development
  server: {
    // Bind to all interfaces so it's accessible outside localhost
    host: '0.0.0.0',
    
    // Use the default Vite port
    port: 5173,
    
    // Customize HMR for working through a reverse proxy
    hmr: {
      // Specify the hostname clients should use to connect for HMR
      host: 'forge-ui.kbra.vm',
      
      // Use the same port as the dev server
      port: 5173,
      
      // Use WebSockets protocol
      protocol: 'ws',
      
      // Uncomment to disable HMR if needed for troubleshooting
      // overlay: false,
    },
    
    // CORS settings
    cors: true,
    
    // Customize headers for proper proxy support
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});