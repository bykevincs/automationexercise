# automationexercise
Prueba tecnica QA - CYPRESS
=======
Examen QA - CULQI

Modificaciones para que cypress procese gherkin cucumber:<br>
-package.json<br>
-cypress.config.js <br>

Archivos añadidos:<br>
-cypress\integration\features\login.feature<br>
-cypress\support\step_definitions\login_steps.js<br>

Pasos para la ejecucion:<br>
1-npm install cypress --save-dev (si no tiene el node_modules)<br>
2-Para abrir la interface grafica: npx cypress open<br>
3-Para ejecutar el feature por comando: npx cypress run --spec "cypress/integration/features/login.feature" --browser chrome<br>
>>>>>>> master
