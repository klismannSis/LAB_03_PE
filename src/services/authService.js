const SESSION_KEY = 'labora-session-v1';

export function getSession() {
	return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

export function setSession(session) {
	localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
	localStorage.removeItem(SESSION_KEY);
}
