Examen QA - CULQI

Modificaciones para que cypress procese gherkin cucumber:
-package.json
-cypress.config.js 

Archivos añadidos:
-cypress\integration\features\login.feature
-cypress\support\step_definitions\login_steps.js

Pasos para la ejecucion:
1-npm install cypress --save-dev (si no tiene el node_modules)
2-Para abrir la interface grafica: npx cypress open
3-Para ejecutar el feature por comando: npx cypress run --spec "cypress/integration/features/login.feature" --browser chrome
