import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotificationsPage(){
    return (
        <Card>
            <div> 
                <h2 className="text-2xl font-bold text-blue-800">📊 Archived Notifications</h2>
            </div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    );
}