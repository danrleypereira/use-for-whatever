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
    
    // Simplified HMR configuration that works with Nginx reverse proxy
    hmr: true,
    
    // Specify base URL
    base: '/',
    
    // CORS settings
    cors: true,
    
    // Allow the custom hostname
    allowedHosts: ['forge-ui.kbra.vm', 'localhost'],
    
    // Customize headers for proper proxy support
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});