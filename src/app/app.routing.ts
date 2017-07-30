
export const routes = [
    {
        path: 'diligencias',
        data: ['Diligencias'],
        loadChildren: './diligencias/diligencias.module#DiligenciasModule'
    },
    {
        path: 'actas',
        data: ['Actas'],
        loadChildren: './actas/actas.module#ActasModule'
    },

];