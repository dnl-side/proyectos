<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Resumen de solicitud para clases de japonés.">
    <meta name="keywords" content="japonés, aprender japonés, solicitud, resumen">
    <meta name="author" content="Daniel">
    <meta name="robots" content="index, follow">
    <title>Resumen de Solicitud - Aprender Japonés</title>
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/formulario.css">
</head>
<body>
    <!-- ENCABEZADO -->
    <header>
        <h1>Bienvenido a Aprender Japonés</h1>
        <nav>
            <ul>
                <li><a href="formulario-rework.jsp">Inicio</a></li>
                <li><a href="hiragana.jsp">Hiragana</a></li>
                <li><a href="katakana.jsp">Katakana</a></li>
                <li><a href="kanji.jsp">Kanji</a></li>
                <li><a href="contacto.jsp">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main>
        <section class="formulario">
            <h2>Resumen de tu Solicitud</h2>
            <p>A continuación, se muestran los datos enviados:</p>

            <ul>
                <li><strong>Nombre:</strong> <%= request.getParameter("nombre") != null ? request.getParameter("nombre") : "No proporcionado" %></li>
                <li><strong>Apellido:</strong> <%= request.getParameter("apellido") != null ? request.getParameter("apellido") : "No proporcionado" %></li>
                <li><strong>Correo Electrónico:</strong> <%= request.getParameter("correo") != null ? request.getParameter("correo") : "No proporcionado" %></li>
                <li><strong>Saberes previos:</strong> 
                    <%
                        String[] saberes = request.getParameterValues("saberes");
                        if (saberes != null && saberes.length > 0) {
                            out.print(String.join(", ", saberes));
                        } else {
                            out.print("Ninguno seleccionado");
                        }
                    %>
                </li>
                <li><strong>Kanjis conocidos:</strong> <%= request.getParameter("nivelKanji") != null ? request.getParameter("nivelKanji") : "No proporcionado" %></li>
                <li><strong>Examen JLPT:</strong> <%= request.getParameter("nivelJLPT") != null ? request.getParameter("nivelJLPT") : "No rendido" %></li>
                <li><strong>Examen Kanji Kentei:</strong> <%= request.getParameter("nivelKanken") != null ? request.getParameter("nivelKanken") : "No rendido" %></li>
                <li><strong>Libro utilizado:</strong> <%= request.getParameter("libro") != null ? request.getParameter("libro") : "No proporcionado" %></li>
                <%
                    String otroLibro = request.getParameter("otroLibro");
                    if (otroLibro != null && !otroLibro.trim().isEmpty()) {
                %>
                    <li><strong>Descripción del libro (otro):</strong> <%= otroLibro %></li>
                <%
                    }
                %>
                <li><strong>Comentarios adicionales:</strong> <%= request.getParameter("comentarios") != null && !request.getParameter("comentarios").trim().isEmpty() ? request.getParameter("comentarios") : "Ninguno" %></li>
            </ul>

            <div class="form-buttons">
                <a href="formulario-rework.jsp"><button type="button">Volver al formulario</button></a>
            </div>
        </section>
    </main>

    <!-- PIE DE PÁGINA -->
    <footer>
        <p>© 2025 Aprender Japonés. Todos los derechos reservados.</p>
    </footer>
</body>
</html>