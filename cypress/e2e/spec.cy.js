describe("Registro de usuario", () => {
    it("Registra un usuario con éxito", () => {
        cy.visit("/register");
        cy.fillForm({
            name: "Gabriel Condori",
            email: "gabrielmcc2002cultural@gmail.com",
            password: "12345678",
            password_confirmation: "12345678",
        });
        cy.contains("Registrado con éxito");
        cy.get(".user-name").contains("Gabriel Condori");
        });
    });

    beforeEach(() => {
        // Visita la página de login.
        cy.visit('/login');

        // Introduce las credenciales de usuario.
        cy.get('input[name="email"]').type(user.email);
        cy.get('input[name="password"]').type(user.password);
    });

    it("Inicia sesión con éxito", () => {
        // 1. Visita la página de login.
        cy.visit("/login");

        // 2. Introduce las credenciales válidas.
        cy.get("input[name='email']").type("gabrielmcc2002cultural@gmail.com");
        cy.get("input[name='password']").type("12345678");

        // 3. Hace clic en el botón de login.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el usuario ha iniciado sesión correctamente.
        cy.contains("Inicio de sesión correcto");
        cy.contains("gabrielmcc2002cultural@gmail.com");
    });

    it("Crea un jugador con éxito", () => {
        // 1. Visita la página de creación de jugadores.
        cy.visit("/jugadores/crear");

        // 2. Rellena el formulario de creación con datos válidos.
        cy.fillForm({
            nombre: "Juan Pérez",
            edad: 25,
            equipo: "Real Madrid",
        });

        // 3. Hace clic en el botón de crear.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el jugador se ha creado correctamente.
        cy.contains("Jugador creado con éxito");
        cy.contains("Juan Pérez");
        cy.contains("25");
        cy.contains("Real Madrid");
    });

    it("Actualiza un jugador con éxito", () => {
        // 1. Crea un jugador.
        cy.visit("/jugadores/crear");
        cy.fillForm({
            nombre: "Juan Pérez",
            edad: 25,
            equipo: "Real Madrid",
        });
        cy.get("button[type='submit']").click();

        // 2. Visita la página de edición del jugador.
        cy.visit("/jugadores/editar/1");

        // 3. Actualiza los datos del jugador.
        cy.get("input[name='nombre']").clear().type("Pedro Sánchez");
        cy.get("input[name='edad']").clear().type("30");
        cy.get("select[name='equipo']").select("Barcelona");

        // 4. Hace clic en el botón de actualizar.
        cy.get("button[type='submit']").click();

        // 5. Comprueba que el jugador se ha actualizado correctamente.
        cy.contains("Jugador actualizado con éxito");
        cy.contains("Pedro Sánchez");
        cy.contains("30");
        cy.contains("Barcelona");
    });

    it("Elimina un jugador con éxito", () => {
        // 1. Crea un jugador.
        cy.visit("/jugadores/crear");
        cy.fillForm({
            nombre: "Juan Pérez",
            edad: 25,
            equipo: "Real Madrid",
        });
        cy.get("button[type='submit']").click();

        // 2. Visita la página de detalles del jugador.
        cy.visit("/jugadores/1");

        // 3. Hace clic en el botón de eliminar.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el jugador se ha eliminado correctamente.
        cy.contains("Jugador eliminado con éxito");
        cy.contains("No hay jugadores");
    });

    it("Crea un partido con éxito", () => {
        // 1. Visita la página de creación de partidos.
        cy.visit("/partidos/crear");

        // 2. Rellena el formulario de creación con datos válidos.
        cy.fillForm({
            fecha: new Date(),
            hora: "12:00",
            equipo_local: "Real Madrid",
            equipo_visitante: "Barcelona",
            goles_local: 1,
            goles_visitante: 0,
        });

        // 3. Hace clic en el botón de crear.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el partido se ha creado correctamente.
        cy.contains("Partido creado con éxito");
        cy.contains("Real Madrid");
        cy.contains("Barcelona");
        cy.contains("1");
        cy.contains("0");
    });

    it("Actualiza un partido con éxito", () => {
        // 1. Crea un partido.
        cy.visit("/partidos/crear");
        cy.fillForm({
            fecha: new Date(),
            hora: "12:00",
            equipo_local: "Real Madrid",
            equipo_visitante: "Barcelona",
            goles_local: 1,
            goles_visitante: 0,
        });
        cy.get("button[type='submit']").click();

        // 2. Visita la página de edición del partido.
        cy.visit("/partidos/editar/1");

        // 3. Actualiza los datos del partido.
        cy.get("input[name='fecha']").clear().type(new Date());
        cy.get("input[name='hora']").clear().type("15:00");
        cy.get("select[name='equipo_local']").select("Atlético de Madrid");
        cy.get("select[name='equipo_visitante']").select("Sevilla");
        cy.get("input[name='goles_local']").clear().type(2);
        cy.get("input[name='goles_visitante']").clear().type(1);

        // 4. Hace clic en el botón de actualizar.
        cy.get("button[type='submit']").click();

        // 5. Comprueba que el partido se ha actualizado correctamente.
        cy.contains("Partido actualizado con éxito");
        cy.contains("Atlético de Madrid");
        cy.contains("Sevilla");
        cy.contains("2");
        cy.contains("1");
    });

    it("Elimina un partido con éxito", () => {
        // 1. Crea un partido.
        cy.visit("/partidos/crear");
        cy.fillForm({
            fecha: new Date(),
            hora: "12:00",
            equipo_local: "Real Madrid",
            equipo_visitante: "Barcelona",
            goles_local: 1,
            goles_visitante: 0,
        });
        cy.get("button[type='submit']").click();

        // 2. Visita la página de detalles del partido.
        cy.visit("/partidos/1");

        // 3. Hace clic en el botón de eliminar.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el partido se ha eliminado correctamente.
        cy.contains("Partido eliminado con éxito");
        cy.contains("No hay partidos");
    });

    it("Genera un reporte de partidos con éxito", () => {
        // 1. Inicia sesión en el sistema.
        cy.visit("/login");
        cy.get("input[name='email']").type("admin@example.com");
        cy.get("input[name='password']").type("password");
        cy.get("button[type='submit']").click();

        // 2. Visita la página de reportes.
        cy.visit("/reportes");

        // 3. Genera el reporte de partidos.
        cy.get("button[type='submit']").click();

        // 4. Comprueba que el reporte se ha generado correctamente.
        cy.contains("Reporte de partidos");
        cy.contains("Fecha");
        cy.contains("Hora");
        cy.contains("Equipo local");
        cy.contains("Equipo visitante");
        cy.contains("Goles local");
        cy.contains("Goles visitante");
    });
