function overlaps(first, second) {
	return first.day === second.day && first.start < second.end && second.start < first.end;
}

export function validateEnrollment({ studentId, laboratory, schedule, state }) {
	if (!laboratory || !schedule) return { valid: false, message: 'Selecciona un laboratorio y un horario.' };
	if (!laboratory.active) return { valid: false, message: 'Este laboratorio no está disponible.' };
	const occupied = state.enrollments.filter((item) => item.laboratoryId === laboratory.id && item.scheduleId === schedule.id).length;
	if (occupied >= laboratory.capacity) return { valid: false, message: 'No quedan cupos disponibles para este horario.' };
	const studentEnrollments = state.enrollments.filter((item) => item.studentId === studentId);
	if (studentEnrollments.some((item) => item.laboratoryId === laboratory.id && item.scheduleId === schedule.id)) return { valid: false, message: 'Ya estás matriculado en este laboratorio y horario.' };
	const conflict = studentEnrollments.some((item) => state.laboratories.find((lab) => lab.id === item.laboratoryId)?.schedules.find((slot) => slot.id === item.scheduleId && overlaps(slot, schedule)));
	if (conflict) return { valid: false, message: 'El horario se cruza con otra matrícula.' };
	return { valid: true, message: 'Matrícula válida.' };
}
