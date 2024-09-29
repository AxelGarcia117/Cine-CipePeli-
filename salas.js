// JavaScript Document
 // Función para cargar todas las salas inicialmente
        function cargarSalas() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'cine.xml', true);
            xhr.onload = function() {
                if (this.status === 200) {
                    const xmlDoc = this.responseXML;
                    mostrarSalas(xmlDoc);
                }
            };
            xhr.send();
        }

        // Función para mostrar las salas en la tabla
        function mostrarSalas(xmlDoc) {
            const salas = xmlDoc.getElementsByTagName('sala');
            let output = '<table><tr><th>ID</th><th>Nombre</th><th>Capacidad</th><th>Ubicación</th><th>Tipo</th></tr>';
            for (let i = 0; i < salas.length; i++) {
                output += '<tr>' +
                    '<td>' + salas[i].getElementsByTagName('id')[0].textContent + '</td>' +
                    '<td>' + salas[i].getElementsByTagName('nombre')[0].textContent + '</td>' +
                    '<td>' + salas[i].getElementsByTagName('capacidad')[0].textContent + '</td>' +
                    '<td>' + salas[i].getElementsByTagName('ubicacion')[0].textContent + '</td>' +
                    '<td>' + salas[i].getElementsByTagName('tipo')[0].textContent + '</td>' +
                    '</tr>';
            }
            output += '</table>';
            document.getElementById('resultado').innerHTML = output;
        }

        // Función para buscar una sala por su ID
        function buscarSala() {
            const idSala = document.getElementById('idSala').value;
            if (idSala) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'cine.xml', true);
                xhr.onload = function() {
                    if (this.status === 200) {
                        const xmlDoc = this.responseXML;
                        const salas = xmlDoc.getElementsByTagName('sala');
                        let encontrado = false;
                        let output = '<table><tr><th>ID</th><th>Nombre</th><th>Capacidad</th><th>Ubicación</th><th>Tipo</th></tr>';
                        for (let i = 0; i < salas.length; i++) {
                            if (salas[i].getElementsByTagName('id')[0].textContent === idSala) {
                                output += '<tr>' +
                                    '<td>' + salas[i].getElementsByTagName('id')[0].textContent + '</td>' +
                                    '<td>' + salas[i].getElementsByTagName('nombre')[0].textContent + '</td>' +
                                    '<td>' + salas[i].getElementsByTagName('capacidad')[0].textContent + '</td>' +
                                    '<td>' + salas[i].getElementsByTagName('ubicacion')[0].textContent + '</td>' +
                                    '<td>' + salas[i].getElementsByTagName('tipo')[0].textContent + '</td>' +
                                    '</tr>';
                                encontrado = true;
                                break;
                            }
                        }
                        output += '</table>';
                        if (!encontrado) {
                            output = '<p>No se encontró la sala con ID ' + idSala + '</p>';
                        }
                        document.getElementById('resultado').innerHTML = output;
                    }
                };
                xhr.send();
            } else {
                alert('Por favor, ingrese un ID de sala.');
            }
        }

        // Función para limpiar la consulta y el campo de entrada
        function limpiarConsulta() {
            document.getElementById('idSala').value = '';
            document.getElementById('resultado').innerHTML = '';
        }