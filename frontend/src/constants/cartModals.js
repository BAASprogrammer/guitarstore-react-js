export const getModalConfigs = (dataMessage, MAX_QUANTITY, message, cancelDeleteProduct, confirmDeleteProduct, setMessage, emptyCart, setIsOpenCart) => [
    {
        key: "delete",
        type: "delete",
        message: dataMessage.delete.message,
        showButtons: true,
        showCancelButton: false,
        confirmText: "Aceptar",
        onConfirm: cancelDeleteProduct,
        showCloseButton: true,
        title: dataMessage.delete.title
    },
    {
        key: `max-${message.type}`,
        type: "max",
        message: `${dataMessage.max.message} (<strong>${MAX_QUANTITY}</strong>). Producto: <strong>${message.productName || 'Desconocido'}</strong>`,
        showButtons: true,
        showCancelButton: false,
        confirmText: "Aceptar",
        onConfirm: cancelDeleteProduct,
        onCancel: () => setMessage({}),
        showCloseButton: true,
        title: dataMessage.max.title,
        closeOnOverlay: false
    },
    {
        key: "todelete",
        type: "todelete",
        message: dataMessage.todelete.message,
        onConfirm: confirmDeleteProduct,
        onCancel: cancelDeleteProduct,
        showCloseButton: true,
        title: dataMessage.todelete.title,
        closeOnOverlay: false
    },
    {
        key: "emptyCart",
        type: "emptyCart",
        message: dataMessage.emptyCart.message,
        showButtons: true,
        confirmText: "Sí",
        cancelText: "No",
        onConfirm: () => { emptyCart(); setMessage({ type: "emptied" }); setIsOpenCart(false); },
        onCancel: () => setMessage({}),
        showCloseButton: true,
        title: dataMessage.emptyCart.title,
        closeOnOverlay: false
    },
    {
        key: "emptied",
        type: "emptied",
        message: dataMessage.emptied.message,
        showButtons: true,
        showCancelButton: false,
        confirmText: "Aceptar",
        onConfirm: () => setMessage({}),
        showCloseButton: true,
        title: dataMessage.emptied.title
    }
];