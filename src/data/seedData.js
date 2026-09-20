export const seedData = {
	students: [
		{ id: 'stu-001', name: 'Valentina Rojas', email: 'valentina.rojas@universidad.edu', program: 'Ingeniería de Sistemas' },
		{ id: 'stu-002', name: 'Mateo Silva', email: 'mateo.silva@universidad.edu', program: 'Ingeniería Industrial' }
	],
	laboratories: [
		{ id: 'lab-001', name: 'Redes y Comunicaciones', code: 'LAB-RED-01', location: 'Edificio A · 204', capacity: 24, active: true, schedules: [{ id: 's-001', day: 'Lunes', start: '08:00', end: '10:00' }, { id: 's-002', day: 'Miércoles', start: '14:00', end: '16:00' }] },
		{ id: 'lab-002', name: 'Desarrollo de Software', code: 'LAB-SW-02', location: 'Edificio B · 106', capacity: 20, active: true, schedules: [{ id: 's-003', day: 'Martes', start: '10:00', end: '12:00' }, { id: 's-004', day: 'Jueves', start: '16:00', end: '18:00' }] },
		{ id: 'lab-003', name: 'Electrónica Aplicada', code: 'LAB-ELEC-03', location: 'Edificio C · 301', capacity: 16, active: true, schedules: [{ id: 's-005', day: 'Lunes', start: '10:00', end: '12:00' }, { id: 's-006', day: 'Viernes', start: '08:00', end: '10:00' }] },
		{ id: 'lab-004', name: 'Diseño y Prototipado', code: 'LAB-DIS-04', location: 'Edificio A · 110', capacity: 18, active: false, schedules: [{ id: 's-007', day: 'Viernes', start: '14:00', end: '16:00' }] }
	],
	enrollments: [
		{ id: 'enr-001', studentId: 'stu-001', laboratoryId: 'lab-001', scheduleId: 's-001', createdAt: '2026-09-12T09:00:00.000Z' },
		{ id: 'enr-002', studentId: 'stu-002', laboratoryId: 'lab-002', scheduleId: 's-003', createdAt: '2026-09-13T11:30:00.000Z' },
		{ id: 'enr-003', studentId: 'stu-002', laboratoryId: 'lab-003', scheduleId: 's-006', createdAt: '2026-09-13T12:00:00.000Z' }
	]
};
