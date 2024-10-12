# Chrome Extension Starter Template

This is an opinionated starter project for developing a Chrome extension with a modern tech stack and authentication out of the box.

## Features

- Built with React, TypeScript, and Vite
- Authentication using Supabase (Google and Email OTP)
- UI components from shadcn/ui
- Styling with Tailwind CSS
- Routing with React Router
- Analytics tracking foundation
- Chrome Extension Manifest V3 compatible

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/chrome-extension-starter.git
   cd chrome-extension-starter
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Update the manifest.json file:

   - Replace the `key` in the manifest.json file with your own extension key
   - Update other fields like `name`, `version`, and `description` as needed

4. Set up Supabase:

   - Create a new project on [Supabase](https://supabase.com/)
   - Copy your project's URL and anon key
   - Create a `.env` file in the root directory and add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. Review and update TODOs:
   Search for "TODO" comments throughout the project and update them as needed. Key areas include:

   - Analytics implementation in `src/lib/analytics/analytics.ts`
   - Authentication flows in `src/lib/auth/signInWithGoogle.ts` and related files
   - App configuration in `src/app-config.ts`

6. Build the extension:

   ```
   npm run build
   ```

7. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` folder in your project directory

## Development

- Run `npm run dev` to start the development server
- Make changes to your code and see them reflected in real-time
- Use `npm run build` to create a production build

## Customization

- Modify the components in `src/components` to fit your needs
- Update the routing in `src/components/navigation/AppNavigation.tsx`
- Customize the authentication flow in the `src/screens/auth` directory
- Implement your main extension functionality in `src/screens/app`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
