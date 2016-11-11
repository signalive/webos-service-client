declare module 'webos-service-client' {
    namespace LunaRequest {
        const service: {
            request(
                serviceID: string,
                config: {
                    method: string,
                    parameters?: {},
                    onFailure?: Function,
                    onSuccess?: Function,
                    onComplete?: Function
                }
            ): any;
        }
    }

    export = LunaRequest;
}


declare module 'webos-service' {
    interface serviceResponse {
        (message: {
            payload: {},
            respond(args: {
                returnValue: boolean
                [key: string]: any
            }): any
        }): any;
    }

    class Service {
        constructor(serviceId: string);
        register(method: string, handle: serviceResponse): any;
    }

    export = Service;
}
