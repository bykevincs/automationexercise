Feature: Login en AutomationExercise

  Scenario: Login exitoso
    Given que ingreso a la pagina
    When hago clic en el boton de login
    When ingreso un usuario y contraseña validos
    When hago clic en el boton de inicio de sesion
    Then debería iniciar sesión correctamente
  
  Scenario: Login invalido
    Given que ingreso a la pagina
    When hago clic en el boton de login
    When ingreso un usuario y contraseña invalidos
    When hago clic en el boton de inicio de sesion
    Then deberia de mostrar el mensaje de error
