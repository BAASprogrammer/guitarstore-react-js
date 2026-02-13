const ConfirmModal = ({ isOpen, message, onConfirm, onCancel, showButtons = true, showCloseButton = false, title = 'Importante', closeOnOverlay = false, confirmText = 'Confirmar', cancelText = 'Cancelar', showCancelButton = true }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-portal">
            <div className='confirm-overlay' onClick={closeOnOverlay ? (onCancel || (() => { })) : (() => { })}></div>
            <div className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className="modal-content">
                    {showCloseButton && <button className='close-modal' title='Cerrar modal' onClick={onCancel || (() => { })}>×</button>}
                    {title && <h2 id="modal-title" className='modal-title'>{title}</h2>}
                    <div className="modal-body">
                        <p dangerouslySetInnerHTML={{ __html: message }}></p>
                    </div>
                    {showButtons && (
                        <div className="button-container">
                            {showCancelButton && (
                                <button className="btn-secondary" onClick={onCancel || (() => { })}>
                                    {cancelText}
                                </button>
                            )}
                            <button className="btn-primary" onClick={onConfirm || (() => { })}>
                                {confirmText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;