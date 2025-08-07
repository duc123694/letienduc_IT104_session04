interface Person {
    name:string;
    age:number;
}
interface Employee {
    employeeId:string;
    department:string
}
type StaffMember = Person & Employee;
const Staff:StaffMember = {
    name:"Nguyen Van A",
    age:28,
    employeeId: "EMP001",
    department:"Kế Toán",
}
const printStaffInfo = (staff:StaffMember):void => {
    console.log(`${staff.name}(${staff.age} tuổi), Mã nhân viên:${staff.employeeId} - Phòng: ${staff.department}`);
}
printStaffInfo(Staff);