export default function DashboardLayout({
    children,
    notifications,
    revenue,
    userAnalytics
}:{
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    userAnalytics: React.ReactNode  
}){
    return (
        <>
        <div>
           <div className='border-b border-gray-200'> {children}</div>
            <div className='p-6 flex flex-row gap-6'>
                <div className='flex flex-col gap-6 flex-1'>
                    <div >
                        {userAnalytics}
                    </div>
                    <div >
                        {revenue}
                    </div>
                </div>
                <div className='flex-1'>
                    {notifications}
                </div>
            </div>
        </div>
        </>
    );
}