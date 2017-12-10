import { ROUTES } from './routes.constants';

export const USERS = {
	"ARTIST":"artist",
	"ADMIN":"administrator"
}

export const ARTIST_PERMISSIONS = [
	ROUTES.EDIT_PROFILE
];

export const PERMISSIONS = {}
PERMISSIONS[USERS.ARTIST] = ARTIST_PERMISSIONS;
PERMISSIONS[USERS.ADMIN] =
	ARTIST_PERMISSIONS.concat([
		ROUTES.PROFILES_LIST
	]);
