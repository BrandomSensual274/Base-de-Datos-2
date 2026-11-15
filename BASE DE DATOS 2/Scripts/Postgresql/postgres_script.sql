-- Crear tabla
CREATE TABLE IF NOT EXISTS BitacoraSeguridad (
    id_bitacora SERIAL PRIMARY KEY,
    id_usuario INT,
    accion VARCHAR(100),
    detalles TEXT,
    fecha_registro TIMESTAMP
);

-- Insertar 100 registros (Data)
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO BitacoraSeguridad (id_usuario, accion, detalles, fecha_registro)
        VALUES (
            1, 'LOGIN_EXITOSO', 'Acceso numero ' || i, CURRENT_TIMESTAMP
        );
    END LOOP;
END $$;