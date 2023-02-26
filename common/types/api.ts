export interface ApiResponse<Type> {
	data: Type
	error: string
}

export interface LoginResponse {
	token: string
	message: string
}
