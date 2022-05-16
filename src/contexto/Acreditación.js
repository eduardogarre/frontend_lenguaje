import React from 'react';
import { servidor } from '../Configuración';

export const ContextoAcreditado = React.createContext({acreditado: false});

export function cierraSesión() {
    fetch(servidor + "/api/v1/sesión", {
        method: 'DELETE'
    })
}