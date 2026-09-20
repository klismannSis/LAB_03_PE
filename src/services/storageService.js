import { seedData } from '../data/seedData.js';

const KEY = 'labora-state-v1';

export function loadState() {
	try {
		const stored = localStorage.getItem(KEY);
		return stored ? JSON.parse(stored) : structuredClone(seedData);
	} catch {
		return structuredClone(seedData);
	}
}

export function saveState(state) {
	localStorage.setItem(KEY, JSON.stringify(state));
	return state;
}

export function resetState() {
	return saveState(structuredClone(seedData));
}
