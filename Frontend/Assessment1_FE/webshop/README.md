# Angular Web Shop Project

This Angular project is a web shop application that adheres to well-established design patterns, modular principles, and follows best practices for clean and maintainable code.

## Design Principles

### 1. Separation of Concerns

The architecture strictly adheres to the Separation of Concerns principle, ensuring that different aspects of the application have distinct responsibilities. This promotes code readability, maintainability, and facilitates easier debugging.

### 2. Modularity

The project embraces the Modular Pattern, organizing features into independent modules. Each module represents a discrete functionality (e.g., product, category) with its components, services, and models. This modular structure enhances scalability, facilitates code reuse, and allows for easier collaboration among development teams.

### 3. Angular Best Practices

The project follows Angular best practices to ensure a robust and efficient codebase. Key practices include:

- **Services for Business Logic:** Business logic is encapsulated within services, promoting reusability and testability.
  
- **Guards for Route Protection:** Route guards are employed to control access to specific pages based on user authentication or authorization.

- **Interceptors for HTTP Handling:** Angular interceptors are utilized for handling HTTP requests and responses. For example, an auth.interceptor can attach authentication tokens to outgoing requests.

### 4. Reusable Components

The project actively encourages the creation of reusable components within the `shared` folder. Reusable components minimize code duplication, maintain a consistent look and feel across the application, and simplify maintenance.

### 5. Model-View-Controller (MVC) Design Pattern

The chosen design pattern follows the Model-View-Controller (MVC) architecture:

- **Models (Data):** The `/models` directory defines data models for different entities such as products, categories, customers, orders, shipping, and payment in their respective module.

- **Views (Components):** The `/components` directories contain Angular components in their respective module directory representing different parts of the web shop.

- **Controllers (Services):** Business logic is encapsulated within services located in the `/services` in their respective module directory.

## Project Structure

The project structure reflects the principles and best practices mentioned above:
```
/src
  /app
    - app.component.html
    - app.component.scss
    - app.component.spec.ts
    - app.component.ts
    - app.module.ts
    /core
      /interceptors
      /guards
      /services
    /shared
      /components
      /models
      /services
    /modules
      /product
        /components
        /services
        /models
      /yourModule1
        /components
        /services
        /models
      /yourModule2
        /components
        /services
        /models
      /...N
    /layout
      /header
        /components
      /footer
        /components
    /utils
  /routes
    - app-routing.module.ts
/assets
  /images
/styles
  - styles.scss
index.html
package.json
tsconfig.json
angular.json
README.md
```
## Folder Structure Breakdown: 

1. /src/app/app.component
Description: Root component serving as the container for the entire application.
Purpose: Manages the overall layout and structure of the application.
2. /src/app/app.module.ts
Description: Main Angular module for the application.
Purpose: Organizes and declares components, services, and other modules needed for the application.
3. /src/core/interceptors, /src/core/guards, /src/core/services
Description: Core functionality for handling HTTP requests, route protection, and essential services.
Purpose: Ensures crucial operations are centralized and reusable across the application.
4. /src/shared/components, /src/shared/models, /src/shared/services
Description: Shared components, data models, and services.
Purpose: Encourages code reuse and maintains consistency across different parts of the application.
5. /src/modules
Description: Directory containing feature-specific modules.
Purpose: Encapsulates related components, services, and models for different features of the web shop application.
6. /src/layout/header/components, /src/layout/footer/components
Description: Components specific to the layout, such as the navigation bar and footer.
Purpose: Separates layout-related components for modularity and ease of maintenance.
7. /src/utils
Description: Directory containing utility functions or classes.
Purpose: Provides common functionality shared across different parts of the application.
8. /src/routes/app-routing.module.ts
Description: Angular routing configuration for the application.
Purpose: Defines how URLs map to specific components and manages navigation paths within the application.
9. /src/assets/images, /src/styles
Description: Directories for static assets (images) and global styles.
Purpose: Stores static resources and global styles applied throughout the application.
10. /index.html, /package.json, /tsconfig.json, /angular.json
Description: Essential configuration and metadata files for the Angular project.
Purpose: Provide project-related settings, dependencies, build instructions, and other necessary information.
