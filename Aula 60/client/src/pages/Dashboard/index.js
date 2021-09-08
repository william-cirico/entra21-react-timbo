import { useAuth } from "../../hooks/useAuth";
import { AdminsDashboard } from "../../components/AdminsDashboard";
import { StudentsDashboard } from "../../components/StudentsDashboard";
import { TeachersDashboard } from "../../components/TeachersDashboard";

export function Dashboard() {
    const { role } = useAuth();
    
    if (role === "admin") {
        return <AdminsDashboard />    
    }

    if (role === "teacher") {
        return <TeachersDashboard />
    }

    return <StudentsDashboard />
}