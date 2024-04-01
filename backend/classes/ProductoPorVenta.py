class ProductoPorVenta:
    def __init__(self, id, id_venta_por_empresa, id_producto_por_empresa, cantidad, total_del_producto):
        self.id = id
        self.id_venta_por_empresa = id_venta_por_empresa
        self.id_producto_por_empresa = id_producto_por_empresa
        self.cantidad = cantidad
        self.total_del_producto = total_del_producto
