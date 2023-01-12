class HttpException extends Error {
	status;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}

export class BadRequestException extends HttpException {
	constructor(message = '잘못된 요청입니다.') {
		super(400, message);
	}
}

export class UnAuthorizedException extends HttpException {
	constructor(message = '권한이 없습니다.') {
		super(401, message);
	}
}

export class NotFoundException extends HttpException {
	constructor(message = '찾을 수 없습니다.') {
		super(404, message);
	}
}
