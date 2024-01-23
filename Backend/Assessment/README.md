# Modular and Layered Design Pattern

The application and module components is typically associated with the Modular Pattern in software design.

The combination of Modular Pattern and Layered Architecture helps to keep the codebase organized, maintainable, and scalable, allowing developers to work on different parts of the application in isolation and making the code easier to understand and manage.

The application is organized into distinct modules, each responsible for specific business functionalities (e.g., product, category, customer, order). Each module typically includes its own set of files for handling routes, controllers, models, and services. This structure allows for a clear separation of concerns within the monolithic application.

Key characteristics of this design pattern include:

1. **Modularity:** The application is divided into discrete modules, making it easier to understand and maintain.

2. **Separation of Concerns:** Each module is responsible for a specific business domain, promoting a clear separation of concerns.

3. **Scalability:** While the application is monolithic, the modular structure allows for scalability by enabling teams to work on different modules independently.

4. **Reusability:** Modules can be reused or extended in other parts of the application.


## Folder Structure
```
-app
 |-constants
 |-lib
 |-database
 |-modules
  |- Product
  |- AddYourModulesHere1 
  |- AddYourModulesHere2
	|- ......N
|-app.js
|-config
  |- default.json
  |- development.json
  |- staging.json
  |- production.json
|-package.json
|-README.md
```
#### Note: We can have some more files like prettier, linting and also the test folder for Test Driven Development (TDD)

### Following is the module folder breakdown

```
|-modules
 |-YourModuleName
  |-models
   |-schemas
    |- YourModuleNameSchema.js
  |- controllers
   |- YourModuleNameController.js
  |- routes
   |- routeNames1.js 
   |- routeNames2.js 
   |- routeNames3.js 
  |- services
   |- YourModuleName.js
  |- repositeries
   |- YourModuleName.js        
```

# Module breakdown: 

1. **routes:** This folder will contain route files for the module where endpoint will be defined.

2. **controllers:** This folder will contain controllers for the module where req/response manipulation will be handled.

3. **services:** This folder will contain services for the module where business logic will be handled.

4. **repositeries:** This folder will contain database queries for the module, mainly the fetch queries as add/update/delete these queries will handled in dbHelper service file.

5. **models/schemas:**  This folder will contain schemas for the module, where request schema will be defined for every route of the module.

## Some explanations of certain files

1. **authCheck.js:** This file will contain code for token authentication and role authorization.

2. **validate.js:** This file will work as a wrapper for validation, It will have validate method which will take schema and data as parameters which will handle validation and will throw error with proper message in case validation fails.

3. **customError.js:** This will contain a class which will be extending Error class and having a constructor to intilize error instance with required properties.

4. **errorHandler.js:** This file will contain error handling logic, in case error comes throughout the request lifecycle.