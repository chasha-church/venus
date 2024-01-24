import React from 'react'

type ActiveItemStripeProps = {
    isActive: boolean;
}

export const ActiveItemStripe: React.FC<ActiveItemStripeProps> = ({ isActive }) => {
    return <div className={`h-full transition-all absolute left-0 top-0 w-1.5 ${isActive ? "bg-sidebar-blue" : "bg-transparent"}`}></div>
}
