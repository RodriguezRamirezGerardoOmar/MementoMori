class InventarioPorEmpresa:
    def __init__(self, id, id_empresa, id_producto_por_empresa, cantidad, costo, precio, notas):
        self.id = id
        self.id_empresa = id_empresa
        self.id_producto_por_empresa = id_producto_por_empresa
        self.cantidad = cantidad
        self.costo = costo
        self.precio = precio
        self.notas = notas
