import { useCallback } from 'react';

const useCurrency = () => {
    const formatCurrency = useCallback((value) => {
        if (typeof value !== 'number') return 'CLP 0';
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    }, []);

    return formatCurrency;
};

export default useCurrency;