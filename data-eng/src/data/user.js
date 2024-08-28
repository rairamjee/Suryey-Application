"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = createUsers;
var bcrypt_1 = require("bcrypt");
function createUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        return __generator(this, function (_w) {
            switch (_w.label) {
                case 0:
                    _b = {
                        name: "John Doe",
                        email: "john.doe@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("password123", 10)];
                case 1:
                    _a = [
                        (_b.password = _w.sent(),
                            _b.roles = 'User',
                            _b.designation = 'Software_Engineer',
                            _b)
                    ];
                    _c = {
                        name: "Jane Smith",
                        email: "jane.smith@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("securepass", 10)];
                case 2:
                    _a = _a.concat([
                        (_c.password = _w.sent(),
                            _c.roles = 'Admin',
                            _c.designation = 'Data_Analyst',
                            _c)
                    ]);
                    _d = {
                        name: "Alice Johnson",
                        email: "alice.johnson@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("mypassword", 10)];
                case 3:
                    _a = _a.concat([
                        (_d.password = _w.sent(),
                            _d.roles = 'User',
                            _d.designation = 'Devops_Engineer',
                            _d)
                    ]);
                    _e = {
                        name: "Bob Brown",
                        email: "bob.brown@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("bobsecure", 10)];
                case 4:
                    _a = _a.concat([
                        (_e.password = _w.sent(),
                            _e.roles = 'User',
                            _e.designation = 'Software_Engineer',
                            _e)
                    ]);
                    _f = {
                        name: "Charlie Davis",
                        email: "charlie.davis@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("charliedav123", 10)];
                case 5:
                    _a = _a.concat([
                        (_f.password = _w.sent(),
                            _f.roles = 'Admin',
                            _f.designation = 'Data_Analyst',
                            _f)
                    ]);
                    _g = {
                        name: "Eva Green",
                        email: "eva.green@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("evagreen123", 10)];
                case 6:
                    _a = _a.concat([
                        (_g.password = _w.sent(),
                            _g.roles = 'User',
                            _g.designation = 'Devops_Engineer',
                            _g)
                    ]);
                    _h = {
                        name: "Frank Harris",
                        email: "frank.harris@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("frankpass", 10)];
                case 7:
                    _a = _a.concat([
                        (_h.password = _w.sent(),
                            _h.roles = 'User',
                            _h.designation = 'Software_Engineer',
                            _h)
                    ]);
                    _j = {
                        name: "Grace Lee",
                        email: "grace.lee@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("gracelee123", 10)];
                case 8:
                    _a = _a.concat([
                        (_j.password = _w.sent(),
                            _j.roles = 'Admin',
                            _j.designation = 'Data_Analyst',
                            _j)
                    ]);
                    _k = {
                        name: "Henry Adams",
                        email: "henry.adams@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("henrypass", 10)];
                case 9:
                    _a = _a.concat([
                        (_k.password = _w.sent(),
                            _k.roles = 'User',
                            _k.designation = 'Devops_Engineer',
                            _k)
                    ]);
                    _l = {
                        name: "Ivy Walker",
                        email: "ivy.walker@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("ivywalkerpass", 10)];
                case 10:
                    _a = _a.concat([
                        (_l.password = _w.sent(),
                            _l.roles = 'User',
                            _l.designation = 'Software_Engineer',
                            _l)
                    ]);
                    _m = {
                        name: "Jack King",
                        email: "jack.king@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("jackkingpass", 10)];
                case 11:
                    _a = _a.concat([
                        (_m.password = _w.sent(),
                            _m.roles = 'Admin',
                            _m.designation = 'Data_Analyst',
                            _m)
                    ]);
                    _o = {
                        name: "Kate White",
                        email: "kate.white@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("katewhitepass", 10)];
                case 12:
                    _a = _a.concat([
                        (_o.password = _w.sent(),
                            _o.roles = 'User',
                            _o.designation = 'Devops_Engineer',
                            _o)
                    ]);
                    _p = {
                        name: "Leo Brooks",
                        email: "leo.brooks@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("leobrookspass", 10)];
                case 13:
                    _a = _a.concat([
                        (_p.password = _w.sent(),
                            _p.roles = 'User',
                            _p.designation = 'Software_Engineer',
                            _p)
                    ]);
                    _q = {
                        name: "Mia Scott",
                        email: "mia.scott@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("miascottpass", 10)];
                case 14:
                    _a = _a.concat([
                        (_q.password = _w.sent(),
                            _q.roles = 'Admin',
                            _q.designation = 'Data_Analyst',
                            _q)
                    ]);
                    _r = {
                        name: "Noah Reed",
                        email: "noah.reed@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("noahreedpass", 10)];
                case 15:
                    _a = _a.concat([
                        (_r.password = _w.sent(),
                            _r.roles = 'User',
                            _r.designation = 'Devops_Engineer',
                            _r)
                    ]);
                    _s = {
                        name: "Olivia Clark",
                        email: "olivia.clark@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("oliviaclarkpass", 10)];
                case 16:
                    _a = _a.concat([
                        (_s.password = _w.sent(),
                            _s.roles = 'User',
                            _s.designation = 'Software_Engineer',
                            _s)
                    ]);
                    _t = {
                        name: "Paul Young",
                        email: "paul.young@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("paulyoungpass", 10)];
                case 17:
                    _a = _a.concat([
                        (_t.password = _w.sent(),
                            _t.roles = 'Admin',
                            _t.designation = 'Data_Analyst',
                            _t)
                    ]);
                    _u = {
                        name: "Quinn Taylor",
                        email: "quinn.taylor@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("quinntaylorpass", 10)];
                case 18:
                    _a = _a.concat([
                        (_u.password = _w.sent(),
                            _u.roles = 'User',
                            _u.designation = 'Devops_Engineer',
                            _u)
                    ]);
                    _v = {
                        name: "Ryan Mitchell",
                        email: "ryan.mitchell@example.com"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("ryanmitchellpass", 10)];
                case 19: return [2 /*return*/, _a.concat([
                        (_v.password = _w.sent(),
                            _v.roles = 'User',
                            _v.designation = 'Software_Engineer',
                            _v)
                    ])];
            }
        });
    });
}
// Usage
createUsers().then(function (users) {
    console.log(users);
});
