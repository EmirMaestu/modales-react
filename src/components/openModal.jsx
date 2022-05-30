import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

export default function openModal() {
    const Modal = lazy(() => import('./modalSettings'))
    const modalDiv = document.createElement('div')
    modalDiv.id = 'modal'
    document.body.appendChild(modalDiv)
    const root = createRoot(modalDiv)
    root.render(
        <Suspense fallback={<div>Loading</div>}>
            <Modal root={root} title='Modal de configuraciones' />
        </Suspense>
    )
}

