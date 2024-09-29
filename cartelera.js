// JavaScript Document
 // Función para cargar toda la cartelera inicialmente
        function cargarCartelera() {
            fetch('cartelera.json')
                .then(response => response.json())
                .then(data => {
                    mostrarCartelera(data);
                });
        }

        // Función para mostrar la cartelera en la tabla
        function mostrarCartelera(data) {
            let output = '<table><tr><th>ID</th><th>Pelicula</th><th>Clasificación</th><th>Horario</th><th>Sala</th></tr>';
            data.forEach(item => {
                output += `<tr>
                    <td>${item.id}</td>
                    <td>${item.pelicula}</td>
                    <td>${item.clasificacion}</td>
                    <td>${item.horario}</td>
                    <td>${item.sala}</td>
                </tr>`;
            });
            output += '</table>';
            document.getElementById('resultado').innerHTML = output;
        }

        // Función para buscar una película por su ID
        function buscarPelicula() {
            const idPelicula = document.getElementById('idPelicula').value;
            if (idPelicula) {
                fetch('cartelera.json')
                    .then(response => response.json())
                    .then(data => {
                        let encontrado = false;
                        let output = '<table><tr><th>ID</th><th>Pelicula</th><th>Clasificación</th><th>Horario</th><th>Sala</th></tr>';
                        data.forEach(item => {
                            if (item.id === parseInt(idPelicula)) {
                                output += `<tr>
                                    <td>${item.id}</td>
                                    <td>${item.pelicula}</td>
                                    <td>${item.clasificacion}</td>
                                    <td>${item.horario}</td>
                                    <td>${item.sala}</td>
                                </tr>`;
                                encontrado = true;
                            }
                        });
                        output += '</table>';
                        if (!encontrado) {
                            output = '<p>No se encontró la película con ID ' + idPelicula + '</p>';
                        }
                        document.getElementById('resultado').innerHTML = output;
                    });
            } else {
                alert('Por favor, ingrese un ID de película.');
            }
        }

        // Función para limpiar la consulta y el campo de entrada
        function limpiarConsulta() {
            document.getElementById('idPelicula').value = '';
            document.getElementById('resultado').innerHTML = '';
        }