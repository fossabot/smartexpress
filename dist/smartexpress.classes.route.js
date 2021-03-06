"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lik_1 = require("lik");
class Route {
    constructor(ServerArg, routeStringArg) {
        this.handlerObjectMap = new lik_1.Objectmap();
        this.expressMiddlewareObjectMap = new lik_1.Objectmap();
        this.routeString = routeStringArg;
    }
    /**
     * add a handler to do something with requests
     * @param handlerArg
     */
    addHandler(handlerArg) {
        this.handlerObjectMap.add(handlerArg);
    }
    /**
     * add a express middleware
     * @param middlewareArg
     */
    addExpressMiddleWare(middlewareArg) {
        this.expressMiddlewareObjectMap.add(middlewareArg);
    }
}
exports.Route = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRleHByZXNzLmNsYXNzZXMucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGV4cHJlc3MuY2xhc3Nlcy5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDZCQUFnQztBQUdoQztJQUtFLFlBQVksU0FBaUIsRUFBQyxjQUFzQjtRQUhwRCxxQkFBZ0IsR0FBRyxJQUFJLGVBQVMsRUFBVyxDQUFBO1FBQzNDLCtCQUEwQixHQUFHLElBQUksZUFBUyxFQUFPLENBQUE7UUFHL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUE7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBRSxVQUFtQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0IsQ0FBRSxhQUFhO1FBQ2pDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDcEQsQ0FBQztDQUNGO0FBeEJELHNCQXdCQyJ9