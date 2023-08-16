(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const o of l)
			if (o.type === 'childList')
				for (const i of o.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = n(l);
		fetch(l.href, o);
	}
})();
function pc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Ju = { exports: {} },
	il = {},
	qu = { exports: {} },
	L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for('react.element'),
	hc = Symbol.for('react.portal'),
	mc = Symbol.for('react.fragment'),
	vc = Symbol.for('react.strict_mode'),
	yc = Symbol.for('react.profiler'),
	gc = Symbol.for('react.provider'),
	wc = Symbol.for('react.context'),
	Sc = Symbol.for('react.forward_ref'),
	kc = Symbol.for('react.suspense'),
	Ec = Symbol.for('react.memo'),
	_c = Symbol.for('react.lazy'),
	Bi = Symbol.iterator;
function Cc(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Bi && e[Bi]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var bu = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	es = Object.assign,
	ts = {};
function sn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ts),
		(this.updater = n || bu);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
sn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ns() {}
ns.prototype = sn.prototype;
function Ko(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ts),
		(this.updater = n || bu);
}
var Yo = (Ko.prototype = new ns());
Yo.constructor = Ko;
es(Yo, sn.prototype);
Yo.isPureReactComponent = !0;
var $i = Array.isArray,
	rs = Object.prototype.hasOwnProperty,
	Xo = { current: null },
	ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function os(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
		l.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: qn,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Xo.current,
	};
}
function Nc(e, t) {
	return {
		$$typeof: qn,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Go(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === qn;
}
function Pc(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Hi = /\/+/g;
function Pl(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Pc('' + e.key)
		: t.toString(36);
}
function _r(e, t, n, r, l) {
	var o = typeof e;
	(o === 'undefined' || o === 'boolean') && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case 'string':
			case 'number':
				i = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case qn:
					case hc:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === '' ? '.' + Pl(i, 0) : r),
			$i(l)
				? ((n = ''),
				  e != null && (n = e.replace(Hi, '$&/') + '/'),
				  _r(l, t, n, '', function (s) {
						return s;
				  }))
				: l != null &&
				  (Go(l) &&
						(l = Nc(
							l,
							n +
								(!l.key || (i && i.key === l.key)
									? ''
									: ('' + l.key).replace(Hi, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((i = 0), (r = r === '' ? '.' : r + ':'), $i(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var u = r + Pl(o, a);
			i += _r(o, t, n, u, l);
		}
	else if (((u = Cc(e)), typeof u == 'function'))
		for (e = u.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (u = r + Pl(o, a++)), (i += _r(o, t, n, u, l));
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return i;
}
function ir(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		_r(e, r, '', '', function (o) {
			return t.call(n, o, l++);
		}),
		r
	);
}
function xc(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ie = { current: null },
	Cr = { transition: null },
	zc = {
		ReactCurrentDispatcher: ie,
		ReactCurrentBatchConfig: Cr,
		ReactCurrentOwner: Xo,
	};
L.Children = {
	map: ir,
	forEach: function (e, t, n) {
		ir(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			ir(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			ir(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Go(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
L.Component = sn;
L.Fragment = mc;
L.Profiler = yc;
L.PureComponent = Ko;
L.StrictMode = vc;
L.Suspense = kc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
L.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = es({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = Xo.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (u in t)
			rs.call(t, u) &&
				!ls.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
		r.children = a;
	}
	return { $$typeof: qn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
	return (
		(e = {
			$$typeof: wc,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: gc, _context: e }),
		(e.Consumer = e)
	);
};
L.createElement = os;
L.createFactory = function (e) {
	var t = os.bind(null, e);
	return (t.type = e), t;
};
L.createRef = function () {
	return { current: null };
};
L.forwardRef = function (e) {
	return { $$typeof: Sc, render: e };
};
L.isValidElement = Go;
L.lazy = function (e) {
	return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: xc };
};
L.memo = function (e, t) {
	return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
	var t = Cr.transition;
	Cr.transition = {};
	try {
		e();
	} finally {
		Cr.transition = t;
	}
};
L.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
L.useCallback = function (e, t) {
	return ie.current.useCallback(e, t);
};
L.useContext = function (e) {
	return ie.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
	return ie.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
	return ie.current.useEffect(e, t);
};
L.useId = function () {
	return ie.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
	return ie.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
	return ie.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
	return ie.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
	return ie.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
	return ie.current.useReducer(e, t, n);
};
L.useRef = function (e) {
	return ie.current.useRef(e);
};
L.useState = function (e) {
	return ie.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
	return ie.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
	return ie.current.useTransition();
};
L.version = '18.2.0';
qu.exports = L;
var qe = qu.exports;
const Sn = pc(qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc = qe,
	Rc = Symbol.for('react.element'),
	Lc = Symbol.for('react.fragment'),
	Tc = Object.prototype.hasOwnProperty,
	Oc = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) Tc.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Rc,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Oc.current,
	};
}
il.Fragment = Lc;
il.jsx = is;
il.jsxs = is;
Ju.exports = il;
var me = Ju.exports,
	ql = {},
	us = { exports: {} },
	we = {},
	ss = { exports: {} },
	as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(C, z) {
		var R = C.length;
		C.push(z);
		e: for (; 0 < R; ) {
			var Q = (R - 1) >>> 1,
				X = C[Q];
			if (0 < l(X, z)) (C[Q] = z), (C[R] = X), (R = Q);
			else break e;
		}
	}
	function n(C) {
		return C.length === 0 ? null : C[0];
	}
	function r(C) {
		if (C.length === 0) return null;
		var z = C[0],
			R = C.pop();
		if (R !== z) {
			C[0] = R;
			e: for (var Q = 0, X = C.length, lr = X >>> 1; Q < lr; ) {
				var gt = 2 * (Q + 1) - 1,
					Nl = C[gt],
					wt = gt + 1,
					or = C[wt];
				if (0 > l(Nl, R))
					wt < X && 0 > l(or, Nl)
						? ((C[Q] = or), (C[wt] = R), (Q = wt))
						: ((C[Q] = Nl), (C[gt] = R), (Q = gt));
				else if (wt < X && 0 > l(or, R)) (C[Q] = or), (C[wt] = R), (Q = wt);
				else break e;
			}
		}
		return z;
	}
	function l(C, z) {
		var R = C.sortIndex - z.sortIndex;
		return R !== 0 ? R : C.id - z.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			a = i.now();
		e.unstable_now = function () {
			return i.now() - a;
		};
	}
	var u = [],
		s = [],
		c = 1,
		f = null,
		p = 3,
		y = !1,
		v = !1,
		w = !1,
		P = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		d = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function h(C) {
		for (var z = n(s); z !== null; ) {
			if (z.callback === null) r(s);
			else if (z.startTime <= C)
				r(s), (z.sortIndex = z.expirationTime), t(u, z);
			else break;
			z = n(s);
		}
	}
	function g(C) {
		if (((w = !1), h(C), !v))
			if (n(u) !== null) (v = !0), _l(k);
			else {
				var z = n(s);
				z !== null && Cl(g, z.startTime - C);
			}
	}
	function k(C, z) {
		(v = !1), w && ((w = !1), m(x), (x = -1)), (y = !0);
		var R = p;
		try {
			for (
				h(z), f = n(u);
				f !== null && (!(f.expirationTime > z) || (C && !se()));

			) {
				var Q = f.callback;
				if (typeof Q == 'function') {
					(f.callback = null), (p = f.priorityLevel);
					var X = Q(f.expirationTime <= z);
					(z = e.unstable_now()),
						typeof X == 'function' ? (f.callback = X) : f === n(u) && r(u),
						h(z);
				} else r(u);
				f = n(u);
			}
			if (f !== null) var lr = !0;
			else {
				var gt = n(s);
				gt !== null && Cl(g, gt.startTime - z), (lr = !1);
			}
			return lr;
		} finally {
			(f = null), (p = R), (y = !1);
		}
	}
	var N = !1,
		_ = null,
		x = -1,
		A = 5,
		M = -1;
	function se() {
		return !(e.unstable_now() - M < A);
	}
	function vt() {
		if (_ !== null) {
			var C = e.unstable_now();
			M = C;
			var z = !0;
			try {
				z = _(!0, C);
			} finally {
				z ? yt() : ((N = !1), (_ = null));
			}
		} else N = !1;
	}
	var yt;
	if (typeof d == 'function')
		yt = function () {
			d(vt);
		};
	else if (typeof MessageChannel < 'u') {
		var rr = new MessageChannel(),
			El = rr.port2;
		(rr.port1.onmessage = vt),
			(yt = function () {
				El.postMessage(null);
			});
	} else
		yt = function () {
			P(vt, 0);
		};
	function _l(C) {
		(_ = C), N || ((N = !0), yt());
	}
	function Cl(C, z) {
		x = P(function () {
			C(e.unstable_now());
		}, z);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (C) {
			C.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			v || y || ((v = !0), _l(k));
		}),
		(e.unstable_forceFrameRate = function (C) {
			0 > C || 125 < C
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (A = 0 < C ? Math.floor(1e3 / C) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (C) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var z = 3;
					break;
				default:
					z = p;
			}
			var R = p;
			p = z;
			try {
				return C();
			} finally {
				p = R;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (C, z) {
			switch (C) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					C = 3;
			}
			var R = p;
			p = C;
			try {
				return z();
			} finally {
				p = R;
			}
		}),
		(e.unstable_scheduleCallback = function (C, z, R) {
			var Q = e.unstable_now();
			switch (
				(typeof R == 'object' && R !== null
					? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? Q + R : Q))
					: (R = Q),
				C)
			) {
				case 1:
					var X = -1;
					break;
				case 2:
					X = 250;
					break;
				case 5:
					X = 1073741823;
					break;
				case 4:
					X = 1e4;
					break;
				default:
					X = 5e3;
			}
			return (
				(X = R + X),
				(C = {
					id: c++,
					callback: z,
					priorityLevel: C,
					startTime: R,
					expirationTime: X,
					sortIndex: -1,
				}),
				R > Q
					? ((C.sortIndex = R),
					  t(s, C),
					  n(u) === null &&
							C === n(s) &&
							(w ? (m(x), (x = -1)) : (w = !0), Cl(g, R - Q)))
					: ((C.sortIndex = X), t(u, C), v || y || ((v = !0), _l(k))),
				C
			);
		}),
		(e.unstable_shouldYield = se),
		(e.unstable_wrapCallback = function (C) {
			var z = p;
			return function () {
				var R = p;
				p = z;
				try {
					return C.apply(this, arguments);
				} finally {
					p = R;
				}
			};
		});
})(as);
ss.exports = as;
var Dc = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cs = qe,
	ge = Dc;
function S(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var fs = new Set(),
	Dn = {};
function Ot(e, t) {
	en(e, t), en(e + 'Capture', t);
}
function en(e, t) {
	for (Dn[e] = t, e = 0; e < t.length; e++) fs.add(t[e]);
}
var Ve = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	bl = Object.prototype.hasOwnProperty,
	Fc =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Qi = {},
	Vi = {};
function Ac(e) {
	return bl.call(Vi, e)
		? !0
		: bl.call(Qi, e)
		? !1
		: Fc.test(e)
		? (Vi[e] = !0)
		: ((Qi[e] = !0), !1);
}
function jc(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Uc(e, t, n, r) {
	if (t === null || typeof t > 'u' || jc(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function ue(e, t, n, r, l, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var b = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		b[e] = new ue(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	b[t] = new ue(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Zo, Jo);
		b[t] = new ue(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Zo, Jo);
		b[t] = new ue(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Zo, Jo);
	b[t] = new ue(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, t, n, r) {
	var l = b.hasOwnProperty(t) ? b[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Uc(t, n, l, r) && (n = null),
		r || l === null
			? Ac(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ur = Symbol.for('react.element'),
	Ft = Symbol.for('react.portal'),
	At = Symbol.for('react.fragment'),
	bo = Symbol.for('react.strict_mode'),
	eo = Symbol.for('react.profiler'),
	ds = Symbol.for('react.provider'),
	ps = Symbol.for('react.context'),
	ei = Symbol.for('react.forward_ref'),
	to = Symbol.for('react.suspense'),
	no = Symbol.for('react.suspense_list'),
	ti = Symbol.for('react.memo'),
	Ze = Symbol.for('react.lazy'),
	hs = Symbol.for('react.offscreen'),
	Wi = Symbol.iterator;
function fn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Wi && e[Wi]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var $ = Object.assign,
	xl;
function kn(e) {
	if (xl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			xl = (t && t[1]) || '';
		}
	return (
		`
` +
		xl +
		e
	);
}
var zl = !1;
function Ml(e, t) {
	if (!e || zl) return '';
	zl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (s) {
					var r = s;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (s) {
					r = s;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (s) {
				r = s;
			}
			e();
		}
	} catch (s) {
		if (s && r && typeof s.stack == 'string') {
			for (
				var l = s.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					a = o.length - 1;
				1 <= i && 0 <= a && l[i] !== o[a];

			)
				a--;
			for (; 1 <= i && 0 <= a; i--, a--)
				if (l[i] !== o[a]) {
					if (i !== 1 || a !== 1)
						do
							if ((i--, a--, 0 > a || l[i] !== o[a])) {
								var u =
									`
` + l[i].replace(' at new ', ' at ');
								return (
									e.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', e.displayName)),
									u
								);
							}
						while (1 <= i && 0 <= a);
					break;
				}
		}
	} finally {
		(zl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? kn(e) : '';
}
function Bc(e) {
	switch (e.tag) {
		case 5:
			return kn(e.type);
		case 16:
			return kn('Lazy');
		case 13:
			return kn('Suspense');
		case 19:
			return kn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Ml(e.type, !1)), e;
		case 11:
			return (e = Ml(e.type.render, !1)), e;
		case 1:
			return (e = Ml(e.type, !0)), e;
		default:
			return '';
	}
}
function ro(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case At:
			return 'Fragment';
		case Ft:
			return 'Portal';
		case eo:
			return 'Profiler';
		case bo:
			return 'StrictMode';
		case to:
			return 'Suspense';
		case no:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case ps:
				return (e.displayName || 'Context') + '.Consumer';
			case ds:
				return (e._context.displayName || 'Context') + '.Provider';
			case ei:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case ti:
				return (
					(t = e.displayName || null), t !== null ? t : ro(e.type) || 'Memo'
				);
			case Ze:
				(t = e._payload), (e = e._init);
				try {
					return ro(e(t));
				} catch {}
		}
	return null;
}
function $c(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return ro(t);
		case 8:
			return t === bo ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function ft(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function ms(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Hc(e) {
	var t = ms(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = '' + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = '' + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function sr(e) {
	e._valueTracker || (e._valueTracker = Hc(e));
}
function vs(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = ms(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Dr(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function lo(e, t) {
	var n = t.checked;
	return $({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ki(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = ft(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function ys(e, t) {
	(t = t.checked), t != null && qo(e, 'checked', t, !1);
}
function oo(e, t) {
	ys(e, t);
	var n = ft(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? io(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && io(e, t.type, ft(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Yi(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function io(e, t, n) {
	(t !== 'number' || Dr(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var En = Array.isArray;
function Xt(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function uo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
	return $({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function Xi(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(S(92));
			if (En(n)) {
				if (1 < n.length) throw Error(S(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: ft(n) };
}
function gs(e, t) {
	var n = ft(t.value),
		r = ft(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function Gi(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ws(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function so(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? ws(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var ar,
	Ss = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				ar = ar || document.createElement('div'),
					ar.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = ar.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Fn(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Pn = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Qc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Pn).forEach(function (e) {
	Qc.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
	});
});
function ks(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
		? ('' + t).trim()
		: t + 'px';
}
function Es(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = ks(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var Vc = $(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function ao(e, t) {
	if (t) {
		if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(S(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(S(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(S(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(S(62));
	}
}
function co(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var fo = null;
function ni(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var po = null,
	Gt = null,
	Zt = null;
function Zi(e) {
	if ((e = tr(e))) {
		if (typeof po != 'function') throw Error(S(280));
		var t = e.stateNode;
		t && ((t = fl(t)), po(e.stateNode, e.type, t));
	}
}
function _s(e) {
	Gt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Gt = e);
}
function Cs() {
	if (Gt) {
		var e = Gt,
			t = Zt;
		if (((Zt = Gt = null), Zi(e), t)) for (e = 0; e < t.length; e++) Zi(t[e]);
	}
}
function Ns(e, t) {
	return e(t);
}
function Ps() {}
var Rl = !1;
function xs(e, t, n) {
	if (Rl) return e(t, n);
	Rl = !0;
	try {
		return Ns(e, t, n);
	} finally {
		(Rl = !1), (Gt !== null || Zt !== null) && (Ps(), Cs());
	}
}
function An(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = fl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(S(231, t, typeof n));
	return n;
}
var ho = !1;
if (Ve)
	try {
		var dn = {};
		Object.defineProperty(dn, 'passive', {
			get: function () {
				ho = !0;
			},
		}),
			window.addEventListener('test', dn, dn),
			window.removeEventListener('test', dn, dn);
	} catch {
		ho = !1;
	}
function Wc(e, t, n, r, l, o, i, a, u) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (c) {
		this.onError(c);
	}
}
var xn = !1,
	Fr = null,
	Ar = !1,
	mo = null,
	Kc = {
		onError: function (e) {
			(xn = !0), (Fr = e);
		},
	};
function Yc(e, t, n, r, l, o, i, a, u) {
	(xn = !1), (Fr = null), Wc.apply(Kc, arguments);
}
function Xc(e, t, n, r, l, o, i, a, u) {
	if ((Yc.apply(this, arguments), xn)) {
		if (xn) {
			var s = Fr;
			(xn = !1), (Fr = null);
		} else throw Error(S(198));
		Ar || ((Ar = !0), (mo = s));
	}
}
function It(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function zs(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Ji(e) {
	if (It(e) !== e) throw Error(S(188));
}
function Gc(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = It(e)), t === null)) throw Error(S(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return Ji(l), e;
				if (o === r) return Ji(l), t;
				o = o.sibling;
			}
			throw Error(S(188));
		}
		if (n.return !== r.return) (n = l), (r = o);
		else {
			for (var i = !1, a = l.child; a; ) {
				if (a === n) {
					(i = !0), (n = l), (r = o);
					break;
				}
				if (a === r) {
					(i = !0), (r = l), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!i) {
				for (a = o.child; a; ) {
					if (a === n) {
						(i = !0), (n = o), (r = l);
						break;
					}
					if (a === r) {
						(i = !0), (r = o), (n = l);
						break;
					}
					a = a.sibling;
				}
				if (!i) throw Error(S(189));
			}
		}
		if (n.alternate !== r) throw Error(S(190));
	}
	if (n.tag !== 3) throw Error(S(188));
	return n.stateNode.current === n ? e : t;
}
function Ms(e) {
	return (e = Gc(e)), e !== null ? Rs(e) : null;
}
function Rs(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Rs(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Ls = ge.unstable_scheduleCallback,
	qi = ge.unstable_cancelCallback,
	Zc = ge.unstable_shouldYield,
	Jc = ge.unstable_requestPaint,
	V = ge.unstable_now,
	qc = ge.unstable_getCurrentPriorityLevel,
	ri = ge.unstable_ImmediatePriority,
	Ts = ge.unstable_UserBlockingPriority,
	jr = ge.unstable_NormalPriority,
	bc = ge.unstable_LowPriority,
	Os = ge.unstable_IdlePriority,
	ul = null,
	Ae = null;
function ef(e) {
	if (Ae && typeof Ae.onCommitFiberRoot == 'function')
		try {
			Ae.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Le = Math.clz32 ? Math.clz32 : rf,
	tf = Math.log,
	nf = Math.LN2;
function rf(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((tf(e) / nf) | 0)) | 0;
}
var cr = 64,
	fr = 4194304;
function _n(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Ur(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var a = i & ~l;
		a !== 0 ? (r = _n(a)) : ((o &= i), o !== 0 && (r = _n(o)));
	} else (i = n & ~l), i !== 0 ? (r = _n(i)) : o !== 0 && (r = _n(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Le(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function lf(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function of(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var i = 31 - Le(o),
			a = 1 << i,
			u = l[i];
		u === -1
			? (!(a & n) || a & r) && (l[i] = lf(a, t))
			: u <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function vo(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Is() {
	var e = cr;
	return (cr <<= 1), !(cr & 4194240) && (cr = 64), e;
}
function Ll(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function bn(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Le(t)),
		(e[t] = n);
}
function uf(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - Le(n),
			o = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
	}
}
function li(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Le(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var O = 0;
function Ds(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fs,
	oi,
	As,
	js,
	Us,
	yo = !1,
	dr = [],
	rt = null,
	lt = null,
	ot = null,
	jn = new Map(),
	Un = new Map(),
	be = [],
	sf =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function bi(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			rt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			lt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			ot = null;
			break;
		case 'pointerover':
		case 'pointerout':
			jn.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Un.delete(t.pointerId);
	}
}
function pn(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [l],
		  }),
		  t !== null && ((t = tr(t)), t !== null && oi(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function af(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (rt = pn(rt, e, t, n, r, l)), !0;
		case 'dragenter':
			return (lt = pn(lt, e, t, n, r, l)), !0;
		case 'mouseover':
			return (ot = pn(ot, e, t, n, r, l)), !0;
		case 'pointerover':
			var o = l.pointerId;
			return jn.set(o, pn(jn.get(o) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(o = l.pointerId), Un.set(o, pn(Un.get(o) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function Bs(e) {
	var t = Et(e.target);
	if (t !== null) {
		var n = It(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = zs(n)), t !== null)) {
					(e.blockedOn = t),
						Us(e.priority, function () {
							As(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Nr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(fo = r), n.target.dispatchEvent(r), (fo = null);
		} else return (t = tr(n)), t !== null && oi(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function eu(e, t, n) {
	Nr(e) && n.delete(t);
}
function cf() {
	(yo = !1),
		rt !== null && Nr(rt) && (rt = null),
		lt !== null && Nr(lt) && (lt = null),
		ot !== null && Nr(ot) && (ot = null),
		jn.forEach(eu),
		Un.forEach(eu);
}
function hn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		yo ||
			((yo = !0),
			ge.unstable_scheduleCallback(ge.unstable_NormalPriority, cf)));
}
function Bn(e) {
	function t(l) {
		return hn(l, e);
	}
	if (0 < dr.length) {
		hn(dr[0], e);
		for (var n = 1; n < dr.length; n++) {
			var r = dr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		rt !== null && hn(rt, e),
			lt !== null && hn(lt, e),
			ot !== null && hn(ot, e),
			jn.forEach(t),
			Un.forEach(t),
			n = 0;
		n < be.length;
		n++
	)
		(r = be[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
		Bs(n), n.blockedOn === null && be.shift();
}
var Jt = Xe.ReactCurrentBatchConfig,
	Br = !0;
function ff(e, t, n, r) {
	var l = O,
		o = Jt.transition;
	Jt.transition = null;
	try {
		(O = 1), ii(e, t, n, r);
	} finally {
		(O = l), (Jt.transition = o);
	}
}
function df(e, t, n, r) {
	var l = O,
		o = Jt.transition;
	Jt.transition = null;
	try {
		(O = 4), ii(e, t, n, r);
	} finally {
		(O = l), (Jt.transition = o);
	}
}
function ii(e, t, n, r) {
	if (Br) {
		var l = go(e, t, n, r);
		if (l === null) $l(e, t, r, $r, n), bi(e, r);
		else if (af(l, e, t, n, r)) r.stopPropagation();
		else if ((bi(e, r), t & 4 && -1 < sf.indexOf(e))) {
			for (; l !== null; ) {
				var o = tr(l);
				if (
					(o !== null && Fs(o),
					(o = go(e, t, n, r)),
					o === null && $l(e, t, r, $r, n),
					o === l)
				)
					break;
				l = o;
			}
			l !== null && r.stopPropagation();
		} else $l(e, t, r, null, n);
	}
}
var $r = null;
function go(e, t, n, r) {
	if ((($r = null), (e = ni(r)), (e = Et(e)), e !== null))
		if (((t = It(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = zs(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return ($r = e), null;
}
function $s(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (qc()) {
				case ri:
					return 1;
				case Ts:
					return 4;
				case jr:
				case bc:
					return 16;
				case Os:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var tt = null,
	ui = null,
	Pr = null;
function Hs() {
	if (Pr) return Pr;
	var e,
		t = ui,
		n = t.length,
		r,
		l = 'value' in tt ? tt.value : tt.textContent,
		o = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function pr() {
	return !0;
}
function tu() {
	return !1;
}
function Se(e) {
	function t(n, r, l, o, i) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? pr
				: tu),
			(this.isPropagationStopped = tu),
			this
		);
	}
	return (
		$(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = pr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = pr));
			},
			persist: function () {},
			isPersistent: pr,
		}),
		t
	);
}
var an = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	si = Se(an),
	er = $({}, an, { view: 0, detail: 0 }),
	pf = Se(er),
	Tl,
	Ol,
	mn,
	sl = $({}, er, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ai,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== mn &&
						(mn && e.type === 'mousemove'
							? ((Tl = e.screenX - mn.screenX), (Ol = e.screenY - mn.screenY))
							: (Ol = Tl = 0),
						(mn = e)),
				  Tl);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Ol;
		},
	}),
	nu = Se(sl),
	hf = $({}, sl, { dataTransfer: 0 }),
	mf = Se(hf),
	vf = $({}, er, { relatedTarget: 0 }),
	Il = Se(vf),
	yf = $({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	gf = Se(yf),
	wf = $({}, an, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Sf = Se(wf),
	kf = $({}, an, { data: 0 }),
	ru = Se(kf),
	Ef = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	_f = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Cf = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Nf(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function ai() {
	return Nf;
}
var Pf = $({}, er, {
		key: function (e) {
			if (e.key) {
				var t = Ef[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? _f[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ai,
		charCode: function (e) {
			return e.type === 'keypress' ? xr(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? xr(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	xf = Se(Pf),
	zf = $({}, sl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	lu = Se(zf),
	Mf = $({}, er, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ai,
	}),
	Rf = Se(Mf),
	Lf = $({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Tf = Se(Lf),
	Of = $({}, sl, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	If = Se(Of),
	Df = [9, 13, 27, 32],
	ci = Ve && 'CompositionEvent' in window,
	zn = null;
Ve && 'documentMode' in document && (zn = document.documentMode);
var Ff = Ve && 'TextEvent' in window && !zn,
	Qs = Ve && (!ci || (zn && 8 < zn && 11 >= zn)),
	ou = String.fromCharCode(32),
	iu = !1;
function Vs(e, t) {
	switch (e) {
		case 'keyup':
			return Df.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Ws(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var jt = !1;
function Af(e, t) {
	switch (e) {
		case 'compositionend':
			return Ws(t);
		case 'keypress':
			return t.which !== 32 ? null : ((iu = !0), ou);
		case 'textInput':
			return (e = t.data), e === ou && iu ? null : e;
		default:
			return null;
	}
}
function jf(e, t) {
	if (jt)
		return e === 'compositionend' || (!ci && Vs(e, t))
			? ((e = Hs()), (Pr = ui = tt = null), (jt = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return Qs && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Uf = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function uu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Uf[e.type] : t === 'textarea';
}
function Ks(e, t, n, r) {
	_s(r),
		(t = Hr(t, 'onChange')),
		0 < t.length &&
			((n = new si('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Mn = null,
	$n = null;
function Bf(e) {
	ra(e, 0);
}
function al(e) {
	var t = $t(e);
	if (vs(t)) return e;
}
function $f(e, t) {
	if (e === 'change') return t;
}
var Ys = !1;
if (Ve) {
	var Dl;
	if (Ve) {
		var Fl = 'oninput' in document;
		if (!Fl) {
			var su = document.createElement('div');
			su.setAttribute('oninput', 'return;'),
				(Fl = typeof su.oninput == 'function');
		}
		Dl = Fl;
	} else Dl = !1;
	Ys = Dl && (!document.documentMode || 9 < document.documentMode);
}
function au() {
	Mn && (Mn.detachEvent('onpropertychange', Xs), ($n = Mn = null));
}
function Xs(e) {
	if (e.propertyName === 'value' && al($n)) {
		var t = [];
		Ks(t, $n, e, ni(e)), xs(Bf, t);
	}
}
function Hf(e, t, n) {
	e === 'focusin'
		? (au(), (Mn = t), ($n = n), Mn.attachEvent('onpropertychange', Xs))
		: e === 'focusout' && au();
}
function Qf(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return al($n);
}
function Vf(e, t) {
	if (e === 'click') return al(t);
}
function Wf(e, t) {
	if (e === 'input' || e === 'change') return al(t);
}
function Kf(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == 'function' ? Object.is : Kf;
function Hn(e, t) {
	if (Oe(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!bl.call(t, l) || !Oe(e[l], t[l])) return !1;
	}
	return !0;
}
function cu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function fu(e, t) {
	var n = cu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = cu(n);
	}
}
function Gs(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Gs(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Zs() {
	for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Dr(e.document);
	}
	return t;
}
function fi(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function Yf(e) {
	var t = Zs(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Gs(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && fi(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					o = Math.min(r.start, l);
				(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = fu(n, o));
				var i = fu(n, r);
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Xf = Ve && 'documentMode' in document && 11 >= document.documentMode,
	Ut = null,
	wo = null,
	Rn = null,
	So = !1;
function du(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	So ||
		Ut == null ||
		Ut !== Dr(r) ||
		((r = Ut),
		'selectionStart' in r && fi(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Rn && Hn(Rn, r)) ||
			((Rn = r),
			(r = Hr(wo, 'onSelect')),
			0 < r.length &&
				((t = new si('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Ut))));
}
function hr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Bt = {
		animationend: hr('Animation', 'AnimationEnd'),
		animationiteration: hr('Animation', 'AnimationIteration'),
		animationstart: hr('Animation', 'AnimationStart'),
		transitionend: hr('Transition', 'TransitionEnd'),
	},
	Al = {},
	Js = {};
Ve &&
	((Js = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Bt.animationend.animation,
		delete Bt.animationiteration.animation,
		delete Bt.animationstart.animation),
	'TransitionEvent' in window || delete Bt.transitionend.transition);
function cl(e) {
	if (Al[e]) return Al[e];
	if (!Bt[e]) return e;
	var t = Bt[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Js) return (Al[e] = t[n]);
	return e;
}
var qs = cl('animationend'),
	bs = cl('animationiteration'),
	ea = cl('animationstart'),
	ta = cl('transitionend'),
	na = new Map(),
	pu =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function pt(e, t) {
	na.set(e, t), Ot(t, [e]);
}
for (var jl = 0; jl < pu.length; jl++) {
	var Ul = pu[jl],
		Gf = Ul.toLowerCase(),
		Zf = Ul[0].toUpperCase() + Ul.slice(1);
	pt(Gf, 'on' + Zf);
}
pt(qs, 'onAnimationEnd');
pt(bs, 'onAnimationIteration');
pt(ea, 'onAnimationStart');
pt('dblclick', 'onDoubleClick');
pt('focusin', 'onFocus');
pt('focusout', 'onBlur');
pt(ta, 'onTransitionEnd');
en('onMouseEnter', ['mouseout', 'mouseover']);
en('onMouseLeave', ['mouseout', 'mouseover']);
en('onPointerEnter', ['pointerout', 'pointerover']);
en('onPointerLeave', ['pointerout', 'pointerover']);
Ot(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ot(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Ot('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ot(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ot(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ot(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Cn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Jf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cn));
function hu(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Xc(r, t, void 0, e), (e.currentTarget = null);
}
function ra(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var a = r[i],
						u = a.instance,
						s = a.currentTarget;
					if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
					hu(l, a, s), (o = u);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((a = r[i]),
						(u = a.instance),
						(s = a.currentTarget),
						(a = a.listener),
						u !== o && l.isPropagationStopped())
					)
						break e;
					hu(l, a, s), (o = u);
				}
		}
	}
	if (Ar) throw ((e = mo), (Ar = !1), (mo = null), e);
}
function D(e, t) {
	var n = t[No];
	n === void 0 && (n = t[No] = new Set());
	var r = e + '__bubble';
	n.has(r) || (la(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
	var r = 0;
	t && (r |= 4), la(n, e, r, t);
}
var mr = '_reactListening' + Math.random().toString(36).slice(2);
function Qn(e) {
	if (!e[mr]) {
		(e[mr] = !0),
			fs.forEach(function (n) {
				n !== 'selectionchange' && (Jf.has(n) || Bl(n, !1, e), Bl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[mr] || ((t[mr] = !0), Bl('selectionchange', !1, t));
	}
}
function la(e, t, n, r) {
	switch ($s(t)) {
		case 1:
			var l = ff;
			break;
		case 4:
			l = df;
			break;
		default:
			l = ii;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!ho ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var a = r.stateNode.containerInfo;
				if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var u = i.tag;
						if (
							(u === 3 || u === 4) &&
							((u = i.stateNode.containerInfo),
							u === l || (u.nodeType === 8 && u.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; a !== null; ) {
					if (((i = Et(a)), i === null)) return;
					if (((u = i.tag), u === 5 || u === 6)) {
						r = o = i;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	xs(function () {
		var s = o,
			c = ni(n),
			f = [];
		e: {
			var p = na.get(e);
			if (p !== void 0) {
				var y = si,
					v = e;
				switch (e) {
					case 'keypress':
						if (xr(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = xf;
						break;
					case 'focusin':
						(v = 'focus'), (y = Il);
						break;
					case 'focusout':
						(v = 'blur'), (y = Il);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = Il;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						y = nu;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = mf;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Rf;
						break;
					case qs:
					case bs:
					case ea:
						y = gf;
						break;
					case ta:
						y = Tf;
						break;
					case 'scroll':
						y = pf;
						break;
					case 'wheel':
						y = If;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = Sf;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = lu;
				}
				var w = (t & 4) !== 0,
					P = !w && e === 'scroll',
					m = w ? (p !== null ? p + 'Capture' : null) : p;
				w = [];
				for (var d = s, h; d !== null; ) {
					h = d;
					var g = h.stateNode;
					if (
						(h.tag === 5 &&
							g !== null &&
							((h = g),
							m !== null && ((g = An(d, m)), g != null && w.push(Vn(d, g, h)))),
						P)
					)
						break;
					d = d.return;
				}
				0 < w.length &&
					((p = new y(p, v, null, n, c)), f.push({ event: p, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					p &&
						n !== fo &&
						(v = n.relatedTarget || n.fromElement) &&
						(Et(v) || v[We]))
				)
					break e;
				if (
					(y || p) &&
					((p =
						c.window === c
							? c
							: (p = c.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					y
						? ((v = n.relatedTarget || n.toElement),
						  (y = s),
						  (v = v ? Et(v) : null),
						  v !== null &&
								((P = It(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
								(v = null))
						: ((y = null), (v = s)),
					y !== v)
				) {
					if (
						((w = nu),
						(g = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(d = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((w = lu),
							(g = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(d = 'pointer')),
						(P = y == null ? p : $t(y)),
						(h = v == null ? p : $t(v)),
						(p = new w(g, d + 'leave', y, n, c)),
						(p.target = P),
						(p.relatedTarget = h),
						(g = null),
						Et(c) === s &&
							((w = new w(m, d + 'enter', v, n, c)),
							(w.target = h),
							(w.relatedTarget = P),
							(g = w)),
						(P = g),
						y && v)
					)
						t: {
							for (w = y, m = v, d = 0, h = w; h; h = Dt(h)) d++;
							for (h = 0, g = m; g; g = Dt(g)) h++;
							for (; 0 < d - h; ) (w = Dt(w)), d--;
							for (; 0 < h - d; ) (m = Dt(m)), h--;
							for (; d--; ) {
								if (w === m || (m !== null && w === m.alternate)) break t;
								(w = Dt(w)), (m = Dt(m));
							}
							w = null;
						}
					else w = null;
					y !== null && mu(f, p, y, w, !1),
						v !== null && P !== null && mu(f, P, v, w, !0);
				}
			}
			e: {
				if (
					((p = s ? $t(s) : window),
					(y = p.nodeName && p.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && p.type === 'file'))
				)
					var k = $f;
				else if (uu(p))
					if (Ys) k = Wf;
					else {
						k = Qf;
						var N = Hf;
					}
				else
					(y = p.nodeName) &&
						y.toLowerCase() === 'input' &&
						(p.type === 'checkbox' || p.type === 'radio') &&
						(k = Vf);
				if (k && (k = k(e, s))) {
					Ks(f, k, n, c);
					break e;
				}
				N && N(e, p, s),
					e === 'focusout' &&
						(N = p._wrapperState) &&
						N.controlled &&
						p.type === 'number' &&
						io(p, 'number', p.value);
			}
			switch (((N = s ? $t(s) : window), e)) {
				case 'focusin':
					(uu(N) || N.contentEditable === 'true') &&
						((Ut = N), (wo = s), (Rn = null));
					break;
				case 'focusout':
					Rn = wo = Ut = null;
					break;
				case 'mousedown':
					So = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(So = !1), du(f, n, c);
					break;
				case 'selectionchange':
					if (Xf) break;
				case 'keydown':
				case 'keyup':
					du(f, n, c);
			}
			var _;
			if (ci)
				e: {
					switch (e) {
						case 'compositionstart':
							var x = 'onCompositionStart';
							break e;
						case 'compositionend':
							x = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							x = 'onCompositionUpdate';
							break e;
					}
					x = void 0;
				}
			else
				jt
					? Vs(e, n) && (x = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (x = 'onCompositionStart');
			x &&
				(Qs &&
					n.locale !== 'ko' &&
					(jt || x !== 'onCompositionStart'
						? x === 'onCompositionEnd' && jt && (_ = Hs())
						: ((tt = c),
						  (ui = 'value' in tt ? tt.value : tt.textContent),
						  (jt = !0))),
				(N = Hr(s, x)),
				0 < N.length &&
					((x = new ru(x, e, null, n, c)),
					f.push({ event: x, listeners: N }),
					_ ? (x.data = _) : ((_ = Ws(n)), _ !== null && (x.data = _)))),
				(_ = Ff ? Af(e, n) : jf(e, n)) &&
					((s = Hr(s, 'onBeforeInput')),
					0 < s.length &&
						((c = new ru('onBeforeInput', 'beforeinput', null, n, c)),
						f.push({ event: c, listeners: s }),
						(c.data = _)));
		}
		ra(f, t);
	});
}
function Vn(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Hr(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = An(e, n)),
			o != null && r.unshift(Vn(e, o, l)),
			(o = An(e, t)),
			o != null && r.push(Vn(e, o, l))),
			(e = e.return);
	}
	return r;
}
function Dt(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function mu(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var a = n,
			u = a.alternate,
			s = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 &&
			s !== null &&
			((a = s),
			l
				? ((u = An(n, o)), u != null && i.unshift(Vn(n, u, a)))
				: l || ((u = An(n, o)), u != null && i.push(Vn(n, u, a)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var qf = /\r\n?/g,
	bf = /\u0000|\uFFFD/g;
function vu(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			qf,
			`
`
		)
		.replace(bf, '');
}
function vr(e, t, n) {
	if (((t = vu(t)), vu(e) !== t && n)) throw Error(S(425));
}
function Qr() {}
var ko = null,
	Eo = null;
function _o(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Co = typeof setTimeout == 'function' ? setTimeout : void 0,
	ed = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	yu = typeof Promise == 'function' ? Promise : void 0,
	td =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof yu < 'u'
			? function (e) {
					return yu.resolve(null).then(e).catch(nd);
			  }
			: Co;
function nd(e) {
	setTimeout(function () {
		throw e;
	});
}
function Hl(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Bn(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	Bn(t);
}
function it(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function gu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var cn = Math.random().toString(36).slice(2),
	Fe = '__reactFiber$' + cn,
	Wn = '__reactProps$' + cn,
	We = '__reactContainer$' + cn,
	No = '__reactEvents$' + cn,
	rd = '__reactListeners$' + cn,
	ld = '__reactHandles$' + cn;
function Et(e) {
	var t = e[Fe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[We] || n[Fe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = gu(e); e !== null; ) {
					if ((n = e[Fe])) return n;
					e = gu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function tr(e) {
	return (
		(e = e[Fe] || e[We]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function $t(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(S(33));
}
function fl(e) {
	return e[Wn] || null;
}
var Po = [],
	Ht = -1;
function ht(e) {
	return { current: e };
}
function F(e) {
	0 > Ht || ((e.current = Po[Ht]), (Po[Ht] = null), Ht--);
}
function I(e, t) {
	Ht++, (Po[Ht] = e.current), (e.current = t);
}
var dt = {},
	re = ht(dt),
	fe = ht(!1),
	xt = dt;
function tn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return dt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in n) l[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function de(e) {
	return (e = e.childContextTypes), e != null;
}
function Vr() {
	F(fe), F(re);
}
function wu(e, t, n) {
	if (re.current !== dt) throw Error(S(168));
	I(re, t), I(fe, n);
}
function oa(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(S(108, $c(e) || 'Unknown', l));
	return $({}, n, r);
}
function Wr(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
		(xt = re.current),
		I(re, e),
		I(fe, fe.current),
		!0
	);
}
function Su(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(S(169));
	n
		? ((e = oa(e, t, xt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  F(fe),
		  F(re),
		  I(re, e))
		: F(fe),
		I(fe, n);
}
var Be = null,
	dl = !1,
	Ql = !1;
function ia(e) {
	Be === null ? (Be = [e]) : Be.push(e);
}
function od(e) {
	(dl = !0), ia(e);
}
function mt() {
	if (!Ql && Be !== null) {
		Ql = !0;
		var e = 0,
			t = O;
		try {
			var n = Be;
			for (O = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Be = null), (dl = !1);
		} catch (l) {
			throw (Be !== null && (Be = Be.slice(e + 1)), Ls(ri, mt), l);
		} finally {
			(O = t), (Ql = !1);
		}
	}
	return null;
}
var Qt = [],
	Vt = 0,
	Kr = null,
	Yr = 0,
	ke = [],
	Ee = 0,
	zt = null,
	$e = 1,
	He = '';
function St(e, t) {
	(Qt[Vt++] = Yr), (Qt[Vt++] = Kr), (Kr = e), (Yr = t);
}
function ua(e, t, n) {
	(ke[Ee++] = $e), (ke[Ee++] = He), (ke[Ee++] = zt), (zt = e);
	var r = $e;
	e = He;
	var l = 32 - Le(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var o = 32 - Le(t) + l;
	if (30 < o) {
		var i = l - (l % 5);
		(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			($e = (1 << (32 - Le(t) + l)) | (n << l) | r),
			(He = o + e);
	} else ($e = (1 << o) | (n << l) | r), (He = e);
}
function di(e) {
	e.return !== null && (St(e, 1), ua(e, 1, 0));
}
function pi(e) {
	for (; e === Kr; )
		(Kr = Qt[--Vt]), (Qt[Vt] = null), (Yr = Qt[--Vt]), (Qt[Vt] = null);
	for (; e === zt; )
		(zt = ke[--Ee]),
			(ke[Ee] = null),
			(He = ke[--Ee]),
			(ke[Ee] = null),
			($e = ke[--Ee]),
			(ke[Ee] = null);
}
var ye = null,
	ve = null,
	j = !1,
	Re = null;
function sa(e, t) {
	var n = _e(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ku(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = zt !== null ? { id: $e, overflow: He } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = _e(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (ye = e),
					  (ve = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function xo(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
	if (j) {
		var t = ve;
		if (t) {
			var n = t;
			if (!ku(e, t)) {
				if (xo(e)) throw Error(S(418));
				t = it(n.nextSibling);
				var r = ye;
				t && ku(e, t)
					? sa(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e));
			}
		} else {
			if (xo(e)) throw Error(S(418));
			(e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e);
		}
	}
}
function Eu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	ye = e;
}
function yr(e) {
	if (e !== ye) return !1;
	if (!j) return Eu(e), (j = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !_o(e.type, e.memoizedProps))),
		t && (t = ve))
	) {
		if (xo(e)) throw (aa(), Error(S(418)));
		for (; t; ) sa(e, t), (t = it(t.nextSibling));
	}
	if ((Eu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(S(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ve = it(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ve = null;
		}
	} else ve = ye ? it(e.stateNode.nextSibling) : null;
	return !0;
}
function aa() {
	for (var e = ve; e; ) e = it(e.nextSibling);
}
function nn() {
	(ve = ye = null), (j = !1);
}
function hi(e) {
	Re === null ? (Re = [e]) : Re.push(e);
}
var id = Xe.ReactCurrentBatchConfig;
function ze(e, t) {
	if (e && e.defaultProps) {
		(t = $({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Xr = ht(null),
	Gr = null,
	Wt = null,
	mi = null;
function vi() {
	mi = Wt = Gr = null;
}
function yi(e) {
	var t = Xr.current;
	F(Xr), (e._currentValue = t);
}
function Mo(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function qt(e, t) {
	(Gr = e),
		(mi = Wt = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ne(e) {
	var t = e._currentValue;
	if (mi !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
			if (Gr === null) throw Error(S(308));
			(Wt = e), (Gr.dependencies = { lanes: 0, firstContext: e });
		} else Wt = Wt.next = e;
	return t;
}
var _t = null;
function gi(e) {
	_t === null ? (_t = [e]) : _t.push(e);
}
function ca(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), gi(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Ke(e, r)
	);
}
function Ke(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function wi(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function fa(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Qe(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function ut(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), T & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Ke(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), gi(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Ke(e, n)
	);
}
function zr(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
	}
}
function _u(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (l = o = t) : (o = o.next = t);
		} else l = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
	var l = e.updateQueue;
	Je = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var u = a,
			s = u.next;
		(u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== i &&
				(a === null ? (c.firstBaseUpdate = s) : (a.next = s),
				(c.lastBaseUpdate = u)));
	}
	if (o !== null) {
		var f = l.baseState;
		(i = 0), (c = s = u = null), (a = o);
		do {
			var p = a.lane,
				y = a.eventTime;
			if ((r & p) === p) {
				c !== null &&
					(c = c.next =
						{
							eventTime: y,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var v = e,
						w = a;
					switch (((p = t), (y = n), w.tag)) {
						case 1:
							if (((v = w.payload), typeof v == 'function')) {
								f = v.call(y, f, p);
								break e;
							}
							f = v;
							break e;
						case 3:
							v.flags = (v.flags & -65537) | 128;
						case 0:
							if (
								((v = w.payload),
								(p = typeof v == 'function' ? v.call(y, f, p) : v),
								p == null)
							)
								break e;
							f = $({}, f, p);
							break e;
						case 2:
							Je = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(p = l.effects),
					p === null ? (l.effects = [a]) : p.push(a));
			} else
				(y = {
					eventTime: y,
					lane: p,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((s = c = y), (u = f)) : (c = c.next = y),
					(i |= p);
			if (((a = a.next), a === null)) {
				if (((a = l.shared.pending), a === null)) break;
				(p = a),
					(a = p.next),
					(p.next = null),
					(l.lastBaseUpdate = p),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (u = f),
			(l.baseState = u),
			(l.firstBaseUpdate = s),
			(l.lastBaseUpdate = c),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (i |= l.lane), (l = l.next);
			while (l !== t);
		} else o === null && (l.shared.lanes = 0);
		(Rt |= i), (e.lanes = i), (e.memoizedState = f);
	}
}
function Cu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(S(191, l));
				l.call(r);
			}
		}
}
var da = new cs.Component().refs;
function Ro(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : $({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? It(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = oe(),
			l = at(e),
			o = Qe(r, l);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = ut(e, o, l)),
			t !== null && (Te(t, e, l, r), zr(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = oe(),
			l = at(e),
			o = Qe(r, l);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = ut(e, o, l)),
			t !== null && (Te(t, e, l, r), zr(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = oe(),
			r = at(e),
			l = Qe(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = ut(e, l, r)),
			t !== null && (Te(t, e, r, n), zr(t, e, r));
	},
};
function Nu(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !Hn(n, r) || !Hn(l, o)
			: !0
	);
}
function pa(e, t, n) {
	var r = !1,
		l = dt,
		o = t.contextType;
	return (
		typeof o == 'object' && o !== null
			? (o = Ne(o))
			: ((l = de(t) ? xt : re.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? tn(e, l) : dt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = pl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Pu(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Lo(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = da), wi(e);
	var o = t.contextType;
	typeof o == 'object' && o !== null
		? (l.context = Ne(o))
		: ((o = de(t) ? xt : re.current), (l.context = tn(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (Ro(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && pl.enqueueReplaceState(l, l.state, null),
			Zr(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(S(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(S(147, e));
			var l = r,
				o = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var a = l.refs;
						a === da && (a = l.refs = {}),
							i === null ? delete a[o] : (a[o] = i);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != 'string') throw Error(S(284));
		if (!n._owner) throw Error(S(290, e));
	}
	return e;
}
function gr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			S(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function xu(e) {
	var t = e._init;
	return t(e._payload);
}
function ha(e) {
	function t(m, d) {
		if (e) {
			var h = m.deletions;
			h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
		}
	}
	function n(m, d) {
		if (!e) return null;
		for (; d !== null; ) t(m, d), (d = d.sibling);
		return null;
	}
	function r(m, d) {
		for (m = new Map(); d !== null; )
			d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
		return m;
	}
	function l(m, d) {
		return (m = ct(m, d)), (m.index = 0), (m.sibling = null), m;
	}
	function o(m, d, h) {
		return (
			(m.index = h),
			e
				? ((h = m.alternate),
				  h !== null
						? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
						: ((m.flags |= 2), d))
				: ((m.flags |= 1048576), d)
		);
	}
	function i(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, d, h, g) {
		return d === null || d.tag !== 6
			? ((d = Zl(h, m.mode, g)), (d.return = m), d)
			: ((d = l(d, h)), (d.return = m), d);
	}
	function u(m, d, h, g) {
		var k = h.type;
		return k === At
			? c(m, d, h.props.children, g, h.key)
			: d !== null &&
			  (d.elementType === k ||
					(typeof k == 'object' &&
						k !== null &&
						k.$$typeof === Ze &&
						xu(k) === d.type))
			? ((g = l(d, h.props)), (g.ref = vn(m, d, h)), (g.return = m), g)
			: ((g = Ir(h.type, h.key, h.props, null, m.mode, g)),
			  (g.ref = vn(m, d, h)),
			  (g.return = m),
			  g);
	}
	function s(m, d, h, g) {
		return d === null ||
			d.tag !== 4 ||
			d.stateNode.containerInfo !== h.containerInfo ||
			d.stateNode.implementation !== h.implementation
			? ((d = Jl(h, m.mode, g)), (d.return = m), d)
			: ((d = l(d, h.children || [])), (d.return = m), d);
	}
	function c(m, d, h, g, k) {
		return d === null || d.tag !== 7
			? ((d = Pt(h, m.mode, g, k)), (d.return = m), d)
			: ((d = l(d, h)), (d.return = m), d);
	}
	function f(m, d, h) {
		if ((typeof d == 'string' && d !== '') || typeof d == 'number')
			return (d = Zl('' + d, m.mode, h)), (d.return = m), d;
		if (typeof d == 'object' && d !== null) {
			switch (d.$$typeof) {
				case ur:
					return (
						(h = Ir(d.type, d.key, d.props, null, m.mode, h)),
						(h.ref = vn(m, null, d)),
						(h.return = m),
						h
					);
				case Ft:
					return (d = Jl(d, m.mode, h)), (d.return = m), d;
				case Ze:
					var g = d._init;
					return f(m, g(d._payload), h);
			}
			if (En(d) || fn(d))
				return (d = Pt(d, m.mode, h, null)), (d.return = m), d;
			gr(m, d);
		}
		return null;
	}
	function p(m, d, h, g) {
		var k = d !== null ? d.key : null;
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return k !== null ? null : a(m, d, '' + h, g);
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case ur:
					return h.key === k ? u(m, d, h, g) : null;
				case Ft:
					return h.key === k ? s(m, d, h, g) : null;
				case Ze:
					return (k = h._init), p(m, d, k(h._payload), g);
			}
			if (En(h) || fn(h)) return k !== null ? null : c(m, d, h, g, null);
			gr(m, h);
		}
		return null;
	}
	function y(m, d, h, g, k) {
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return (m = m.get(h) || null), a(d, m, '' + g, k);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case ur:
					return (m = m.get(g.key === null ? h : g.key) || null), u(d, m, g, k);
				case Ft:
					return (m = m.get(g.key === null ? h : g.key) || null), s(d, m, g, k);
				case Ze:
					var N = g._init;
					return y(m, d, h, N(g._payload), k);
			}
			if (En(g) || fn(g)) return (m = m.get(h) || null), c(d, m, g, k, null);
			gr(d, g);
		}
		return null;
	}
	function v(m, d, h, g) {
		for (
			var k = null, N = null, _ = d, x = (d = 0), A = null;
			_ !== null && x < h.length;
			x++
		) {
			_.index > x ? ((A = _), (_ = null)) : (A = _.sibling);
			var M = p(m, _, h[x], g);
			if (M === null) {
				_ === null && (_ = A);
				break;
			}
			e && _ && M.alternate === null && t(m, _),
				(d = o(M, d, x)),
				N === null ? (k = M) : (N.sibling = M),
				(N = M),
				(_ = A);
		}
		if (x === h.length) return n(m, _), j && St(m, x), k;
		if (_ === null) {
			for (; x < h.length; x++)
				(_ = f(m, h[x], g)),
					_ !== null &&
						((d = o(_, d, x)), N === null ? (k = _) : (N.sibling = _), (N = _));
			return j && St(m, x), k;
		}
		for (_ = r(m, _); x < h.length; x++)
			(A = y(_, m, x, h[x], g)),
				A !== null &&
					(e && A.alternate !== null && _.delete(A.key === null ? x : A.key),
					(d = o(A, d, x)),
					N === null ? (k = A) : (N.sibling = A),
					(N = A));
		return (
			e &&
				_.forEach(function (se) {
					return t(m, se);
				}),
			j && St(m, x),
			k
		);
	}
	function w(m, d, h, g) {
		var k = fn(h);
		if (typeof k != 'function') throw Error(S(150));
		if (((h = k.call(h)), h == null)) throw Error(S(151));
		for (
			var N = (k = null), _ = d, x = (d = 0), A = null, M = h.next();
			_ !== null && !M.done;
			x++, M = h.next()
		) {
			_.index > x ? ((A = _), (_ = null)) : (A = _.sibling);
			var se = p(m, _, M.value, g);
			if (se === null) {
				_ === null && (_ = A);
				break;
			}
			e && _ && se.alternate === null && t(m, _),
				(d = o(se, d, x)),
				N === null ? (k = se) : (N.sibling = se),
				(N = se),
				(_ = A);
		}
		if (M.done) return n(m, _), j && St(m, x), k;
		if (_ === null) {
			for (; !M.done; x++, M = h.next())
				(M = f(m, M.value, g)),
					M !== null &&
						((d = o(M, d, x)), N === null ? (k = M) : (N.sibling = M), (N = M));
			return j && St(m, x), k;
		}
		for (_ = r(m, _); !M.done; x++, M = h.next())
			(M = y(_, m, x, M.value, g)),
				M !== null &&
					(e && M.alternate !== null && _.delete(M.key === null ? x : M.key),
					(d = o(M, d, x)),
					N === null ? (k = M) : (N.sibling = M),
					(N = M));
		return (
			e &&
				_.forEach(function (vt) {
					return t(m, vt);
				}),
			j && St(m, x),
			k
		);
	}
	function P(m, d, h, g) {
		if (
			(typeof h == 'object' &&
				h !== null &&
				h.type === At &&
				h.key === null &&
				(h = h.props.children),
			typeof h == 'object' && h !== null)
		) {
			switch (h.$$typeof) {
				case ur:
					e: {
						for (var k = h.key, N = d; N !== null; ) {
							if (N.key === k) {
								if (((k = h.type), k === At)) {
									if (N.tag === 7) {
										n(m, N.sibling),
											(d = l(N, h.props.children)),
											(d.return = m),
											(m = d);
										break e;
									}
								} else if (
									N.elementType === k ||
									(typeof k == 'object' &&
										k !== null &&
										k.$$typeof === Ze &&
										xu(k) === N.type)
								) {
									n(m, N.sibling),
										(d = l(N, h.props)),
										(d.ref = vn(m, N, h)),
										(d.return = m),
										(m = d);
									break e;
								}
								n(m, N);
								break;
							} else t(m, N);
							N = N.sibling;
						}
						h.type === At
							? ((d = Pt(h.props.children, m.mode, g, h.key)),
							  (d.return = m),
							  (m = d))
							: ((g = Ir(h.type, h.key, h.props, null, m.mode, g)),
							  (g.ref = vn(m, d, h)),
							  (g.return = m),
							  (m = g));
					}
					return i(m);
				case Ft:
					e: {
						for (N = h.key; d !== null; ) {
							if (d.key === N)
								if (
									d.tag === 4 &&
									d.stateNode.containerInfo === h.containerInfo &&
									d.stateNode.implementation === h.implementation
								) {
									n(m, d.sibling),
										(d = l(d, h.children || [])),
										(d.return = m),
										(m = d);
									break e;
								} else {
									n(m, d);
									break;
								}
							else t(m, d);
							d = d.sibling;
						}
						(d = Jl(h, m.mode, g)), (d.return = m), (m = d);
					}
					return i(m);
				case Ze:
					return (N = h._init), P(m, d, N(h._payload), g);
			}
			if (En(h)) return v(m, d, h, g);
			if (fn(h)) return w(m, d, h, g);
			gr(m, h);
		}
		return (typeof h == 'string' && h !== '') || typeof h == 'number'
			? ((h = '' + h),
			  d !== null && d.tag === 6
					? (n(m, d.sibling), (d = l(d, h)), (d.return = m), (m = d))
					: (n(m, d), (d = Zl(h, m.mode, g)), (d.return = m), (m = d)),
			  i(m))
			: n(m, d);
	}
	return P;
}
var rn = ha(!0),
	ma = ha(!1),
	nr = {},
	je = ht(nr),
	Kn = ht(nr),
	Yn = ht(nr);
function Ct(e) {
	if (e === nr) throw Error(S(174));
	return e;
}
function Si(e, t) {
	switch ((I(Yn, t), I(Kn, e), I(je, nr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : so(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = so(t, e));
	}
	F(je), I(je, t);
}
function ln() {
	F(je), F(Kn), F(Yn);
}
function va(e) {
	Ct(Yn.current);
	var t = Ct(je.current),
		n = so(t, e.type);
	t !== n && (I(Kn, e), I(je, n));
}
function ki(e) {
	Kn.current === e && (F(je), F(Kn));
}
var U = ht(0);
function Jr(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Vl = [];
function Ei() {
	for (var e = 0; e < Vl.length; e++)
		Vl[e]._workInProgressVersionPrimary = null;
	Vl.length = 0;
}
var Mr = Xe.ReactCurrentDispatcher,
	Wl = Xe.ReactCurrentBatchConfig,
	Mt = 0,
	B = null,
	K = null,
	G = null,
	qr = !1,
	Ln = !1,
	Xn = 0,
	ud = 0;
function ee() {
	throw Error(S(321));
}
function _i(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Oe(e[n], t[n])) return !1;
	return !0;
}
function Ci(e, t, n, r, l, o) {
	if (
		((Mt = o),
		(B = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Mr.current = e === null || e.memoizedState === null ? fd : dd),
		(e = n(r, l)),
		Ln)
	) {
		o = 0;
		do {
			if (((Ln = !1), (Xn = 0), 25 <= o)) throw Error(S(301));
			(o += 1),
				(G = K = null),
				(t.updateQueue = null),
				(Mr.current = pd),
				(e = n(r, l));
		} while (Ln);
	}
	if (
		((Mr.current = br),
		(t = K !== null && K.next !== null),
		(Mt = 0),
		(G = K = B = null),
		(qr = !1),
		t)
	)
		throw Error(S(300));
	return e;
}
function Ni() {
	var e = Xn !== 0;
	return (Xn = 0), e;
}
function De() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return G === null ? (B.memoizedState = G = e) : (G = G.next = e), G;
}
function Pe() {
	if (K === null) {
		var e = B.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = K.next;
	var t = G === null ? B.memoizedState : G.next;
	if (t !== null) (G = t), (K = e);
	else {
		if (e === null) throw Error(S(310));
		(K = e),
			(e = {
				memoizedState: K.memoizedState,
				baseState: K.baseState,
				baseQueue: K.baseQueue,
				queue: K.queue,
				next: null,
			}),
			G === null ? (B.memoizedState = G = e) : (G = G.next = e);
	}
	return G;
}
function Gn(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Kl(e) {
	var t = Pe(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = K,
		l = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (n.pending = null);
	}
	if (l !== null) {
		(o = l.next), (r = r.baseState);
		var a = (i = null),
			u = null,
			s = o;
		do {
			var c = s.lane;
			if ((Mt & c) === c)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: s.action,
							hasEagerState: s.hasEagerState,
							eagerState: s.eagerState,
							next: null,
						}),
					(r = s.hasEagerState ? s.eagerState : e(r, s.action));
			else {
				var f = {
					lane: c,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				u === null ? ((a = u = f), (i = r)) : (u = u.next = f),
					(B.lanes |= c),
					(Rt |= c);
			}
			s = s.next;
		} while (s !== null && s !== o);
		u === null ? (i = r) : (u.next = a),
			Oe(r, t.memoizedState) || (ce = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (o = l.lane), (B.lanes |= o), (Rt |= o), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Yl(e) {
	var t = Pe(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		Oe(o, t.memoizedState) || (ce = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function ya() {}
function ga(e, t) {
	var n = B,
		r = Pe(),
		l = t(),
		o = !Oe(r.memoizedState, l);
	if (
		(o && ((r.memoizedState = l), (ce = !0)),
		(r = r.queue),
		Pi(ka.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (G !== null && G.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Zn(9, Sa.bind(null, n, r, l, t), void 0, null),
			Z === null)
		)
			throw Error(S(349));
		Mt & 30 || wa(n, t, l);
	}
	return l;
}
function wa(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = B.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (B.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sa(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Ea(t) && _a(e);
}
function ka(e, t, n) {
	return n(function () {
		Ea(t) && _a(e);
	});
}
function Ea(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Oe(e, n);
	} catch {
		return !0;
	}
}
function _a(e) {
	var t = Ke(e, 1);
	t !== null && Te(t, e, 1, -1);
}
function zu(e) {
	var t = De();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Gn,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = cd.bind(null, B, e)),
		[t.memoizedState, e]
	);
}
function Zn(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = B.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (B.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Ca() {
	return Pe().memoizedState;
}
function Rr(e, t, n, r) {
	var l = De();
	(B.flags |= e),
		(l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function hl(e, t, n, r) {
	var l = Pe();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (K !== null) {
		var i = K.memoizedState;
		if (((o = i.destroy), r !== null && _i(r, i.deps))) {
			l.memoizedState = Zn(t, n, o, r);
			return;
		}
	}
	(B.flags |= e), (l.memoizedState = Zn(1 | t, n, o, r));
}
function Mu(e, t) {
	return Rr(8390656, 8, e, t);
}
function Pi(e, t) {
	return hl(2048, 8, e, t);
}
function Na(e, t) {
	return hl(4, 2, e, t);
}
function Pa(e, t) {
	return hl(4, 4, e, t);
}
function xa(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function za(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), hl(4, 4, xa.bind(null, t, e), n)
	);
}
function xi() {}
function Ma(e, t) {
	var n = Pe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && _i(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Ra(e, t) {
	var n = Pe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && _i(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function La(e, t, n) {
	return Mt & 21
		? (Oe(n, t) || ((n = Is()), (B.lanes |= n), (Rt |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function sd(e, t) {
	var n = O;
	(O = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Wl.transition;
	Wl.transition = {};
	try {
		e(!1), t();
	} finally {
		(O = n), (Wl.transition = r);
	}
}
function Ta() {
	return Pe().memoizedState;
}
function ad(e, t, n) {
	var r = at(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Oa(e))
	)
		Ia(t, n);
	else if (((n = ca(e, t, n, r)), n !== null)) {
		var l = oe();
		Te(n, e, r, l), Da(n, t, r);
	}
}
function cd(e, t, n) {
	var r = at(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Oa(e)) Ia(t, l);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					a = o(i, n);
				if (((l.hasEagerState = !0), (l.eagerState = a), Oe(a, i))) {
					var u = t.interleaved;
					u === null
						? ((l.next = l), gi(t))
						: ((l.next = u.next), (u.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = ca(e, t, l, r)),
			n !== null && ((l = oe()), Te(n, e, r, l), Da(n, t, r));
	}
}
function Oa(e) {
	var t = e.alternate;
	return e === B || (t !== null && t === B);
}
function Ia(e, t) {
	Ln = qr = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Da(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
	}
}
var br = {
		readContext: Ne,
		useCallback: ee,
		useContext: ee,
		useEffect: ee,
		useImperativeHandle: ee,
		useInsertionEffect: ee,
		useLayoutEffect: ee,
		useMemo: ee,
		useReducer: ee,
		useRef: ee,
		useState: ee,
		useDebugValue: ee,
		useDeferredValue: ee,
		useTransition: ee,
		useMutableSource: ee,
		useSyncExternalStore: ee,
		useId: ee,
		unstable_isNewReconciler: !1,
	},
	fd = {
		readContext: Ne,
		useCallback: function (e, t) {
			return (De().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ne,
		useEffect: Mu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Rr(4194308, 4, xa.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Rr(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Rr(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = De();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = De();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = ad.bind(null, B, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = De();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: zu,
		useDebugValue: xi,
		useDeferredValue: function (e) {
			return (De().memoizedState = e);
		},
		useTransition: function () {
			var e = zu(!1),
				t = e[0];
			return (e = sd.bind(null, e[1])), (De().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = B,
				l = De();
			if (j) {
				if (n === void 0) throw Error(S(407));
				n = n();
			} else {
				if (((n = t()), Z === null)) throw Error(S(349));
				Mt & 30 || wa(r, t, n);
			}
			l.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(l.queue = o),
				Mu(ka.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Zn(9, Sa.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = De(),
				t = Z.identifierPrefix;
			if (j) {
				var n = He,
					r = $e;
				(n = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Xn++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = ud++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	dd = {
		readContext: Ne,
		useCallback: Ma,
		useContext: Ne,
		useEffect: Pi,
		useImperativeHandle: za,
		useInsertionEffect: Na,
		useLayoutEffect: Pa,
		useMemo: Ra,
		useReducer: Kl,
		useRef: Ca,
		useState: function () {
			return Kl(Gn);
		},
		useDebugValue: xi,
		useDeferredValue: function (e) {
			var t = Pe();
			return La(t, K.memoizedState, e);
		},
		useTransition: function () {
			var e = Kl(Gn)[0],
				t = Pe().memoizedState;
			return [e, t];
		},
		useMutableSource: ya,
		useSyncExternalStore: ga,
		useId: Ta,
		unstable_isNewReconciler: !1,
	},
	pd = {
		readContext: Ne,
		useCallback: Ma,
		useContext: Ne,
		useEffect: Pi,
		useImperativeHandle: za,
		useInsertionEffect: Na,
		useLayoutEffect: Pa,
		useMemo: Ra,
		useReducer: Yl,
		useRef: Ca,
		useState: function () {
			return Yl(Gn);
		},
		useDebugValue: xi,
		useDeferredValue: function (e) {
			var t = Pe();
			return K === null ? (t.memoizedState = e) : La(t, K.memoizedState, e);
		},
		useTransition: function () {
			var e = Yl(Gn)[0],
				t = Pe().memoizedState;
			return [e, t];
		},
		useMutableSource: ya,
		useSyncExternalStore: ga,
		useId: Ta,
		unstable_isNewReconciler: !1,
	};
function on(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Bc(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function To(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var hd = typeof WeakMap == 'function' ? WeakMap : Map;
function Fa(e, t, n) {
	(n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			tl || ((tl = !0), (Ho = r)), To(e, t);
		}),
		n
	);
}
function Aa(e, t, n) {
	(n = Qe(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				To(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				To(e, t),
					typeof r != 'function' &&
						(st === null ? (st = new Set([this])) : st.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : '',
				});
			}),
		n
	);
}
function Ru(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new hd();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = zd.bind(null, e, t, n)), t.then(e, e));
}
function Lu(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Tu(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Qe(-1, 1)), (t.tag = 2), ut(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var md = Xe.ReactCurrentOwner,
	ce = !1;
function le(e, t, n, r) {
	t.child = e === null ? ma(t, null, n, r) : rn(t, e.child, n, r);
}
function Ou(e, t, n, r, l) {
	n = n.render;
	var o = t.ref;
	return (
		qt(t, l),
		(r = Ci(e, t, n, r, o, l)),
		(n = Ni()),
		e !== null && !ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Ye(e, t, l))
			: (j && n && di(t), (t.flags |= 1), le(e, t, r, l), t.child)
	);
}
function Iu(e, t, n, r, l) {
	if (e === null) {
		var o = n.type;
		return typeof o == 'function' &&
			!Di(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), ja(e, t, o, r, l))
			: ((e = Ir(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Hn), n(i, r) && e.ref === t.ref)
		)
			return Ye(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = ct(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function ja(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Hn(o, r) && e.ref === t.ref)
			if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
				e.flags & 131072 && (ce = !0);
			else return (t.lanes = e.lanes), Ye(e, t, l);
	}
	return Oo(e, t, n, r, l);
}
function Ua(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				I(Yt, he),
				(he |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					I(Yt, he),
					(he |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				I(Yt, he),
				(he |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			I(Yt, he),
			(he |= r);
	return le(e, t, l, n), t.child;
}
function Ba(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Oo(e, t, n, r, l) {
	var o = de(n) ? xt : re.current;
	return (
		(o = tn(t, o)),
		qt(t, l),
		(n = Ci(e, t, n, r, o, l)),
		(r = Ni()),
		e !== null && !ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Ye(e, t, l))
			: (j && r && di(t), (t.flags |= 1), le(e, t, n, l), t.child)
	);
}
function Du(e, t, n, r, l) {
	if (de(n)) {
		var o = !0;
		Wr(t);
	} else o = !1;
	if ((qt(t, l), t.stateNode === null))
		Lr(e, t), pa(t, n, r), Lo(t, n, r, l), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			a = t.memoizedProps;
		i.props = a;
		var u = i.context,
			s = n.contextType;
		typeof s == 'object' && s !== null
			? (s = Ne(s))
			: ((s = de(n) ? xt : re.current), (s = tn(t, s)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == 'function' ||
				typeof i.getSnapshotBeforeUpdate == 'function';
		f ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((a !== r || u !== s) && Pu(t, i, r, s)),
			(Je = !1);
		var p = t.memoizedState;
		(i.state = p),
			Zr(t, r, i, l),
			(u = t.memoizedState),
			a !== r || p !== u || fe.current || Je
				? (typeof c == 'function' && (Ro(t, n, c, r), (u = t.memoizedState)),
				  (a = Je || Nu(t, n, a, r, p, u, s))
						? (f ||
								(typeof i.UNSAFE_componentWillMount != 'function' &&
									typeof i.componentWillMount != 'function') ||
								(typeof i.componentWillMount == 'function' &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == 'function' &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = u)),
				  (i.props = r),
				  (i.state = u),
				  (i.context = s),
				  (r = a))
				: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(i = t.stateNode),
			fa(e, t),
			(a = t.memoizedProps),
			(s = t.type === t.elementType ? a : ze(t.type, a)),
			(i.props = s),
			(f = t.pendingProps),
			(p = i.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = Ne(u))
				: ((u = de(n) ? xt : re.current), (u = tn(t, u)));
		var y = n.getDerivedStateFromProps;
		(c =
			typeof y == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function') ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((a !== f || p !== u) && Pu(t, i, r, u)),
			(Je = !1),
			(p = t.memoizedState),
			(i.state = p),
			Zr(t, r, i, l);
		var v = t.memoizedState;
		a !== f || p !== v || fe.current || Je
			? (typeof y == 'function' && (Ro(t, n, y, r), (v = t.memoizedState)),
			  (s = Je || Nu(t, n, s, r, p, v, u) || !1)
					? (c ||
							(typeof i.UNSAFE_componentWillUpdate != 'function' &&
								typeof i.componentWillUpdate != 'function') ||
							(typeof i.componentWillUpdate == 'function' &&
								i.componentWillUpdate(r, v, u),
							typeof i.UNSAFE_componentWillUpdate == 'function' &&
								i.UNSAFE_componentWillUpdate(r, v, u)),
					  typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = v)),
			  (i.props = r),
			  (i.state = v),
			  (i.context = u),
			  (r = s))
			: (typeof i.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Io(e, t, n, r, o, l);
}
function Io(e, t, n, r, l, o) {
	Ba(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return l && Su(t, n, !1), Ye(e, t, o);
	(r = t.stateNode), (md.current = t);
	var a =
		i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = rn(t, e.child, null, o)), (t.child = rn(t, null, a, o)))
			: le(e, t, a, o),
		(t.memoizedState = r.state),
		l && Su(t, n, !0),
		t.child
	);
}
function $a(e) {
	var t = e.stateNode;
	t.pendingContext
		? wu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && wu(e, t.context, !1),
		Si(e, t.containerInfo);
}
function Fu(e, t, n, r, l) {
	return nn(), hi(l), (t.flags |= 256), le(e, t, n, r), t.child;
}
var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Ha(e, t, n) {
	var r = t.pendingProps,
		l = U.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		a;
	if (
		((a = i) ||
			(a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		a
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		I(U, l & 1),
		e === null)
	)
		return (
			zo(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (i = { mode: 'hidden', children: i }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = yl(i, r, 0, null)),
						  (e = Pt(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Fo(n)),
						  (t.memoizedState = Do),
						  e)
						: zi(t, i))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return vd(e, t, i, r, a, l, n);
	if (o) {
		(o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = ct(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (o = ct(a, o)) : ((o = Pt(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Fo(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Do),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = ct(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function zi(e, t) {
	return (
		(t = yl({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function wr(e, t, n, r) {
	return (
		r !== null && hi(r),
		rn(t, e.child, null, n),
		(e = zi(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function vd(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Xl(Error(S(422)))), wr(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (l = t.mode),
			  (r = yl({ mode: 'visible', children: r.children }, l, 0, null)),
			  (o = Pt(o, l, i, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && rn(t, e.child, null, i),
			  (t.child.memoizedState = Fo(i)),
			  (t.memoizedState = Do),
			  o);
	if (!(t.mode & 1)) return wr(e, t, i, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(S(419))), (r = Xl(o, r, void 0)), wr(e, t, i, r);
	}
	if (((a = (i & e.childLanes) !== 0), ce || a)) {
		if (((r = Z), r !== null)) {
			switch (i & -i) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 &&
					l !== o.retryLane &&
					((o.retryLane = l), Ke(e, l), Te(r, e, l, -1));
		}
		return Ii(), (r = Xl(Error(S(421)))), wr(e, t, i, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Md.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (ve = it(l.nextSibling)),
		  (ye = t),
		  (j = !0),
		  (Re = null),
		  e !== null &&
				((ke[Ee++] = $e),
				(ke[Ee++] = He),
				(ke[Ee++] = zt),
				($e = e.id),
				(He = e.overflow),
				(zt = t)),
		  (t = zi(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Au(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function Gl(e, t, n, r, l) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = l));
}
function Qa(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((le(e, t, r.children, n), (r = U.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
				else if (e.tag === 19) Au(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((I(U, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && Jr(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					Gl(t, !1, l, n, o);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && Jr(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				Gl(t, !0, n, null, o);
				break;
			case 'together':
				Gl(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Lr(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Rt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(S(153));
	if (t.child !== null) {
		for (
			e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function yd(e, t, n) {
	switch (t.tag) {
		case 3:
			$a(t), nn();
			break;
		case 5:
			va(t);
			break;
		case 1:
			de(t.type) && Wr(t);
			break;
		case 4:
			Si(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			I(Xr, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (I(U, U.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Ha(e, t, n)
					: (I(U, U.current & 1),
					  (e = Ye(e, t, n)),
					  e !== null ? e.sibling : null);
			I(U, U.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Qa(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				I(U, U.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Ua(e, t, n);
	}
	return Ye(e, t, n);
}
var Va, Ao, Wa, Ka;
Va = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Ao = function () {};
Wa = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), Ct(je.current);
		var o = null;
		switch (n) {
			case 'input':
				(l = lo(e, l)), (r = lo(e, r)), (o = []);
				break;
			case 'select':
				(l = $({}, l, { value: void 0 })),
					(r = $({}, r, { value: void 0 })),
					(o = []);
				break;
			case 'textarea':
				(l = uo(e, l)), (r = uo(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Qr);
		}
		ao(n, r);
		var i;
		n = null;
		for (s in l)
			if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
				if (s === 'style') {
					var a = l[s];
					for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
				} else
					s !== 'dangerouslySetInnerHTML' &&
						s !== 'children' &&
						s !== 'suppressContentEditableWarning' &&
						s !== 'suppressHydrationWarning' &&
						s !== 'autoFocus' &&
						(Dn.hasOwnProperty(s)
							? o || (o = [])
							: (o = o || []).push(s, null));
		for (s in r) {
			var u = r[s];
			if (
				((a = l != null ? l[s] : void 0),
				r.hasOwnProperty(s) && u !== a && (u != null || a != null))
			)
				if (s === 'style')
					if (a) {
						for (i in a)
							!a.hasOwnProperty(i) ||
								(u && u.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ''));
						for (i in u)
							u.hasOwnProperty(i) &&
								a[i] !== u[i] &&
								(n || (n = {}), (n[i] = u[i]));
					} else n || (o || (o = []), o.push(s, n)), (n = u);
				else
					s === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
						  (a = a ? a.__html : void 0),
						  u != null && a !== u && (o = o || []).push(s, u))
						: s === 'children'
						? (typeof u != 'string' && typeof u != 'number') ||
						  (o = o || []).push(s, '' + u)
						: s !== 'suppressContentEditableWarning' &&
						  s !== 'suppressHydrationWarning' &&
						  (Dn.hasOwnProperty(s)
								? (u != null && s === 'onScroll' && D('scroll', e),
								  o || a === u || (o = []))
								: (o = o || []).push(s, u));
		}
		n && (o = o || []).push('style', n);
		var s = o;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
Ka = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function yn(e, t) {
	if (!j)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function te(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gd(e, t, n) {
	var r = t.pendingProps;
	switch ((pi(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return te(t), null;
		case 1:
			return de(t.type) && Vr(), te(t), null;
		case 3:
			return (
				(r = t.stateNode),
				ln(),
				F(fe),
				F(re),
				Ei(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(yr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Re !== null && (Wo(Re), (Re = null)))),
				Ao(e, t),
				te(t),
				null
			);
		case 5:
			ki(t);
			var l = Ct(Yn.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Wa(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(S(166));
					return te(t), null;
				}
				if (((e = Ct(je.current)), yr(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[Fe] = t), (r[Wn] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							D('cancel', r), D('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							D('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < Cn.length; l++) D(Cn[l], r);
							break;
						case 'source':
							D('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							D('error', r), D('load', r);
							break;
						case 'details':
							D('toggle', r);
							break;
						case 'input':
							Ki(r, o), D('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								D('invalid', r);
							break;
						case 'textarea':
							Xi(r, o), D('invalid', r);
					}
					ao(n, o), (l = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var a = o[i];
							i === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											vr(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (o.suppressHydrationWarning !== !0 &&
											vr(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: Dn.hasOwnProperty(i) &&
								  a != null &&
								  i === 'onScroll' &&
								  D('scroll', r);
						}
					switch (n) {
						case 'input':
							sr(r), Yi(r, o, !0);
							break;
						case 'textarea':
							sr(r), Gi(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof o.onClick == 'function' && (r.onclick = Qr);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = ws(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = i.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === 'select' &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[Fe] = t),
						(e[Wn] = r),
						Va(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = co(n, r)), n)) {
							case 'dialog':
								D('cancel', e), D('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								D('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < Cn.length; l++) D(Cn[l], e);
								l = r;
								break;
							case 'source':
								D('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								D('error', e), D('load', e), (l = r);
								break;
							case 'details':
								D('toggle', e), (l = r);
								break;
							case 'input':
								Ki(e, r), (l = lo(e, r)), D('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = $({}, r, { value: void 0 })),
									D('invalid', e);
								break;
							case 'textarea':
								Xi(e, r), (l = uo(e, r)), D('invalid', e);
								break;
							default:
								l = r;
						}
						ao(n, l), (a = l);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var u = a[o];
								o === 'style'
									? Es(e, u)
									: o === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && Ss(e, u))
									: o === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && Fn(e, u)
										: typeof u == 'number' && Fn(e, '' + u)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Dn.hasOwnProperty(o)
											? u != null && o === 'onScroll' && D('scroll', e)
											: u != null && qo(e, o, u, i));
							}
						switch (n) {
							case 'input':
								sr(e), Yi(e, r, !1);
								break;
							case 'textarea':
								sr(e), Gi(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + ft(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Xt(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Xt(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = Qr);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return te(t), null;
		case 6:
			if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(S(166));
				if (((n = Ct(Yn.current)), Ct(je.current), yr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Fe] = t),
						(o = r.nodeValue !== n) && ((e = ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								vr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									vr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Fe] = t),
						(t.stateNode = r);
			}
			return te(t), null;
		case 13:
			if (
				(F(U),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (j && ve !== null && t.mode & 1 && !(t.flags & 128))
					aa(), nn(), (t.flags |= 98560), (o = !1);
				else if (((o = yr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(S(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(S(317));
						o[Fe] = t;
					} else
						nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					te(t), (o = !1);
				} else Re !== null && (Wo(Re), (Re = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || U.current & 1 ? Y === 0 && (Y = 3) : Ii())),
				  t.updateQueue !== null && (t.flags |= 4),
				  te(t),
				  null);
		case 4:
			return (
				ln(), Ao(e, t), e === null && Qn(t.stateNode.containerInfo), te(t), null
			);
		case 10:
			return yi(t.type._context), te(t), null;
		case 17:
			return de(t.type) && Vr(), te(t), null;
		case 19:
			if ((F(U), (o = t.memoizedState), o === null)) return te(t), null;
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) yn(o, !1);
				else {
					if (Y !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = Jr(e)), i !== null)) {
								for (
									t.flags |= 128,
										yn(o, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = i.memoizedProps),
											  (o.memoizedState = i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return I(U, (U.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						V() > un &&
						((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Jr(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							yn(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !i.alternate && !j)
						)
							return te(t), null;
					} else
						2 * V() - o.renderingStartTime > un &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = V()),
				  (t.sibling = null),
				  (n = U.current),
				  I(U, r ? (n & 1) | 2 : n & 1),
				  t)
				: (te(t), null);
		case 22:
		case 23:
			return (
				Oi(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? he & 1073741824 && (te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: te(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(S(156, t.tag));
}
function wd(e, t) {
	switch ((pi(t), t.tag)) {
		case 1:
			return (
				de(t.type) && Vr(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				ln(),
				F(fe),
				F(re),
				Ei(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return ki(t), null;
		case 13:
			if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(S(340));
				nn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return F(U), null;
		case 4:
			return ln(), null;
		case 10:
			return yi(t.type._context), null;
		case 22:
		case 23:
			return Oi(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Sr = !1,
	ne = !1,
	Sd = typeof WeakSet == 'function' ? WeakSet : Set,
	E = null;
function Kt(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				H(e, t, r);
			}
		else n.current = null;
}
function jo(e, t, n) {
	try {
		n();
	} catch (r) {
		H(e, t, r);
	}
}
var ju = !1;
function kd(e, t) {
	if (((ko = Br), (e = Zs()), fi(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						a = -1,
						u = -1,
						s = 0,
						c = 0,
						f = e,
						p = null;
					t: for (;;) {
						for (
							var y;
							f !== n || (l !== 0 && f.nodeType !== 3) || (a = i + l),
								f !== o || (r !== 0 && f.nodeType !== 3) || (u = i + r),
								f.nodeType === 3 && (i += f.nodeValue.length),
								(y = f.firstChild) !== null;

						)
							(p = f), (f = y);
						for (;;) {
							if (f === e) break t;
							if (
								(p === n && ++s === l && (a = i),
								p === o && ++c === r && (u = i),
								(y = f.nextSibling) !== null)
							)
								break;
							(f = p), (p = f.parentNode);
						}
						f = y;
					}
					n = a === -1 || u === -1 ? null : { start: a, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Eo = { focusedElem: e, selectionRange: n }, Br = !1, E = t; E !== null; )
		if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (E = e);
		else
			for (; E !== null; ) {
				t = E;
				try {
					var v = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (v !== null) {
									var w = v.memoizedProps,
										P = v.memoizedState,
										m = t.stateNode,
										d = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ze(t.type, w),
											P
										);
									m.__reactInternalSnapshotBeforeUpdate = d;
								}
								break;
							case 3:
								var h = t.stateNode.containerInfo;
								h.nodeType === 1
									? (h.textContent = '')
									: h.nodeType === 9 &&
									  h.documentElement &&
									  h.removeChild(h.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(S(163));
						}
				} catch (g) {
					H(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (E = e);
					break;
				}
				E = t.return;
			}
	return (v = ju), (ju = !1), v;
}
function Tn(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy;
				(l.destroy = void 0), o !== void 0 && jo(t, n, o);
			}
			l = l.next;
		} while (l !== r);
	}
}
function ml(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Uo(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Ya(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Ya(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Fe], delete t[Wn], delete t[No], delete t[rd], delete t[ld])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Xa(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Xa(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Bo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Qr));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), (e = e.sibling);
}
function $o(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), (e = e.sibling);
}
var J = null,
	Me = !1;
function Ge(e, t, n) {
	for (n = n.child; n !== null; ) Ga(e, t, n), (n = n.sibling);
}
function Ga(e, t, n) {
	if (Ae && typeof Ae.onCommitFiberUnmount == 'function')
		try {
			Ae.onCommitFiberUnmount(ul, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ne || Kt(n, t);
		case 6:
			var r = J,
				l = Me;
			(J = null),
				Ge(e, t, n),
				(J = r),
				(Me = l),
				J !== null &&
					(Me
						? ((e = J),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: J.removeChild(n.stateNode));
			break;
		case 18:
			J !== null &&
				(Me
					? ((e = J),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Hl(e.parentNode, n)
							: e.nodeType === 1 && Hl(e, n),
					  Bn(e))
					: Hl(J, n.stateNode));
			break;
		case 4:
			(r = J),
				(l = Me),
				(J = n.stateNode.containerInfo),
				(Me = !0),
				Ge(e, t, n),
				(J = r),
				(Me = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ne &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var o = l,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && (o & 2 || o & 4) && jo(n, t, i),
						(l = l.next);
				} while (l !== r);
			}
			Ge(e, t, n);
			break;
		case 1:
			if (
				!ne &&
				(Kt(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					H(n, t, a);
				}
			Ge(e, t, n);
			break;
		case 21:
			Ge(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ne = (r = ne) || n.memoizedState !== null), Ge(e, t, n), (ne = r))
				: Ge(e, t, n);
			break;
		default:
			Ge(e, t, n);
	}
}
function Bu(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Sd()),
			t.forEach(function (r) {
				var l = Rd.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function xe(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var o = e,
					i = t,
					a = i;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(J = a.stateNode), (Me = !1);
							break e;
						case 3:
							(J = a.stateNode.containerInfo), (Me = !0);
							break e;
						case 4:
							(J = a.stateNode.containerInfo), (Me = !0);
							break e;
					}
					a = a.return;
				}
				if (J === null) throw Error(S(160));
				Ga(o, i, l), (J = null), (Me = !1);
				var u = l.alternate;
				u !== null && (u.return = null), (l.return = null);
			} catch (s) {
				H(l, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Za(t, e), (t = t.sibling);
}
function Za(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((xe(t, e), Ie(e), r & 4)) {
				try {
					Tn(3, e, e.return), ml(3, e);
				} catch (w) {
					H(e, e.return, w);
				}
				try {
					Tn(5, e, e.return);
				} catch (w) {
					H(e, e.return, w);
				}
			}
			break;
		case 1:
			xe(t, e), Ie(e), r & 512 && n !== null && Kt(n, n.return);
			break;
		case 5:
			if (
				(xe(t, e),
				Ie(e),
				r & 512 && n !== null && Kt(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Fn(l, '');
				} catch (w) {
					H(e, e.return, w);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					a = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						a === 'input' && o.type === 'radio' && o.name != null && ys(l, o),
							co(a, i);
						var s = co(a, o);
						for (i = 0; i < u.length; i += 2) {
							var c = u[i],
								f = u[i + 1];
							c === 'style'
								? Es(l, f)
								: c === 'dangerouslySetInnerHTML'
								? Ss(l, f)
								: c === 'children'
								? Fn(l, f)
								: qo(l, c, f, s);
						}
						switch (a) {
							case 'input':
								oo(l, o);
								break;
							case 'textarea':
								gs(l, o);
								break;
							case 'select':
								var p = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!o.multiple;
								var y = o.value;
								y != null
									? Xt(l, !!o.multiple, y, !1)
									: p !== !!o.multiple &&
									  (o.defaultValue != null
											? Xt(l, !!o.multiple, o.defaultValue, !0)
											: Xt(l, !!o.multiple, o.multiple ? [] : '', !1));
						}
						l[Wn] = o;
					} catch (w) {
						H(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((xe(t, e), Ie(e), r & 4)) {
				if (e.stateNode === null) throw Error(S(162));
				(l = e.stateNode), (o = e.memoizedProps);
				try {
					l.nodeValue = o;
				} catch (w) {
					H(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(xe(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Bn(t.containerInfo);
				} catch (w) {
					H(e, e.return, w);
				}
			break;
		case 4:
			xe(t, e), Ie(e);
			break;
		case 13:
			xe(t, e),
				Ie(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(Li = V())),
				r & 4 && Bu(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ne = (s = ne) || c), xe(t, e), (ne = s)) : xe(t, e),
				Ie(e),
				r & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !c && e.mode & 1)
				)
					for (E = e, c = e.child; c !== null; ) {
						for (f = E = c; E !== null; ) {
							switch (((p = E), (y = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Tn(4, p, p.return);
									break;
								case 1:
									Kt(p, p.return);
									var v = p.stateNode;
									if (typeof v.componentWillUnmount == 'function') {
										(r = p), (n = p.return);
										try {
											(t = r),
												(v.props = t.memoizedProps),
												(v.state = t.memoizedState),
												v.componentWillUnmount();
										} catch (w) {
											H(r, n, w);
										}
									}
									break;
								case 5:
									Kt(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Hu(f);
										continue;
									}
							}
							y !== null ? ((y.return = p), (E = y)) : Hu(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(l = f.stateNode),
									s
										? ((o = l.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((a = f.stateNode),
										  (u = f.memoizedProps.style),
										  (i =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (a.style.display = ks('display', i)));
							} catch (w) {
								H(e, e.return, w);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = s ? '' : f.memoizedProps;
							} catch (w) {
								H(e, e.return, w);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			xe(t, e), Ie(e), r & 4 && Bu(e);
			break;
		case 21:
			break;
		default:
			xe(t, e), Ie(e);
	}
}
function Ie(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Xa(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(S(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Fn(l, ''), (r.flags &= -33));
					var o = Uu(e);
					$o(e, o, l);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						a = Uu(e);
					Bo(e, a, i);
					break;
				default:
					throw Error(S(161));
			}
		} catch (u) {
			H(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Ed(e, t, n) {
	(E = e), Ja(e);
}
function Ja(e, t, n) {
	for (var r = (e.mode & 1) !== 0; E !== null; ) {
		var l = E,
			o = l.child;
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || Sr;
			if (!i) {
				var a = l.alternate,
					u = (a !== null && a.memoizedState !== null) || ne;
				a = Sr;
				var s = ne;
				if (((Sr = i), (ne = u) && !s))
					for (E = l; E !== null; )
						(i = E),
							(u = i.child),
							i.tag === 22 && i.memoizedState !== null
								? Qu(l)
								: u !== null
								? ((u.return = i), (E = u))
								: Qu(l);
				for (; o !== null; ) (E = o), Ja(o), (o = o.sibling);
				(E = l), (Sr = a), (ne = s);
			}
			$u(e);
		} else
			l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : $u(e);
	}
}
function $u(e) {
	for (; E !== null; ) {
		var t = E;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ne || ml(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ne)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: ze(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && Cu(t, o, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Cu(t, i, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var u = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										u.autoFocus && n.focus();
										break;
									case 'img':
										u.src && (n.src = u.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var s = t.alternate;
								if (s !== null) {
									var c = s.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && Bn(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(S(163));
					}
				ne || (t.flags & 512 && Uo(t));
			} catch (p) {
				H(t, t.return, p);
			}
		}
		if (t === e) {
			E = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (E = n);
			break;
		}
		E = t.return;
	}
}
function Hu(e) {
	for (; E !== null; ) {
		var t = E;
		if (t === e) {
			E = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (E = n);
			break;
		}
		E = t.return;
	}
}
function Qu(e) {
	for (; E !== null; ) {
		var t = E;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						ml(4, t);
					} catch (u) {
						H(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							H(t, l, u);
						}
					}
					var o = t.return;
					try {
						Uo(t);
					} catch (u) {
						H(t, o, u);
					}
					break;
				case 5:
					var i = t.return;
					try {
						Uo(t);
					} catch (u) {
						H(t, i, u);
					}
			}
		} catch (u) {
			H(t, t.return, u);
		}
		if (t === e) {
			E = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (E = a);
			break;
		}
		E = t.return;
	}
}
var _d = Math.ceil,
	el = Xe.ReactCurrentDispatcher,
	Mi = Xe.ReactCurrentOwner,
	Ce = Xe.ReactCurrentBatchConfig,
	T = 0,
	Z = null,
	W = null,
	q = 0,
	he = 0,
	Yt = ht(0),
	Y = 0,
	Jn = null,
	Rt = 0,
	vl = 0,
	Ri = 0,
	On = null,
	ae = null,
	Li = 0,
	un = 1 / 0,
	Ue = null,
	tl = !1,
	Ho = null,
	st = null,
	kr = !1,
	nt = null,
	nl = 0,
	In = 0,
	Qo = null,
	Tr = -1,
	Or = 0;
function oe() {
	return T & 6 ? V() : Tr !== -1 ? Tr : (Tr = V());
}
function at(e) {
	return e.mode & 1
		? T & 2 && q !== 0
			? q & -q
			: id.transition !== null
			? (Or === 0 && (Or = Is()), Or)
			: ((e = O),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $s(e.type))),
			  e)
		: 1;
}
function Te(e, t, n, r) {
	if (50 < In) throw ((In = 0), (Qo = null), Error(S(185)));
	bn(e, n, r),
		(!(T & 2) || e !== Z) &&
			(e === Z && (!(T & 2) && (vl |= n), Y === 4 && et(e, q)),
			pe(e, r),
			n === 1 && T === 0 && !(t.mode & 1) && ((un = V() + 500), dl && mt()));
}
function pe(e, t) {
	var n = e.callbackNode;
	of(e, t);
	var r = Ur(e, e === Z ? q : 0);
	if (r === 0)
		n !== null && qi(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && qi(n), t === 1))
			e.tag === 0 ? od(Vu.bind(null, e)) : ia(Vu.bind(null, e)),
				td(function () {
					!(T & 6) && mt();
				}),
				(n = null);
		else {
			switch (Ds(r)) {
				case 1:
					n = ri;
					break;
				case 4:
					n = Ts;
					break;
				case 16:
					n = jr;
					break;
				case 536870912:
					n = Os;
					break;
				default:
					n = jr;
			}
			n = oc(n, qa.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function qa(e, t) {
	if (((Tr = -1), (Or = 0), T & 6)) throw Error(S(327));
	var n = e.callbackNode;
	if (bt() && e.callbackNode !== n) return null;
	var r = Ur(e, e === Z ? q : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
	else {
		t = r;
		var l = T;
		T |= 2;
		var o = ec();
		(Z !== e || q !== t) && ((Ue = null), (un = V() + 500), Nt(e, t));
		do
			try {
				Pd();
				break;
			} catch (a) {
				ba(e, a);
			}
		while (1);
		vi(),
			(el.current = o),
			(T = l),
			W !== null ? (t = 0) : ((Z = null), (q = 0), (t = Y));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = vo(e)), l !== 0 && ((r = l), (t = Vo(e, l)))), t === 1)
		)
			throw ((n = Jn), Nt(e, 0), et(e, r), pe(e, V()), n);
		if (t === 6) et(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Cd(l) &&
					((t = rl(e, r)),
					t === 2 && ((o = vo(e)), o !== 0 && ((r = o), (t = Vo(e, o)))),
					t === 1))
			)
				throw ((n = Jn), Nt(e, 0), et(e, r), pe(e, V()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(S(345));
				case 2:
					kt(e, ae, Ue);
					break;
				case 3:
					if (
						(et(e, r), (r & 130023424) === r && ((t = Li + 500 - V()), 10 < t))
					) {
						if (Ur(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							oe(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = Co(kt.bind(null, e, ae, Ue), t);
						break;
					}
					kt(e, ae, Ue);
					break;
				case 4:
					if ((et(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - Le(r);
						(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
					}
					if (
						((r = l),
						(r = V() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * _d(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Co(kt.bind(null, e, ae, Ue), r);
						break;
					}
					kt(e, ae, Ue);
					break;
				case 5:
					kt(e, ae, Ue);
					break;
				default:
					throw Error(S(329));
			}
		}
	}
	return pe(e, V()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Vo(e, t) {
	var n = On;
	return (
		e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
		(e = rl(e, t)),
		e !== 2 && ((t = ae), (ae = n), t !== null && Wo(t)),
		e
	);
}
function Wo(e) {
	ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Cd(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot;
					l = l.value;
					try {
						if (!Oe(o(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function et(e, t) {
	for (
		t &= ~Ri,
			t &= ~vl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Le(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Vu(e) {
	if (T & 6) throw Error(S(327));
	bt();
	var t = Ur(e, 0);
	if (!(t & 1)) return pe(e, V()), null;
	var n = rl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = vo(e);
		r !== 0 && ((t = r), (n = Vo(e, r)));
	}
	if (n === 1) throw ((n = Jn), Nt(e, 0), et(e, t), pe(e, V()), n);
	if (n === 6) throw Error(S(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		kt(e, ae, Ue),
		pe(e, V()),
		null
	);
}
function Ti(e, t) {
	var n = T;
	T |= 1;
	try {
		return e(t);
	} finally {
		(T = n), T === 0 && ((un = V() + 500), dl && mt());
	}
}
function Lt(e) {
	nt !== null && nt.tag === 0 && !(T & 6) && bt();
	var t = T;
	T |= 1;
	var n = Ce.transition,
		r = O;
	try {
		if (((Ce.transition = null), (O = 1), e)) return e();
	} finally {
		(O = r), (Ce.transition = n), (T = t), !(T & 6) && mt();
	}
}
function Oi() {
	(he = Yt.current), F(Yt);
}
function Nt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), ed(n)), W !== null))
		for (n = W.return; n !== null; ) {
			var r = n;
			switch ((pi(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Vr();
					break;
				case 3:
					ln(), F(fe), F(re), Ei();
					break;
				case 5:
					ki(r);
					break;
				case 4:
					ln();
					break;
				case 13:
					F(U);
					break;
				case 19:
					F(U);
					break;
				case 10:
					yi(r.type._context);
					break;
				case 22:
				case 23:
					Oi();
			}
			n = n.return;
		}
	if (
		((Z = e),
		(W = e = ct(e.current, null)),
		(q = he = t),
		(Y = 0),
		(Jn = null),
		(Ri = vl = Rt = 0),
		(ae = On = null),
		_t !== null)
	) {
		for (t = 0; t < _t.length; t++)
			if (((n = _t[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = l), (r.next = i);
				}
				n.pending = r;
			}
		_t = null;
	}
	return e;
}
function ba(e, t) {
	do {
		var n = W;
		try {
			if ((vi(), (Mr.current = br), qr)) {
				for (var r = B.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				qr = !1;
			}
			if (
				((Mt = 0),
				(G = K = B = null),
				(Ln = !1),
				(Xn = 0),
				(Mi.current = null),
				n === null || n.return === null)
			) {
				(Y = 1), (Jn = t), (W = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					a = n,
					u = t;
				if (
					((t = q),
					(a.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var s = u,
						c = a,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var p = c.alternate;
						p
							? ((c.updateQueue = p.updateQueue),
							  (c.memoizedState = p.memoizedState),
							  (c.lanes = p.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var y = Lu(i);
					if (y !== null) {
						(y.flags &= -257),
							Tu(y, i, a, o, t),
							y.mode & 1 && Ru(o, s, t),
							(t = y),
							(u = s);
						var v = t.updateQueue;
						if (v === null) {
							var w = new Set();
							w.add(u), (t.updateQueue = w);
						} else v.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							Ru(o, s, t), Ii();
							break e;
						}
						u = Error(S(426));
					}
				} else if (j && a.mode & 1) {
					var P = Lu(i);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256),
							Tu(P, i, a, o, t),
							hi(on(u, a));
						break e;
					}
				}
				(o = u = on(u, a)),
					Y !== 4 && (Y = 2),
					On === null ? (On = [o]) : On.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var m = Fa(o, u, t);
							_u(o, m);
							break e;
						case 1:
							a = u;
							var d = o.type,
								h = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof d.getDerivedStateFromError == 'function' ||
									(h !== null &&
										typeof h.componentDidCatch == 'function' &&
										(st === null || !st.has(h))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var g = Aa(o, a, t);
								_u(o, g);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			nc(n);
		} catch (k) {
			(t = k), W === n && n !== null && (W = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function ec() {
	var e = el.current;
	return (el.current = br), e === null ? br : e;
}
function Ii() {
	(Y === 0 || Y === 3 || Y === 2) && (Y = 4),
		Z === null || (!(Rt & 268435455) && !(vl & 268435455)) || et(Z, q);
}
function rl(e, t) {
	var n = T;
	T |= 2;
	var r = ec();
	(Z !== e || q !== t) && ((Ue = null), Nt(e, t));
	do
		try {
			Nd();
			break;
		} catch (l) {
			ba(e, l);
		}
	while (1);
	if ((vi(), (T = n), (el.current = r), W !== null)) throw Error(S(261));
	return (Z = null), (q = 0), Y;
}
function Nd() {
	for (; W !== null; ) tc(W);
}
function Pd() {
	for (; W !== null && !Zc(); ) tc(W);
}
function tc(e) {
	var t = lc(e.alternate, e, he);
	(e.memoizedProps = e.pendingProps),
		t === null ? nc(e) : (W = t),
		(Mi.current = null);
}
function nc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = wd(n, t)), n !== null)) {
				(n.flags &= 32767), (W = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Y = 6), (W = null);
				return;
			}
		} else if (((n = gd(n, t, he)), n !== null)) {
			W = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			W = t;
			return;
		}
		W = t = e;
	} while (t !== null);
	Y === 0 && (Y = 5);
}
function kt(e, t, n) {
	var r = O,
		l = Ce.transition;
	try {
		(Ce.transition = null), (O = 1), xd(e, t, n, r);
	} finally {
		(Ce.transition = l), (O = r);
	}
	return null;
}
function xd(e, t, n, r) {
	do bt();
	while (nt !== null);
	if (T & 6) throw Error(S(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(S(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(uf(e, o),
		e === Z && ((W = Z = null), (q = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			kr ||
			((kr = !0),
			oc(jr, function () {
				return bt(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Ce.transition), (Ce.transition = null);
		var i = O;
		O = 1;
		var a = T;
		(T |= 4),
			(Mi.current = null),
			kd(e, n),
			Za(n, e),
			Yf(Eo),
			(Br = !!ko),
			(Eo = ko = null),
			(e.current = n),
			Ed(n),
			Jc(),
			(T = a),
			(O = i),
			(Ce.transition = o);
	} else e.current = n;
	if (
		(kr && ((kr = !1), (nt = e), (nl = l)),
		(o = e.pendingLanes),
		o === 0 && (st = null),
		ef(n.stateNode),
		pe(e, V()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (tl) throw ((tl = !1), (e = Ho), (Ho = null), e);
	return (
		nl & 1 && e.tag !== 0 && bt(),
		(o = e.pendingLanes),
		o & 1 ? (e === Qo ? In++ : ((In = 0), (Qo = e))) : (In = 0),
		mt(),
		null
	);
}
function bt() {
	if (nt !== null) {
		var e = Ds(nl),
			t = Ce.transition,
			n = O;
		try {
			if (((Ce.transition = null), (O = 16 > e ? 16 : e), nt === null))
				var r = !1;
			else {
				if (((e = nt), (nt = null), (nl = 0), T & 6)) throw Error(S(331));
				var l = T;
				for (T |= 4, E = e.current; E !== null; ) {
					var o = E,
						i = o.child;
					if (E.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var u = 0; u < a.length; u++) {
								var s = a[u];
								for (E = s; E !== null; ) {
									var c = E;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Tn(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (E = f);
									else
										for (; E !== null; ) {
											c = E;
											var p = c.sibling,
												y = c.return;
											if ((Ya(c), c === s)) {
												E = null;
												break;
											}
											if (p !== null) {
												(p.return = y), (E = p);
												break;
											}
											E = y;
										}
								}
							}
							var v = o.alternate;
							if (v !== null) {
								var w = v.child;
								if (w !== null) {
									v.child = null;
									do {
										var P = w.sibling;
										(w.sibling = null), (w = P);
									} while (w !== null);
								}
							}
							E = o;
						}
					}
					if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
					else
						e: for (; E !== null; ) {
							if (((o = E), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Tn(9, o, o.return);
								}
							var m = o.sibling;
							if (m !== null) {
								(m.return = o.return), (E = m);
								break e;
							}
							E = o.return;
						}
				}
				var d = e.current;
				for (E = d; E !== null; ) {
					i = E;
					var h = i.child;
					if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (E = h);
					else
						e: for (i = d; E !== null; ) {
							if (((a = E), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											ml(9, a);
									}
								} catch (k) {
									H(a, a.return, k);
								}
							if (a === i) {
								E = null;
								break e;
							}
							var g = a.sibling;
							if (g !== null) {
								(g.return = a.return), (E = g);
								break e;
							}
							E = a.return;
						}
				}
				if (
					((T = l), mt(), Ae && typeof Ae.onPostCommitFiberRoot == 'function')
				)
					try {
						Ae.onPostCommitFiberRoot(ul, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(O = n), (Ce.transition = t);
		}
	}
	return !1;
}
function Wu(e, t, n) {
	(t = on(n, t)),
		(t = Fa(e, t, 1)),
		(e = ut(e, t, 1)),
		(t = oe()),
		e !== null && (bn(e, 1, t), pe(e, t));
}
function H(e, t, n) {
	if (e.tag === 3) Wu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Wu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(st === null || !st.has(r)))
				) {
					(e = on(n, e)),
						(e = Aa(t, e, 1)),
						(t = ut(t, e, 1)),
						(e = oe()),
						t !== null && (bn(t, 1, e), pe(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function zd(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = oe()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Z === e &&
			(q & n) === n &&
			(Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > V() - Li)
				? Nt(e, 0)
				: (Ri |= n)),
		pe(e, t);
}
function rc(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = fr), (fr <<= 1), !(fr & 130023424) && (fr = 4194304))
			: (t = 1));
	var n = oe();
	(e = Ke(e, t)), e !== null && (bn(e, t, n), pe(e, n));
}
function Md(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), rc(e, n);
}
function Rd(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(S(314));
	}
	r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), yd(e, t, n);
			ce = !!(e.flags & 131072);
		}
	else (ce = !1), j && t.flags & 1048576 && ua(t, Yr, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Lr(e, t), (e = t.pendingProps);
			var l = tn(t, re.current);
			qt(t, n), (l = Ci(null, t, r, e, l, n));
			var o = Ni();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  de(r) ? ((o = !0), Wr(t)) : (o = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  wi(t),
					  (l.updater = pl),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  Lo(t, r, e, n),
					  (t = Io(null, t, r, !0, o, n)))
					: ((t.tag = 0), j && o && di(t), le(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Lr(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Td(r)),
					(e = ze(r, e)),
					l)
				) {
					case 0:
						t = Oo(null, t, r, e, n);
						break e;
					case 1:
						t = Du(null, t, r, e, n);
						break e;
					case 11:
						t = Ou(null, t, r, e, n);
						break e;
					case 14:
						t = Iu(null, t, r, ze(r.type, e), n);
						break e;
				}
				throw Error(S(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ze(r, l)),
				Oo(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ze(r, l)),
				Du(e, t, r, l, n)
			);
		case 3:
			e: {
				if (($a(t), e === null)) throw Error(S(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(l = o.element),
					fa(e, t),
					Zr(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(l = on(Error(S(423)), t)), (t = Fu(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = on(Error(S(424)), t)), (t = Fu(e, t, r, n, l));
						break e;
					} else
						for (
							ve = it(t.stateNode.containerInfo.firstChild),
								ye = t,
								j = !0,
								Re = null,
								n = ma(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((nn(), r === l)) {
						t = Ye(e, t, n);
						break e;
					}
					le(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				va(t),
				e === null && zo(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				_o(r, l) ? (i = null) : o !== null && _o(r, o) && (t.flags |= 32),
				Ba(e, t),
				le(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && zo(t), null;
		case 13:
			return Ha(e, t, n);
		case 4:
			return (
				Si(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = rn(t, null, r, n)) : le(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ze(r, l)),
				Ou(e, t, r, l, n)
			);
		case 7:
			return le(e, t, t.pendingProps, n), t.child;
		case 8:
			return le(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return le(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(o = t.memoizedProps),
					(i = l.value),
					I(Xr, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (Oe(o.value, i)) {
						if (o.children === l.children && !fe.current) {
							t = Ye(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								i = o.child;
								for (var u = a.firstContext; u !== null; ) {
									if (u.context === r) {
										if (o.tag === 1) {
											(u = Qe(-1, n & -n)), (u.tag = 2);
											var s = o.updateQueue;
											if (s !== null) {
												s = s.shared;
												var c = s.pending;
												c === null
													? (u.next = u)
													: ((u.next = c.next), (c.next = u)),
													(s.pending = u);
											}
										}
										(o.lanes |= n),
											(u = o.alternate),
											u !== null && (u.lanes |= n),
											Mo(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(S(341));
								(i.lanes |= n),
									(a = i.alternate),
									a !== null && (a.lanes |= n),
									Mo(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				le(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				qt(t, n),
				(l = Ne(l)),
				(r = r(l)),
				(t.flags |= 1),
				le(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = ze(r, t.pendingProps)),
				(l = ze(r.type, l)),
				Iu(e, t, r, l, n)
			);
		case 15:
			return ja(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ze(r, l)),
				Lr(e, t),
				(t.tag = 1),
				de(r) ? ((e = !0), Wr(t)) : (e = !1),
				qt(t, n),
				pa(t, r, l),
				Lo(t, r, l, n),
				Io(null, t, r, !0, e, n)
			);
		case 19:
			return Qa(e, t, n);
		case 22:
			return Ua(e, t, n);
	}
	throw Error(S(156, t.tag));
};
function oc(e, t) {
	return Ls(e, t);
}
function Ld(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function _e(e, t, n, r) {
	return new Ld(e, t, n, r);
}
function Di(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Td(e) {
	if (typeof e == 'function') return Di(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === ei)) return 11;
		if (e === ti) return 14;
	}
	return 2;
}
function ct(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = _e(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Ir(e, t, n, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == 'function')) Di(e) && (i = 1);
	else if (typeof e == 'string') i = 5;
	else
		e: switch (e) {
			case At:
				return Pt(n.children, l, o, t);
			case bo:
				(i = 8), (l |= 8);
				break;
			case eo:
				return (
					(e = _e(12, n, t, l | 2)), (e.elementType = eo), (e.lanes = o), e
				);
			case to:
				return (e = _e(13, n, t, l)), (e.elementType = to), (e.lanes = o), e;
			case no:
				return (e = _e(19, n, t, l)), (e.elementType = no), (e.lanes = o), e;
			case hs:
				return yl(n, l, o, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case ds:
							i = 10;
							break e;
						case ps:
							i = 9;
							break e;
						case ei:
							i = 11;
							break e;
						case ti:
							i = 14;
							break e;
						case Ze:
							(i = 16), (r = null);
							break e;
					}
				throw Error(S(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = _e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function Pt(e, t, n, r) {
	return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
	return (
		(e = _e(22, e, r, t)),
		(e.elementType = hs),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Zl(e, t, n) {
	return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
	return (
		(t = _e(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Od(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Ll(0)),
		(this.expirationTimes = Ll(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Ll(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Fi(e, t, n, r, l, o, i, a, u) {
	return (
		(e = new Od(e, t, n, a, u)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = _e(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		wi(o),
		e
	);
}
function Id(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Ft,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function ic(e) {
	if (!e) return dt;
	e = e._reactInternals;
	e: {
		if (It(e) !== e || e.tag !== 1) throw Error(S(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (de(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(S(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (de(n)) return oa(e, n, t);
	}
	return t;
}
function uc(e, t, n, r, l, o, i, a, u) {
	return (
		(e = Fi(n, r, !0, e, l, o, i, a, u)),
		(e.context = ic(null)),
		(n = e.current),
		(r = oe()),
		(l = at(n)),
		(o = Qe(r, l)),
		(o.callback = t ?? null),
		ut(n, o, l),
		(e.current.lanes = l),
		bn(e, l, r),
		pe(e, r),
		e
	);
}
function gl(e, t, n, r) {
	var l = t.current,
		o = oe(),
		i = at(l);
	return (
		(n = ic(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Qe(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = ut(l, t, i)),
		e !== null && (Te(e, l, i, o), zr(e, l, i)),
		i
	);
}
function ll(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ku(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Ai(e, t) {
	Ku(e, t), (e = e.alternate) && Ku(e, t);
}
function Dd() {
	return null;
}
var sc =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function ji(e) {
	this._internalRoot = e;
}
wl.prototype.render = ji.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(S(409));
	gl(e, t, null, null);
};
wl.prototype.unmount = ji.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Lt(function () {
			gl(null, e, null, null);
		}),
			(t[We] = null);
	}
};
function wl(e) {
	this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = js();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
		be.splice(n, 0, e), n === 0 && Bs(e);
	}
};
function Ui(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Yu() {}
function Fd(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var o = r;
			r = function () {
				var s = ll(i);
				o.call(s);
			};
		}
		var i = uc(t, r, e, 0, null, !1, !1, '', Yu);
		return (
			(e._reactRootContainer = i),
			(e[We] = i.current),
			Qn(e.nodeType === 8 ? e.parentNode : e),
			Lt(),
			i
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var s = ll(u);
			a.call(s);
		};
	}
	var u = Fi(e, 0, !1, null, null, !1, !1, '', Yu);
	return (
		(e._reactRootContainer = u),
		(e[We] = u.current),
		Qn(e.nodeType === 8 ? e.parentNode : e),
		Lt(function () {
			gl(t, u, n, r);
		}),
		u
	);
}
function kl(e, t, n, r, l) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var u = ll(i);
				a.call(u);
			};
		}
		gl(t, i, e, l);
	} else i = Fd(n, t, e, l, r);
	return ll(i);
}
Fs = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = _n(t.pendingLanes);
				n !== 0 &&
					(li(t, n | 1), pe(t, V()), !(T & 6) && ((un = V() + 500), mt()));
			}
			break;
		case 13:
			Lt(function () {
				var r = Ke(e, 1);
				if (r !== null) {
					var l = oe();
					Te(r, e, 1, l);
				}
			}),
				Ai(e, 1);
	}
};
oi = function (e) {
	if (e.tag === 13) {
		var t = Ke(e, 134217728);
		if (t !== null) {
			var n = oe();
			Te(t, e, 134217728, n);
		}
		Ai(e, 134217728);
	}
};
As = function (e) {
	if (e.tag === 13) {
		var t = at(e),
			n = Ke(e, t);
		if (n !== null) {
			var r = oe();
			Te(n, e, t, r);
		}
		Ai(e, t);
	}
};
js = function () {
	return O;
};
Us = function (e, t) {
	var n = O;
	try {
		return (O = e), t();
	} finally {
		O = n;
	}
};
po = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((oo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = fl(r);
						if (!l) throw Error(S(90));
						vs(r), oo(r, l);
					}
				}
			}
			break;
		case 'textarea':
			gs(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
	}
};
Ns = Ti;
Ps = Lt;
var Ad = { usingClientEntryPoint: !1, Events: [tr, $t, fl, _s, Cs, Ti] },
	gn = {
		findFiberByHostInstance: Et,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	jd = {
		bundleType: gn.bundleType,
		version: gn.version,
		rendererPackageName: gn.rendererPackageName,
		rendererConfig: gn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Xe.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Ms(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: gn.findFiberByHostInstance || Dd,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Er.isDisabled && Er.supportsFiber)
		try {
			(ul = Er.inject(jd)), (Ae = Er);
		} catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
we.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ui(t)) throw Error(S(200));
	return Id(e, t, null, n);
};
we.createRoot = function (e, t) {
	if (!Ui(e)) throw Error(S(299));
	var n = !1,
		r = '',
		l = sc;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Fi(e, 1, !1, null, null, n, !1, r, l)),
		(e[We] = t.current),
		Qn(e.nodeType === 8 ? e.parentNode : e),
		new ji(t)
	);
};
we.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(S(188))
			: ((e = Object.keys(e).join(',')), Error(S(268, e)));
	return (e = Ms(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
	return Lt(e);
};
we.hydrate = function (e, t, n) {
	if (!Sl(t)) throw Error(S(200));
	return kl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
	if (!Ui(e)) throw Error(S(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = '',
		i = sc;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = uc(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[We] = t.current),
		Qn(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new wl(t);
};
we.render = function (e, t, n) {
	if (!Sl(t)) throw Error(S(200));
	return kl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
	if (!Sl(e)) throw Error(S(40));
	return e._reactRootContainer
		? (Lt(function () {
				kl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[We] = null);
				});
		  }),
		  !0)
		: !1;
};
we.unstable_batchedUpdates = Ti;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Sl(n)) throw Error(S(200));
	if (e == null || e._reactInternals === void 0) throw Error(S(38));
	return kl(e, t, n, !1, r);
};
we.version = '18.2.0-next-9e3b772b8-20220608';
function ac() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
		} catch (e) {
			console.error(e);
		}
}
ac(), (us.exports = we);
var Ud = us.exports,
	Xu = Ud;
(ql.createRoot = Xu.createRoot), (ql.hydrateRoot = Xu.hydrateRoot);
var Bd = Object.defineProperty,
	ol = Object.getOwnPropertySymbols,
	cc = Object.prototype.hasOwnProperty,
	fc = Object.prototype.propertyIsEnumerable,
	Gu = (e, t, n) =>
		t in e
			? Bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
			: (e[t] = n),
	Zu = (e, t) => {
		for (var n in t || (t = {})) cc.call(t, n) && Gu(e, n, t[n]);
		if (ol) for (var n of ol(t)) fc.call(t, n) && Gu(e, n, t[n]);
		return e;
	},
	$d = (e, t) => {
		var n = {};
		for (var r in e) cc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && ol)
			for (var r of ol(e)) t.indexOf(r) < 0 && fc.call(e, r) && (n[r] = e[r]);
		return n;
	};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var Tt;
((e) => {
	const t = class {
		constructor(u, s, c, f) {
			if (
				((this.version = u),
				(this.errorCorrectionLevel = s),
				(this.modules = []),
				(this.isFunction = []),
				u < t.MIN_VERSION || u > t.MAX_VERSION)
			)
				throw new RangeError('Version value out of range');
			if (f < -1 || f > 7) throw new RangeError('Mask value out of range');
			this.size = u * 4 + 17;
			let p = [];
			for (let v = 0; v < this.size; v++) p.push(!1);
			for (let v = 0; v < this.size; v++)
				this.modules.push(p.slice()), this.isFunction.push(p.slice());
			this.drawFunctionPatterns();
			const y = this.addEccAndInterleave(c);
			if ((this.drawCodewords(y), f == -1)) {
				let v = 1e9;
				for (let w = 0; w < 8; w++) {
					this.applyMask(w), this.drawFormatBits(w);
					const P = this.getPenaltyScore();
					P < v && ((f = w), (v = P)), this.applyMask(w);
				}
			}
			o(0 <= f && f <= 7),
				(this.mask = f),
				this.applyMask(f),
				this.drawFormatBits(f),
				(this.isFunction = []);
		}
		static encodeText(u, s) {
			const c = e.QrSegment.makeSegments(u);
			return t.encodeSegments(c, s);
		}
		static encodeBinary(u, s) {
			const c = e.QrSegment.makeBytes(u);
			return t.encodeSegments([c], s);
		}
		static encodeSegments(u, s, c = 1, f = 40, p = -1, y = !0) {
			if (
				!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) ||
				p < -1 ||
				p > 7
			)
				throw new RangeError('Invalid value');
			let v, w;
			for (v = c; ; v++) {
				const h = t.getNumDataCodewords(v, s) * 8,
					g = a.getTotalBits(u, v);
				if (g <= h) {
					w = g;
					break;
				}
				if (v >= f) throw new RangeError('Data too long');
			}
			for (const h of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
				y && w <= t.getNumDataCodewords(v, h) * 8 && (s = h);
			let P = [];
			for (const h of u) {
				r(h.mode.modeBits, 4, P), r(h.numChars, h.mode.numCharCountBits(v), P);
				for (const g of h.getData()) P.push(g);
			}
			o(P.length == w);
			const m = t.getNumDataCodewords(v, s) * 8;
			o(P.length <= m),
				r(0, Math.min(4, m - P.length), P),
				r(0, (8 - (P.length % 8)) % 8, P),
				o(P.length % 8 == 0);
			for (let h = 236; P.length < m; h ^= 253) r(h, 8, P);
			let d = [];
			for (; d.length * 8 < P.length; ) d.push(0);
			return (
				P.forEach((h, g) => (d[g >>> 3] |= h << (7 - (g & 7)))),
				new t(v, s, d, p)
			);
		}
		getModule(u, s) {
			return (
				0 <= u && u < this.size && 0 <= s && s < this.size && this.modules[s][u]
			);
		}
		getModules() {
			return this.modules;
		}
		drawFunctionPatterns() {
			for (let c = 0; c < this.size; c++)
				this.setFunctionModule(6, c, c % 2 == 0),
					this.setFunctionModule(c, 6, c % 2 == 0);
			this.drawFinderPattern(3, 3),
				this.drawFinderPattern(this.size - 4, 3),
				this.drawFinderPattern(3, this.size - 4);
			const u = this.getAlignmentPatternPositions(),
				s = u.length;
			for (let c = 0; c < s; c++)
				for (let f = 0; f < s; f++)
					(c == 0 && f == 0) ||
						(c == 0 && f == s - 1) ||
						(c == s - 1 && f == 0) ||
						this.drawAlignmentPattern(u[c], u[f]);
			this.drawFormatBits(0), this.drawVersion();
		}
		drawFormatBits(u) {
			const s = (this.errorCorrectionLevel.formatBits << 3) | u;
			let c = s;
			for (let p = 0; p < 10; p++) c = (c << 1) ^ ((c >>> 9) * 1335);
			const f = ((s << 10) | c) ^ 21522;
			o(f >>> 15 == 0);
			for (let p = 0; p <= 5; p++) this.setFunctionModule(8, p, l(f, p));
			this.setFunctionModule(8, 7, l(f, 6)),
				this.setFunctionModule(8, 8, l(f, 7)),
				this.setFunctionModule(7, 8, l(f, 8));
			for (let p = 9; p < 15; p++) this.setFunctionModule(14 - p, 8, l(f, p));
			for (let p = 0; p < 8; p++)
				this.setFunctionModule(this.size - 1 - p, 8, l(f, p));
			for (let p = 8; p < 15; p++)
				this.setFunctionModule(8, this.size - 15 + p, l(f, p));
			this.setFunctionModule(8, this.size - 8, !0);
		}
		drawVersion() {
			if (this.version < 7) return;
			let u = this.version;
			for (let c = 0; c < 12; c++) u = (u << 1) ^ ((u >>> 11) * 7973);
			const s = (this.version << 12) | u;
			o(s >>> 18 == 0);
			for (let c = 0; c < 18; c++) {
				const f = l(s, c),
					p = this.size - 11 + (c % 3),
					y = Math.floor(c / 3);
				this.setFunctionModule(p, y, f), this.setFunctionModule(y, p, f);
			}
		}
		drawFinderPattern(u, s) {
			for (let c = -4; c <= 4; c++)
				for (let f = -4; f <= 4; f++) {
					const p = Math.max(Math.abs(f), Math.abs(c)),
						y = u + f,
						v = s + c;
					0 <= y &&
						y < this.size &&
						0 <= v &&
						v < this.size &&
						this.setFunctionModule(y, v, p != 2 && p != 4);
				}
		}
		drawAlignmentPattern(u, s) {
			for (let c = -2; c <= 2; c++)
				for (let f = -2; f <= 2; f++)
					this.setFunctionModule(
						u + f,
						s + c,
						Math.max(Math.abs(f), Math.abs(c)) != 1
					);
		}
		setFunctionModule(u, s, c) {
			(this.modules[s][u] = c), (this.isFunction[s][u] = !0);
		}
		addEccAndInterleave(u) {
			const s = this.version,
				c = this.errorCorrectionLevel;
			if (u.length != t.getNumDataCodewords(s, c))
				throw new RangeError('Invalid argument');
			const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][s],
				p = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][s],
				y = Math.floor(t.getNumRawDataModules(s) / 8),
				v = f - (y % f),
				w = Math.floor(y / f);
			let P = [];
			const m = t.reedSolomonComputeDivisor(p);
			for (let h = 0, g = 0; h < f; h++) {
				let k = u.slice(g, g + w - p + (h < v ? 0 : 1));
				g += k.length;
				const N = t.reedSolomonComputeRemainder(k, m);
				h < v && k.push(0), P.push(k.concat(N));
			}
			let d = [];
			for (let h = 0; h < P[0].length; h++)
				P.forEach((g, k) => {
					(h != w - p || k >= v) && d.push(g[h]);
				});
			return o(d.length == y), d;
		}
		drawCodewords(u) {
			if (u.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
				throw new RangeError('Invalid argument');
			let s = 0;
			for (let c = this.size - 1; c >= 1; c -= 2) {
				c == 6 && (c = 5);
				for (let f = 0; f < this.size; f++)
					for (let p = 0; p < 2; p++) {
						const y = c - p,
							w = ((c + 1) & 2) == 0 ? this.size - 1 - f : f;
						!this.isFunction[w][y] &&
							s < u.length * 8 &&
							((this.modules[w][y] = l(u[s >>> 3], 7 - (s & 7))), s++);
					}
			}
			o(s == u.length * 8);
		}
		applyMask(u) {
			if (u < 0 || u > 7) throw new RangeError('Mask value out of range');
			for (let s = 0; s < this.size; s++)
				for (let c = 0; c < this.size; c++) {
					let f;
					switch (u) {
						case 0:
							f = (c + s) % 2 == 0;
							break;
						case 1:
							f = s % 2 == 0;
							break;
						case 2:
							f = c % 3 == 0;
							break;
						case 3:
							f = (c + s) % 3 == 0;
							break;
						case 4:
							f = (Math.floor(c / 3) + Math.floor(s / 2)) % 2 == 0;
							break;
						case 5:
							f = ((c * s) % 2) + ((c * s) % 3) == 0;
							break;
						case 6:
							f = (((c * s) % 2) + ((c * s) % 3)) % 2 == 0;
							break;
						case 7:
							f = (((c + s) % 2) + ((c * s) % 3)) % 2 == 0;
							break;
						default:
							throw new Error('Unreachable');
					}
					!this.isFunction[s][c] &&
						f &&
						(this.modules[s][c] = !this.modules[s][c]);
				}
		}
		getPenaltyScore() {
			let u = 0;
			for (let p = 0; p < this.size; p++) {
				let y = !1,
					v = 0,
					w = [0, 0, 0, 0, 0, 0, 0];
				for (let P = 0; P < this.size; P++)
					this.modules[p][P] == y
						? (v++, v == 5 ? (u += t.PENALTY_N1) : v > 5 && u++)
						: (this.finderPenaltyAddHistory(v, w),
						  y || (u += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3),
						  (y = this.modules[p][P]),
						  (v = 1));
				u += this.finderPenaltyTerminateAndCount(y, v, w) * t.PENALTY_N3;
			}
			for (let p = 0; p < this.size; p++) {
				let y = !1,
					v = 0,
					w = [0, 0, 0, 0, 0, 0, 0];
				for (let P = 0; P < this.size; P++)
					this.modules[P][p] == y
						? (v++, v == 5 ? (u += t.PENALTY_N1) : v > 5 && u++)
						: (this.finderPenaltyAddHistory(v, w),
						  y || (u += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3),
						  (y = this.modules[P][p]),
						  (v = 1));
				u += this.finderPenaltyTerminateAndCount(y, v, w) * t.PENALTY_N3;
			}
			for (let p = 0; p < this.size - 1; p++)
				for (let y = 0; y < this.size - 1; y++) {
					const v = this.modules[p][y];
					v == this.modules[p][y + 1] &&
						v == this.modules[p + 1][y] &&
						v == this.modules[p + 1][y + 1] &&
						(u += t.PENALTY_N2);
				}
			let s = 0;
			for (const p of this.modules) s = p.reduce((y, v) => y + (v ? 1 : 0), s);
			const c = this.size * this.size,
				f = Math.ceil(Math.abs(s * 20 - c * 10) / c) - 1;
			return (
				o(0 <= f && f <= 9),
				(u += f * t.PENALTY_N4),
				o(0 <= u && u <= 2568888),
				u
			);
		}
		getAlignmentPatternPositions() {
			if (this.version == 1) return [];
			{
				const u = Math.floor(this.version / 7) + 2,
					s =
						this.version == 32
							? 26
							: Math.ceil((this.version * 4 + 4) / (u * 2 - 2)) * 2;
				let c = [6];
				for (let f = this.size - 7; c.length < u; f -= s) c.splice(1, 0, f);
				return c;
			}
		}
		static getNumRawDataModules(u) {
			if (u < t.MIN_VERSION || u > t.MAX_VERSION)
				throw new RangeError('Version number out of range');
			let s = (16 * u + 128) * u + 64;
			if (u >= 2) {
				const c = Math.floor(u / 7) + 2;
				(s -= (25 * c - 10) * c - 55), u >= 7 && (s -= 36);
			}
			return o(208 <= s && s <= 29648), s;
		}
		static getNumDataCodewords(u, s) {
			return (
				Math.floor(t.getNumRawDataModules(u) / 8) -
				t.ECC_CODEWORDS_PER_BLOCK[s.ordinal][u] *
					t.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][u]
			);
		}
		static reedSolomonComputeDivisor(u) {
			if (u < 1 || u > 255) throw new RangeError('Degree out of range');
			let s = [];
			for (let f = 0; f < u - 1; f++) s.push(0);
			s.push(1);
			let c = 1;
			for (let f = 0; f < u; f++) {
				for (let p = 0; p < s.length; p++)
					(s[p] = t.reedSolomonMultiply(s[p], c)),
						p + 1 < s.length && (s[p] ^= s[p + 1]);
				c = t.reedSolomonMultiply(c, 2);
			}
			return s;
		}
		static reedSolomonComputeRemainder(u, s) {
			let c = s.map((f) => 0);
			for (const f of u) {
				const p = f ^ c.shift();
				c.push(0), s.forEach((y, v) => (c[v] ^= t.reedSolomonMultiply(y, p)));
			}
			return c;
		}
		static reedSolomonMultiply(u, s) {
			if (u >>> 8 || s >>> 8) throw new RangeError('Byte out of range');
			let c = 0;
			for (let f = 7; f >= 0; f--)
				(c = (c << 1) ^ ((c >>> 7) * 285)), (c ^= ((s >>> f) & 1) * u);
			return o(c >>> 8 == 0), c;
		}
		finderPenaltyCountPatterns(u) {
			const s = u[1];
			o(s <= this.size * 3);
			const c = s > 0 && u[2] == s && u[3] == s * 3 && u[4] == s && u[5] == s;
			return (
				(c && u[0] >= s * 4 && u[6] >= s ? 1 : 0) +
				(c && u[6] >= s * 4 && u[0] >= s ? 1 : 0)
			);
		}
		finderPenaltyTerminateAndCount(u, s, c) {
			return (
				u && (this.finderPenaltyAddHistory(s, c), (s = 0)),
				(s += this.size),
				this.finderPenaltyAddHistory(s, c),
				this.finderPenaltyCountPatterns(c)
			);
		}
		finderPenaltyAddHistory(u, s) {
			s[0] == 0 && (u += this.size), s.pop(), s.unshift(u);
		}
	};
	let n = t;
	(n.MIN_VERSION = 1),
		(n.MAX_VERSION = 40),
		(n.PENALTY_N1 = 3),
		(n.PENALTY_N2 = 3),
		(n.PENALTY_N3 = 40),
		(n.PENALTY_N4 = 10),
		(n.ECC_CODEWORDS_PER_BLOCK = [
			[
				-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
				30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
				30, 30, 30, 30, 30,
			],
			[
				-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
				26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
				28, 28, 28, 28, 28,
			],
			[
				-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
				28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
				30, 30, 30, 30, 30,
			],
			[
				-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
				28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
				30, 30, 30, 30, 30,
			],
		]),
		(n.NUM_ERROR_CORRECTION_BLOCKS = [
			[
				-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
				10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
			],
			[
				-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
				17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45,
				47, 49,
			],
			[
				-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
				23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
				65, 68,
			],
			[
				-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
				25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70,
				74, 77, 81,
			],
		]),
		(e.QrCode = n);
	function r(u, s, c) {
		if (s < 0 || s > 31 || u >>> s) throw new RangeError('Value out of range');
		for (let f = s - 1; f >= 0; f--) c.push((u >>> f) & 1);
	}
	function l(u, s) {
		return ((u >>> s) & 1) != 0;
	}
	function o(u) {
		if (!u) throw new Error('Assertion error');
	}
	const i = class {
		constructor(u, s, c) {
			if (((this.mode = u), (this.numChars = s), (this.bitData = c), s < 0))
				throw new RangeError('Invalid argument');
			this.bitData = c.slice();
		}
		static makeBytes(u) {
			let s = [];
			for (const c of u) r(c, 8, s);
			return new i(i.Mode.BYTE, u.length, s);
		}
		static makeNumeric(u) {
			if (!i.isNumeric(u))
				throw new RangeError('String contains non-numeric characters');
			let s = [];
			for (let c = 0; c < u.length; ) {
				const f = Math.min(u.length - c, 3);
				r(parseInt(u.substr(c, f), 10), f * 3 + 1, s), (c += f);
			}
			return new i(i.Mode.NUMERIC, u.length, s);
		}
		static makeAlphanumeric(u) {
			if (!i.isAlphanumeric(u))
				throw new RangeError(
					'String contains unencodable characters in alphanumeric mode'
				);
			let s = [],
				c;
			for (c = 0; c + 2 <= u.length; c += 2) {
				let f = i.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c)) * 45;
				(f += i.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c + 1))), r(f, 11, s);
			}
			return (
				c < u.length && r(i.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c)), 6, s),
				new i(i.Mode.ALPHANUMERIC, u.length, s)
			);
		}
		static makeSegments(u) {
			return u == ''
				? []
				: i.isNumeric(u)
				? [i.makeNumeric(u)]
				: i.isAlphanumeric(u)
				? [i.makeAlphanumeric(u)]
				: [i.makeBytes(i.toUtf8ByteArray(u))];
		}
		static makeEci(u) {
			let s = [];
			if (u < 0) throw new RangeError('ECI assignment value out of range');
			if (u < 128) r(u, 8, s);
			else if (u < 16384) r(2, 2, s), r(u, 14, s);
			else if (u < 1e6) r(6, 3, s), r(u, 21, s);
			else throw new RangeError('ECI assignment value out of range');
			return new i(i.Mode.ECI, 0, s);
		}
		static isNumeric(u) {
			return i.NUMERIC_REGEX.test(u);
		}
		static isAlphanumeric(u) {
			return i.ALPHANUMERIC_REGEX.test(u);
		}
		getData() {
			return this.bitData.slice();
		}
		static getTotalBits(u, s) {
			let c = 0;
			for (const f of u) {
				const p = f.mode.numCharCountBits(s);
				if (f.numChars >= 1 << p) return 1 / 0;
				c += 4 + p + f.bitData.length;
			}
			return c;
		}
		static toUtf8ByteArray(u) {
			u = encodeURI(u);
			let s = [];
			for (let c = 0; c < u.length; c++)
				u.charAt(c) != '%'
					? s.push(u.charCodeAt(c))
					: (s.push(parseInt(u.substr(c + 1, 2), 16)), (c += 2));
			return s;
		}
	};
	let a = i;
	(a.NUMERIC_REGEX = /^[0-9]*$/),
		(a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
		(a.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
		(e.QrSegment = a);
})(Tt || (Tt = {}));
((e) => {
	((t) => {
		const n = class {
			constructor(l, o) {
				(this.ordinal = l), (this.formatBits = o);
			}
		};
		let r = n;
		(r.LOW = new n(0, 1)),
			(r.MEDIUM = new n(1, 0)),
			(r.QUARTILE = new n(2, 3)),
			(r.HIGH = new n(3, 2)),
			(t.Ecc = r);
	})(e.QrCode || (e.QrCode = {}));
})(Tt || (Tt = {}));
((e) => {
	((t) => {
		const n = class {
			constructor(l, o) {
				(this.modeBits = l), (this.numBitsCharCount = o);
			}
			numCharCountBits(l) {
				return this.numBitsCharCount[Math.floor((l + 7) / 17)];
			}
		};
		let r = n;
		(r.NUMERIC = new n(1, [10, 12, 14])),
			(r.ALPHANUMERIC = new n(2, [9, 11, 13])),
			(r.BYTE = new n(4, [8, 16, 16])),
			(r.KANJI = new n(8, [8, 10, 12])),
			(r.ECI = new n(7, [0, 0, 0])),
			(t.Mode = r);
	})(e.QrSegment || (e.QrSegment = {}));
})(Tt || (Tt = {}));
var Nn = Tt;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var Hd = {
		L: Nn.QrCode.Ecc.LOW,
		M: Nn.QrCode.Ecc.MEDIUM,
		Q: Nn.QrCode.Ecc.QUARTILE,
		H: Nn.QrCode.Ecc.HIGH,
	},
	Qd = 128,
	Vd = 'L',
	Wd = '#FFFFFF',
	Kd = '#000000',
	Yd = !1,
	dc = 4,
	Xd = 0.1;
function Gd(e, t = 0) {
	const n = [];
	return (
		e.forEach(function (r, l) {
			let o = null;
			r.forEach(function (i, a) {
				if (!i && o !== null) {
					n.push(`M${o + t} ${l + t}h${a - o}v1H${o + t}z`), (o = null);
					return;
				}
				if (a === r.length - 1) {
					if (!i) return;
					o === null
						? n.push(`M${a + t},${l + t} h1v1H${a + t}z`)
						: n.push(`M${o + t},${l + t} h${a + 1 - o}v1H${o + t}z`);
					return;
				}
				i && o === null && (o = a);
			});
		}),
		n.join('')
	);
}
function Zd(e, t) {
	return e
		.slice()
		.map((n, r) =>
			r < t.y || r >= t.y + t.h
				? n
				: n.map((l, o) => (o < t.x || o >= t.x + t.w ? l : !1))
		);
}
function Jd(e, t, n, r) {
	if (r == null) return null;
	const l = n ? dc : 0,
		o = e.length + l * 2,
		i = Math.floor(t * Xd),
		a = o / t,
		u = (r.width || i) * a,
		s = (r.height || i) * a,
		c = r.x == null ? e.length / 2 - u / 2 : r.x * a,
		f = r.y == null ? e.length / 2 - s / 2 : r.y * a;
	let p = null;
	if (r.excavate) {
		let y = Math.floor(c),
			v = Math.floor(f),
			w = Math.ceil(u + c - y),
			P = Math.ceil(s + f - v);
		p = { x: y, y: v, w, h: P };
	}
	return { x: c, y: f, h: s, w: u, excavation: p };
}
var qd = (function () {
	try {
		new Path2D().addPath(new Path2D());
	} catch {
		return !1;
	}
	return !0;
})();
function bd(e) {
	const t = e,
		{
			value: n,
			size: r = Qd,
			level: l = Vd,
			bgColor: o = Wd,
			fgColor: i = Kd,
			includeMargin: a = Yd,
			style: u,
			imageSettings: s,
		} = t,
		c = $d(t, [
			'value',
			'size',
			'level',
			'bgColor',
			'fgColor',
			'includeMargin',
			'style',
			'imageSettings',
		]),
		f = s == null ? void 0 : s.src,
		p = qe.useRef(null),
		y = qe.useRef(null),
		[v, w] = qe.useState(!1);
	qe.useEffect(() => {
		if (p.current != null) {
			const d = p.current,
				h = d.getContext('2d');
			if (!h) return;
			let g = Nn.QrCode.encodeText(n, Hd[l]).getModules();
			const k = a ? dc : 0,
				N = g.length + k * 2,
				_ = Jd(g, r, a, s),
				x = y.current,
				A =
					_ != null &&
					x !== null &&
					x.complete &&
					x.naturalHeight !== 0 &&
					x.naturalWidth !== 0;
			A && _.excavation != null && (g = Zd(g, _.excavation));
			const M = window.devicePixelRatio || 1;
			d.height = d.width = r * M;
			const se = (r / N) * M;
			h.scale(se, se),
				(h.fillStyle = o),
				h.fillRect(0, 0, N, N),
				(h.fillStyle = i),
				qd
					? h.fill(new Path2D(Gd(g, k)))
					: g.forEach(function (vt, yt) {
							vt.forEach(function (rr, El) {
								rr && h.fillRect(El + k, yt + k, 1, 1);
							});
					  }),
				A && h.drawImage(x, _.x + k, _.y + k, _.w, _.h);
		}
	}),
		qe.useEffect(() => {
			w(!1);
		}, [f]);
	const P = Zu({ height: r, width: r }, u);
	let m = null;
	return (
		f != null &&
			(m = Sn.createElement('img', {
				src: f,
				key: f,
				style: { display: 'none' },
				onLoad: () => {
					w(!0);
				},
				ref: y,
			})),
		Sn.createElement(
			Sn.Fragment,
			null,
			Sn.createElement(
				'canvas',
				Zu({ style: P, height: r, width: r, ref: p }, c)
			),
			m
		)
	);
}
const ep = '_wrapper_7yfay_1',
	tp = '_wrapper__qr_7yfay_14',
	np = '_wrapper__qr_image_7yfay_41',
	rp = '_wrapper__content_7yfay_45',
	lp = '_wrapper__content_title_7yfay_52',
	op = '_wrapper__content_text_7yfay_63',
	wn = {
		wrapper: ep,
		wrapper__qr: tp,
		wrapper__qr_image: np,
		wrapper__content: rp,
		wrapper__content_title: lp,
		wrapper__content_text: op,
	},
	ip = () =>
		me.jsxs('div', {
			className: wn.wrapper,
			children: [
				me.jsx('div', {
					className: wn.wrapper__qr,
					children: me.jsx(bd, {
						id: 'qrCode',
						value: 'https://www.frontendmentor.io/?ref=challenge',
						size: 160,
						fgColor: '#fff',
						bgColor: 'transparent',
						level: 'H',
					}),
				}),
				me.jsxs('div', {
					className: wn.wrapper__content,
					children: [
						me.jsx('h1', {
							className: wn.wrapper__content_title,
							children: 'Improve your front-end skills by building projects',
						}),
						me.jsx('p', {
							className: wn.wrapper__content_text,
							children:
								'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
						}),
					],
				}),
			],
		}),
	up = () =>
		me.jsxs('main', {
			className: 'wrapper',
			children: [
				me.jsxs('div', {
					className: 'attribution',
					children: [
						'Challenge by',
						'  ',
						me.jsx('a', {
							href: 'https://www.frontendmentor.io?ref=challenge',
							target: '_blank',
							children: 'Frontend Mentor',
						}),
						'. Coded by',
						'  ',
						me.jsx('a', {
							target: '_blank',
							href: 'https://github.com/malopez1578',
							children: 'Miguel Angel López',
						}),
						'.',
					],
				}),
				me.jsx(ip, {}),
			],
		});
ql.createRoot(document.getElementById('root')).render(
	me.jsx(Sn.StrictMode, { children: me.jsx(up, {}) })
);
