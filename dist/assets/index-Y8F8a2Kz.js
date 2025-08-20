;(function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) c(m)
  new MutationObserver((m) => {
    for (const y of m)
      if (y.type === 'childList')
        for (const x of y.addedNodes) x.tagName === 'LINK' && x.rel === 'modulepreload' && c(x)
  }).observe(document, { childList: !0, subtree: !0 })
  function f(m) {
    const y = {}
    return (
      m.integrity && (y.integrity = m.integrity),
      m.referrerPolicy && (y.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === 'use-credentials'
        ? (y.credentials = 'include')
        : m.crossOrigin === 'anonymous'
          ? (y.credentials = 'omit')
          : (y.credentials = 'same-origin'),
      y
    )
  }
  function c(m) {
    if (m.ep) return
    m.ep = !0
    const y = f(m)
    fetch(m.href, y)
  }
})()
var qc = { exports: {} },
  Kn = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm
function Op() {
  if (nm) return Kn
  nm = 1
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment')
  function f(c, m, y) {
    var x = null
    if ((y !== void 0 && (x = '' + y), m.key !== void 0 && (x = '' + m.key), 'key' in m)) {
      y = {}
      for (var R in m) R !== 'key' && (y[R] = m[R])
    } else y = m
    return (m = y.ref), { $$typeof: i, type: c, key: x, ref: m !== void 0 ? m : null, props: y }
  }
  return (Kn.Fragment = o), (Kn.jsx = f), (Kn.jsxs = f), Kn
}
var um
function _p() {
  return um || ((um = 1), (qc.exports = Op())), qc.exports
}
var d = _p(),
  Gc = { exports: {} },
  ue = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im
function Dp() {
  if (im) return ue
  im = 1
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    f = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    y = Symbol.for('react.consumer'),
    x = Symbol.for('react.context'),
    R = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    H = Symbol.iterator
  function O(g) {
    return g === null || typeof g != 'object'
      ? null
      : ((g = (H && g[H]) || g['@@iterator']), typeof g == 'function' ? g : null)
  }
  var k = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    L = {}
  function X(g, U, Q) {
    ;(this.props = g), (this.context = U), (this.refs = L), (this.updater = Q || k)
  }
  ;(X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (g, U) {
      if (typeof g != 'object' && typeof g != 'function' && g != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, g, U, 'setState')
    }),
    (X.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, 'forceUpdate')
    })
  function G() {}
  G.prototype = X.prototype
  function V(g, U, Q) {
    ;(this.props = g), (this.context = U), (this.refs = L), (this.updater = Q || k)
  }
  var ee = (V.prototype = new G())
  ;(ee.constructor = V), D(ee, X.prototype), (ee.isPureReactComponent = !0)
  var ie = Array.isArray,
    I = { H: null, A: null, T: null, S: null, V: null },
    Se = Object.prototype.hasOwnProperty
  function Ee(g, U, Q, q, Z, se) {
    return (Q = se.ref), { $$typeof: i, type: g, key: U, ref: Q !== void 0 ? Q : null, props: se }
  }
  function K(g, U) {
    return Ee(g.type, U, void 0, void 0, void 0, g.props)
  }
  function me(g) {
    return typeof g == 'object' && g !== null && g.$$typeof === i
  }
  function Qe(g) {
    var U = { '=': '=0', ':': '=2' }
    return (
      '$' +
      g.replace(/[=:]/g, function (Q) {
        return U[Q]
      })
    )
  }
  var tt = /\/+/g
  function He(g, U) {
    return typeof g == 'object' && g !== null && g.key != null ? Qe('' + g.key) : U.toString(36)
  }
  function Dt() {}
  function jt(g) {
    switch (g.status) {
      case 'fulfilled':
        return g.value
      case 'rejected':
        throw g.reason
      default:
        switch (
          (typeof g.status == 'string'
            ? g.then(Dt, Dt)
            : ((g.status = 'pending'),
              g.then(
                function (U) {
                  g.status === 'pending' && ((g.status = 'fulfilled'), (g.value = U))
                },
                function (U) {
                  g.status === 'pending' && ((g.status = 'rejected'), (g.reason = U))
                }
              )),
          g.status)
        ) {
          case 'fulfilled':
            return g.value
          case 'rejected':
            throw g.reason
        }
    }
    throw g
  }
  function Oe(g, U, Q, q, Z) {
    var se = typeof g
    ;(se === 'undefined' || se === 'boolean') && (g = null)
    var ne = !1
    if (g === null) ne = !0
    else
      switch (se) {
        case 'bigint':
        case 'string':
        case 'number':
          ne = !0
          break
        case 'object':
          switch (g.$$typeof) {
            case i:
            case o:
              ne = !0
              break
            case w:
              return (ne = g._init), Oe(ne(g._payload), U, Q, q, Z)
          }
      }
    if (ne)
      return (
        (Z = Z(g)),
        (ne = q === '' ? '.' + He(g, 0) : q),
        ie(Z)
          ? ((Q = ''),
            ne != null && (Q = ne.replace(tt, '$&/') + '/'),
            Oe(Z, U, Q, '', function (ct) {
              return ct
            }))
          : Z != null &&
            (me(Z) &&
              (Z = K(
                Z,
                Q +
                  (Z.key == null || (g && g.key === Z.key)
                    ? ''
                    : ('' + Z.key).replace(tt, '$&/') + '/') +
                  ne
              )),
            U.push(Z)),
        1
      )
    ne = 0
    var ye = q === '' ? '.' : q + ':'
    if (ie(g))
      for (var ze = 0; ze < g.length; ze++)
        (q = g[ze]), (se = ye + He(q, ze)), (ne += Oe(q, U, Q, se, Z))
    else if (((ze = O(g)), typeof ze == 'function'))
      for (g = ze.call(g), ze = 0; !(q = g.next()).done; )
        (q = q.value), (se = ye + He(q, ze++)), (ne += Oe(q, U, Q, se, Z))
    else if (se === 'object') {
      if (typeof g.then == 'function') return Oe(jt(g), U, Q, q, Z)
      throw (
        ((U = String(g)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]' ? 'object with keys {' + Object.keys(g).join(', ') + '}' : U) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    }
    return ne
  }
  function j(g, U, Q) {
    if (g == null) return g
    var q = [],
      Z = 0
    return (
      Oe(g, q, '', '', function (se) {
        return U.call(Q, se, Z++)
      }),
      q
    )
  }
  function Y(g) {
    if (g._status === -1) {
      var U = g._result
      ;(U = U()),
        U.then(
          function (Q) {
            ;(g._status === 0 || g._status === -1) && ((g._status = 1), (g._result = Q))
          },
          function (Q) {
            ;(g._status === 0 || g._status === -1) && ((g._status = 2), (g._result = Q))
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = U))
    }
    if (g._status === 1) return g._result.default
    throw g._result
  }
  var B =
    typeof reportError == 'function'
      ? reportError
      : function (g) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var U = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof g == 'object' && g !== null && typeof g.message == 'string'
                  ? String(g.message)
                  : String(g),
              error: g,
            })
            if (!window.dispatchEvent(U)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', g)
            return
          }
          console.error(g)
        }
  function ge() {}
  return (
    (ue.Children = {
      map: j,
      forEach: function (g, U, Q) {
        j(
          g,
          function () {
            U.apply(this, arguments)
          },
          Q
        )
      },
      count: function (g) {
        var U = 0
        return (
          j(g, function () {
            U++
          }),
          U
        )
      },
      toArray: function (g) {
        return (
          j(g, function (U) {
            return U
          }) || []
        )
      },
      only: function (g) {
        if (!me(g))
          throw Error('React.Children.only expected to receive a single React element child.')
        return g
      },
    }),
    (ue.Component = X),
    (ue.Fragment = f),
    (ue.Profiler = m),
    (ue.PureComponent = V),
    (ue.StrictMode = c),
    (ue.Suspense = v),
    (ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return I.H.useMemoCache(g)
      },
    }),
    (ue.cache = function (g) {
      return function () {
        return g.apply(null, arguments)
      }
    }),
    (ue.cloneElement = function (g, U, Q) {
      if (g == null) throw Error('The argument must be a React element, but you passed ' + g + '.')
      var q = D({}, g.props),
        Z = g.key,
        se = void 0
      if (U != null)
        for (ne in (U.ref !== void 0 && (se = void 0), U.key !== void 0 && (Z = '' + U.key), U))
          !Se.call(U, ne) ||
            ne === 'key' ||
            ne === '__self' ||
            ne === '__source' ||
            (ne === 'ref' && U.ref === void 0) ||
            (q[ne] = U[ne])
      var ne = arguments.length - 2
      if (ne === 1) q.children = Q
      else if (1 < ne) {
        for (var ye = Array(ne), ze = 0; ze < ne; ze++) ye[ze] = arguments[ze + 2]
        q.children = ye
      }
      return Ee(g.type, Z, void 0, void 0, se, q)
    }),
    (ue.createContext = function (g) {
      return (
        (g = {
          $$typeof: x,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: y, _context: g }),
        g
      )
    }),
    (ue.createElement = function (g, U, Q) {
      var q,
        Z = {},
        se = null
      if (U != null)
        for (q in (U.key !== void 0 && (se = '' + U.key), U))
          Se.call(U, q) && q !== 'key' && q !== '__self' && q !== '__source' && (Z[q] = U[q])
      var ne = arguments.length - 2
      if (ne === 1) Z.children = Q
      else if (1 < ne) {
        for (var ye = Array(ne), ze = 0; ze < ne; ze++) ye[ze] = arguments[ze + 2]
        Z.children = ye
      }
      if (g && g.defaultProps)
        for (q in ((ne = g.defaultProps), ne)) Z[q] === void 0 && (Z[q] = ne[q])
      return Ee(g, se, void 0, void 0, null, Z)
    }),
    (ue.createRef = function () {
      return { current: null }
    }),
    (ue.forwardRef = function (g) {
      return { $$typeof: R, render: g }
    }),
    (ue.isValidElement = me),
    (ue.lazy = function (g) {
      return { $$typeof: w, _payload: { _status: -1, _result: g }, _init: Y }
    }),
    (ue.memo = function (g, U) {
      return { $$typeof: h, type: g, compare: U === void 0 ? null : U }
    }),
    (ue.startTransition = function (g) {
      var U = I.T,
        Q = {}
      I.T = Q
      try {
        var q = g(),
          Z = I.S
        Z !== null && Z(Q, q),
          typeof q == 'object' && q !== null && typeof q.then == 'function' && q.then(ge, B)
      } catch (se) {
        B(se)
      } finally {
        I.T = U
      }
    }),
    (ue.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh()
    }),
    (ue.use = function (g) {
      return I.H.use(g)
    }),
    (ue.useActionState = function (g, U, Q) {
      return I.H.useActionState(g, U, Q)
    }),
    (ue.useCallback = function (g, U) {
      return I.H.useCallback(g, U)
    }),
    (ue.useContext = function (g) {
      return I.H.useContext(g)
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (g, U) {
      return I.H.useDeferredValue(g, U)
    }),
    (ue.useEffect = function (g, U, Q) {
      var q = I.H
      if (typeof Q == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.')
      return q.useEffect(g, U)
    }),
    (ue.useId = function () {
      return I.H.useId()
    }),
    (ue.useImperativeHandle = function (g, U, Q) {
      return I.H.useImperativeHandle(g, U, Q)
    }),
    (ue.useInsertionEffect = function (g, U) {
      return I.H.useInsertionEffect(g, U)
    }),
    (ue.useLayoutEffect = function (g, U) {
      return I.H.useLayoutEffect(g, U)
    }),
    (ue.useMemo = function (g, U) {
      return I.H.useMemo(g, U)
    }),
    (ue.useOptimistic = function (g, U) {
      return I.H.useOptimistic(g, U)
    }),
    (ue.useReducer = function (g, U, Q) {
      return I.H.useReducer(g, U, Q)
    }),
    (ue.useRef = function (g) {
      return I.H.useRef(g)
    }),
    (ue.useState = function (g) {
      return I.H.useState(g)
    }),
    (ue.useSyncExternalStore = function (g, U, Q) {
      return I.H.useSyncExternalStore(g, U, Q)
    }),
    (ue.useTransition = function () {
      return I.H.useTransition()
    }),
    (ue.version = '19.1.0'),
    ue
  )
}
var rm
function lo() {
  return rm || ((rm = 1), (Gc.exports = Dp())), Gc.exports
}
var N = lo(),
  Lc = { exports: {} },
  Jn = {},
  Yc = { exports: {} },
  kc = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cm
function Cp() {
  return (
    cm ||
      ((cm = 1),
      (function (i) {
        function o(j, Y) {
          var B = j.length
          j.push(Y)
          e: for (; 0 < B; ) {
            var ge = (B - 1) >>> 1,
              g = j[ge]
            if (0 < m(g, Y)) (j[ge] = Y), (j[B] = g), (B = ge)
            else break e
          }
        }
        function f(j) {
          return j.length === 0 ? null : j[0]
        }
        function c(j) {
          if (j.length === 0) return null
          var Y = j[0],
            B = j.pop()
          if (B !== Y) {
            j[0] = B
            e: for (var ge = 0, g = j.length, U = g >>> 1; ge < U; ) {
              var Q = 2 * (ge + 1) - 1,
                q = j[Q],
                Z = Q + 1,
                se = j[Z]
              if (0 > m(q, B))
                Z < g && 0 > m(se, q)
                  ? ((j[ge] = se), (j[Z] = B), (ge = Z))
                  : ((j[ge] = q), (j[Q] = B), (ge = Q))
              else if (Z < g && 0 > m(se, B)) (j[ge] = se), (j[Z] = B), (ge = Z)
              else break e
            }
          }
          return Y
        }
        function m(j, Y) {
          var B = j.sortIndex - Y.sortIndex
          return B !== 0 ? B : j.id - Y.id
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var y = performance
          i.unstable_now = function () {
            return y.now()
          }
        } else {
          var x = Date,
            R = x.now()
          i.unstable_now = function () {
            return x.now() - R
          }
        }
        var v = [],
          h = [],
          w = 1,
          H = null,
          O = 3,
          k = !1,
          D = !1,
          L = !1,
          X = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          V = typeof clearTimeout == 'function' ? clearTimeout : null,
          ee = typeof setImmediate < 'u' ? setImmediate : null
        function ie(j) {
          for (var Y = f(h); Y !== null; ) {
            if (Y.callback === null) c(h)
            else if (Y.startTime <= j) c(h), (Y.sortIndex = Y.expirationTime), o(v, Y)
            else break
            Y = f(h)
          }
        }
        function I(j) {
          if (((L = !1), ie(j), !D))
            if (f(v) !== null) (D = !0), Se || ((Se = !0), He())
            else {
              var Y = f(h)
              Y !== null && Oe(I, Y.startTime - j)
            }
        }
        var Se = !1,
          Ee = -1,
          K = 5,
          me = -1
        function Qe() {
          return X ? !0 : !(i.unstable_now() - me < K)
        }
        function tt() {
          if (((X = !1), Se)) {
            var j = i.unstable_now()
            me = j
            var Y = !0
            try {
              e: {
                ;(D = !1), L && ((L = !1), V(Ee), (Ee = -1)), (k = !0)
                var B = O
                try {
                  t: {
                    for (ie(j), H = f(v); H !== null && !(H.expirationTime > j && Qe()); ) {
                      var ge = H.callback
                      if (typeof ge == 'function') {
                        ;(H.callback = null), (O = H.priorityLevel)
                        var g = ge(H.expirationTime <= j)
                        if (((j = i.unstable_now()), typeof g == 'function')) {
                          ;(H.callback = g), ie(j), (Y = !0)
                          break t
                        }
                        H === f(v) && c(v), ie(j)
                      } else c(v)
                      H = f(v)
                    }
                    if (H !== null) Y = !0
                    else {
                      var U = f(h)
                      U !== null && Oe(I, U.startTime - j), (Y = !1)
                    }
                  }
                  break e
                } finally {
                  ;(H = null), (O = B), (k = !1)
                }
                Y = void 0
              }
            } finally {
              Y ? He() : (Se = !1)
            }
          }
        }
        var He
        if (typeof ee == 'function')
          He = function () {
            ee(tt)
          }
        else if (typeof MessageChannel < 'u') {
          var Dt = new MessageChannel(),
            jt = Dt.port2
          ;(Dt.port1.onmessage = tt),
            (He = function () {
              jt.postMessage(null)
            })
        } else
          He = function () {
            G(tt, 0)
          }
        function Oe(j, Y) {
          Ee = G(function () {
            j(i.unstable_now())
          }, Y)
        }
        ;(i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (j) {
            j.callback = null
          }),
          (i.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (K = 0 < j ? Math.floor(1e3 / j) : 5)
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return O
          }),
          (i.unstable_next = function (j) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var Y = 3
                break
              default:
                Y = O
            }
            var B = O
            O = Y
            try {
              return j()
            } finally {
              O = B
            }
          }),
          (i.unstable_requestPaint = function () {
            X = !0
          }),
          (i.unstable_runWithPriority = function (j, Y) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                j = 3
            }
            var B = O
            O = j
            try {
              return Y()
            } finally {
              O = B
            }
          }),
          (i.unstable_scheduleCallback = function (j, Y, B) {
            var ge = i.unstable_now()
            switch (
              (typeof B == 'object' && B !== null
                ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? ge + B : ge))
                : (B = ge),
              j)
            ) {
              case 1:
                var g = -1
                break
              case 2:
                g = 250
                break
              case 5:
                g = 1073741823
                break
              case 4:
                g = 1e4
                break
              default:
                g = 5e3
            }
            return (
              (g = B + g),
              (j = {
                id: w++,
                callback: Y,
                priorityLevel: j,
                startTime: B,
                expirationTime: g,
                sortIndex: -1,
              }),
              B > ge
                ? ((j.sortIndex = B),
                  o(h, j),
                  f(v) === null && j === f(h) && (L ? (V(Ee), (Ee = -1)) : (L = !0), Oe(I, B - ge)))
                : ((j.sortIndex = g), o(v, j), D || k || ((D = !0), Se || ((Se = !0), He()))),
              j
            )
          }),
          (i.unstable_shouldYield = Qe),
          (i.unstable_wrapCallback = function (j) {
            var Y = O
            return function () {
              var B = O
              O = Y
              try {
                return j.apply(this, arguments)
              } finally {
                O = B
              }
            }
          })
      })(kc)),
    kc
  )
}
var om
function Up() {
  return om || ((om = 1), (Yc.exports = Cp())), Yc.exports
}
var Xc = { exports: {} },
  et = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sm
function Hp() {
  if (sm) return et
  sm = 1
  var i = lo()
  function o(v) {
    var h = 'https://react.dev/errors/' + v
    if (1 < arguments.length) {
      h += '?args[]=' + encodeURIComponent(arguments[1])
      for (var w = 2; w < arguments.length; w++) h += '&args[]=' + encodeURIComponent(arguments[w])
    }
    return (
      'Minified React error #' +
      v +
      '; visit ' +
      h +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function f() {}
  var c = {
      d: {
        f,
        r: function () {
          throw Error(o(522))
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for('react.portal')
  function y(v, h, w) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: m,
      key: H == null ? null : '' + H,
      children: v,
      containerInfo: h,
      implementation: w,
    }
  }
  var x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function R(v, h) {
    if (v === 'font') return ''
    if (typeof h == 'string') return h === 'use-credentials' ? h : ''
  }
  return (
    (et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (et.createPortal = function (v, h) {
      var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(o(299))
      return y(v, h, null, w)
    }),
    (et.flushSync = function (v) {
      var h = x.T,
        w = c.p
      try {
        if (((x.T = null), (c.p = 2), v)) return v()
      } finally {
        ;(x.T = h), (c.p = w), c.d.f()
      }
    }),
    (et.preconnect = function (v, h) {
      typeof v == 'string' &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        c.d.C(v, h))
    }),
    (et.prefetchDNS = function (v) {
      typeof v == 'string' && c.d.D(v)
    }),
    (et.preinit = function (v, h) {
      if (typeof v == 'string' && h && typeof h.as == 'string') {
        var w = h.as,
          H = R(w, h.crossOrigin),
          O = typeof h.integrity == 'string' ? h.integrity : void 0,
          k = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0
        w === 'style'
          ? c.d.S(v, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: H,
              integrity: O,
              fetchPriority: k,
            })
          : w === 'script' &&
            c.d.X(v, {
              crossOrigin: H,
              integrity: O,
              fetchPriority: k,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            })
      }
    }),
    (et.preinitModule = function (v, h) {
      if (typeof v == 'string')
        if (typeof h == 'object' && h !== null) {
          if (h.as == null || h.as === 'script') {
            var w = R(h.as, h.crossOrigin)
            c.d.M(v, {
              crossOrigin: w,
              integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            })
          }
        } else h == null && c.d.M(v)
    }),
    (et.preload = function (v, h) {
      if (typeof v == 'string' && typeof h == 'object' && h !== null && typeof h.as == 'string') {
        var w = h.as,
          H = R(w, h.crossOrigin)
        c.d.L(v, w, {
          crossOrigin: H,
          integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
          type: typeof h.type == 'string' ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == 'string' ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == 'string' ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == 'string' ? h.imageSizes : void 0,
          media: typeof h.media == 'string' ? h.media : void 0,
        })
      }
    }),
    (et.preloadModule = function (v, h) {
      if (typeof v == 'string')
        if (h) {
          var w = R(h.as, h.crossOrigin)
          c.d.m(v, {
            as: typeof h.as == 'string' && h.as !== 'script' ? h.as : void 0,
            crossOrigin: w,
            integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          })
        } else c.d.m(v)
    }),
    (et.requestFormReset = function (v) {
      c.d.r(v)
    }),
    (et.unstable_batchedUpdates = function (v, h) {
      return v(h)
    }),
    (et.useFormState = function (v, h, w) {
      return x.H.useFormState(v, h, w)
    }),
    (et.useFormStatus = function () {
      return x.H.useHostTransitionStatus()
    }),
    (et.version = '19.1.0'),
    et
  )
}
var fm
function Bp() {
  if (fm) return Xc.exports
  fm = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (o) {
        console.error(o)
      }
  }
  return i(), (Xc.exports = Hp()), Xc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dm
function qp() {
  if (dm) return Jn
  dm = 1
  var i = Up(),
    o = lo(),
    f = Bp()
  function c(e) {
    var t = 'https://react.dev/errors/' + e
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function m(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function y(e) {
    var t = e,
      l = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? l : null
  }
  function x(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function R(e) {
    if (y(e) !== e) throw Error(c(188))
  }
  function v(e) {
    var t = e.alternate
    if (!t) {
      if (((t = y(e)), t === null)) throw Error(c(188))
      return t !== e ? null : e
    }
    for (var l = e, a = t; ; ) {
      var n = l.return
      if (n === null) break
      var u = n.alternate
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a
          continue
        }
        break
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return R(n), e
          if (u === a) return R(n), t
          u = u.sibling
        }
        throw Error(c(188))
      }
      if (l.return !== a.return) (l = n), (a = u)
      else {
        for (var r = !1, s = n.child; s; ) {
          if (s === l) {
            ;(r = !0), (l = n), (a = u)
            break
          }
          if (s === a) {
            ;(r = !0), (a = n), (l = u)
            break
          }
          s = s.sibling
        }
        if (!r) {
          for (s = u.child; s; ) {
            if (s === l) {
              ;(r = !0), (l = u), (a = n)
              break
            }
            if (s === a) {
              ;(r = !0), (a = u), (l = n)
              break
            }
            s = s.sibling
          }
          if (!r) throw Error(c(189))
        }
      }
      if (l.alternate !== a) throw Error(c(190))
    }
    if (l.tag !== 3) throw Error(c(188))
    return l.stateNode.current === l ? e : t
  }
  function h(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = h(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var w = Object.assign,
    H = Symbol.for('react.element'),
    O = Symbol.for('react.transitional.element'),
    k = Symbol.for('react.portal'),
    D = Symbol.for('react.fragment'),
    L = Symbol.for('react.strict_mode'),
    X = Symbol.for('react.profiler'),
    G = Symbol.for('react.provider'),
    V = Symbol.for('react.consumer'),
    ee = Symbol.for('react.context'),
    ie = Symbol.for('react.forward_ref'),
    I = Symbol.for('react.suspense'),
    Se = Symbol.for('react.suspense_list'),
    Ee = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    me = Symbol.for('react.activity'),
    Qe = Symbol.for('react.memo_cache_sentinel'),
    tt = Symbol.iterator
  function He(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (tt && e[tt]) || e['@@iterator']), typeof e == 'function' ? e : null)
  }
  var Dt = Symbol.for('react.client.reference')
  function jt(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.$$typeof === Dt ? null : e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case D:
        return 'Fragment'
      case X:
        return 'Profiler'
      case L:
        return 'StrictMode'
      case I:
        return 'Suspense'
      case Se:
        return 'SuspenseList'
      case me:
        return 'Activity'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case k:
          return 'Portal'
        case ee:
          return (e.displayName || 'Context') + '.Provider'
        case V:
          return (e._context.displayName || 'Context') + '.Consumer'
        case ie:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case Ee:
          return (t = e.displayName || null), t !== null ? t : jt(e.type) || 'Memo'
        case K:
          ;(t = e._payload), (e = e._init)
          try {
            return jt(e(t))
          } catch {}
      }
    return null
  }
  var Oe = Array.isArray,
    j = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    ge = [],
    g = -1
  function U(e) {
    return { current: e }
  }
  function Q(e) {
    0 > g || ((e.current = ge[g]), (ge[g] = null), g--)
  }
  function q(e, t) {
    g++, (ge[g] = e.current), (e.current = t)
  }
  var Z = U(null),
    se = U(null),
    ne = U(null),
    ye = U(null)
  function ze(e, t) {
    switch ((q(ne, t), q(se, e), q(Z, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? _d(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = _d(t)), (e = Dd(t, e))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    Q(Z), q(Z, e)
  }
  function ct() {
    Q(Z), Q(se), Q(ne)
  }
  function cl(e) {
    e.memoizedState !== null && q(ye, e)
    var t = Z.current,
      l = Dd(t, e.type)
    t !== l && (q(se, e), q(Z, l))
  }
  function ol(e) {
    se.current === e && (Q(Z), Q(se)), ye.current === e && (Q(ye), (kn._currentValue = B))
  }
  var sl = Object.prototype.hasOwnProperty,
    wi = i.unstable_scheduleCallback,
    zi = i.unstable_cancelCallback,
    oh = i.unstable_shouldYield,
    sh = i.unstable_requestPaint,
    Ct = i.unstable_now,
    fh = i.unstable_getCurrentPriorityLevel,
    so = i.unstable_ImmediatePriority,
    fo = i.unstable_UserBlockingPriority,
    au = i.unstable_NormalPriority,
    dh = i.unstable_LowPriority,
    mo = i.unstable_IdlePriority,
    mh = i.log,
    hh = i.unstable_setDisableYieldValue,
    $a = null,
    ot = null
  function fl(e) {
    if ((typeof mh == 'function' && hh(e), ot && typeof ot.setStrictMode == 'function'))
      try {
        ot.setStrictMode($a, e)
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : vh,
    yh = Math.log,
    ph = Math.LN2
  function vh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((yh(e) / ph) | 0)) | 0
  }
  var nu = 256,
    uu = 4194304
  function Bl(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
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
        return e & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function iu(e, t, l) {
    var a = e.pendingLanes
    if (a === 0) return 0
    var n = 0,
      u = e.suspendedLanes,
      r = e.pingedLanes
    e = e.warmLanes
    var s = a & 134217727
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Bl(a))
            : ((r &= s), r !== 0 ? (n = Bl(r)) : l || ((l = s & ~e), l !== 0 && (n = Bl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Bl(s))
            : r !== 0
              ? (n = Bl(r))
              : l || ((l = a & ~e), l !== 0 && (n = Bl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n), (l = t & -t), u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    )
  }
  function Wa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function gh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
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
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function ho() {
    var e = nu
    return (nu <<= 1), (nu & 4194048) === 0 && (nu = 256), e
  }
  function yo() {
    var e = uu
    return (uu <<= 1), (uu & 62914560) === 0 && (uu = 4194304), e
  }
  function Ri(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e)
    return t
  }
  function Fa(e, t) {
    ;(e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0))
  }
  function bh(e, t, l, a, n, u) {
    var r = e.pendingLanes
    ;(e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0)
    var s = e.entanglements,
      p = e.expirationTimes,
      T = e.hiddenUpdates
    for (l = r & ~l; 0 < l; ) {
      var M = 31 - st(l),
        C = 1 << M
      ;(s[M] = 0), (p[M] = -1)
      var A = T[M]
      if (A !== null)
        for (T[M] = null, M = 0; M < A.length; M++) {
          var z = A[M]
          z !== null && (z.lane &= -536870913)
        }
      l &= ~C
    }
    a !== 0 && po(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(r & ~t))
  }
  function po(e, t, l) {
    ;(e.pendingLanes |= t), (e.suspendedLanes &= ~t)
    var a = 31 - st(t)
    ;(e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090))
  }
  function vo(e, t) {
    var l = (e.entangledLanes |= t)
    for (e = e.entanglements; l; ) {
      var a = 31 - st(l),
        n = 1 << a
      ;(n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n)
    }
  }
  function ji(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
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
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function Ni(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
  }
  function go() {
    var e = Y.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Pd(e.type))
  }
  function xh(e, t) {
    var l = Y.p
    try {
      return (Y.p = e), t()
    } finally {
      Y.p = l
    }
  }
  var dl = Math.random().toString(36).slice(2),
    Pe = '__reactFiber$' + dl,
    at = '__reactProps$' + dl,
    aa = '__reactContainer$' + dl,
    Mi = '__reactEvents$' + dl,
    Sh = '__reactListeners$' + dl,
    Eh = '__reactHandles$' + dl,
    bo = '__reactResources$' + dl,
    Pa = '__reactMarker$' + dl
  function Oi(e) {
    delete e[Pe], delete e[at], delete e[Mi], delete e[Sh], delete e[Eh]
  }
  function na(e) {
    var t = e[Pe]
    if (t) return t
    for (var l = e.parentNode; l; ) {
      if ((t = l[aa] || l[Pe])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = Bd(e); e !== null; ) {
            if ((l = e[Pe])) return l
            e = Bd(e)
          }
        return t
      }
      ;(e = l), (l = e.parentNode)
    }
    return null
  }
  function ua(e) {
    if ((e = e[Pe] || e[aa])) {
      var t = e.tag
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }
  function Ia(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(c(33))
  }
  function ia(e) {
    var t = e[bo]
    return t || (t = e[bo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t
  }
  function Ve(e) {
    e[Pa] = !0
  }
  var xo = new Set(),
    So = {}
  function ql(e, t) {
    ra(e, t), ra(e + 'Capture', t)
  }
  function ra(e, t) {
    for (So[e] = t, e = 0; e < t.length; e++) xo.add(t[e])
  }
  var Th = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Eo = {},
    To = {}
  function Ah(e) {
    return sl.call(To, e)
      ? !0
      : sl.call(Eo, e)
        ? !1
        : Th.test(e)
          ? (To[e] = !0)
          : ((Eo[e] = !0), !1)
  }
  function ru(e, t, l) {
    if (Ah(t))
      if (l === null) e.removeAttribute(t)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t)
            return
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, '' + l)
      }
  }
  function cu(e, t, l) {
    if (l === null) e.removeAttribute(t)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, '' + l)
    }
  }
  function Xt(e, t, l, a) {
    if (a === null) e.removeAttribute(l)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l)
          return
      }
      e.setAttributeNS(t, l, '' + a)
    }
  }
  var _i, Ao
  function ca(e) {
    if (_i === void 0)
      try {
        throw Error()
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/)
        ;(_i = (t && t[1]) || ''),
          (Ao =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : '')
      }
    return (
      `
` +
      _i +
      e +
      Ao
    )
  }
  var Di = !1
  function Ci(e, t) {
    if (!e || Di) return ''
    Di = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var C = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(C.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, [])
                } catch (z) {
                  var A = z
                }
                Reflect.construct(e, [], C)
              } else {
                try {
                  C.call()
                } catch (z) {
                  A = z
                }
                e.call(C.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (z) {
                A = z
              }
              ;(C = e()) && typeof C.catch == 'function' && C.catch(function () {})
            }
          } catch (z) {
            if (z && A && typeof z.stack == 'string') return [z.stack, A.stack]
          }
          return [null, null]
        },
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name')
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var u = a.DetermineComponentFrameRoot(),
        r = u[0],
        s = u[1]
      if (r && s) {
        var p = r.split(`
`),
          T = s.split(`
`)
        for (n = a = 0; a < p.length && !p[a].includes('DetermineComponentFrameRoot'); ) a++
        for (; n < T.length && !T[n].includes('DetermineComponentFrameRoot'); ) n++
        if (a === p.length || n === T.length)
          for (a = p.length - 1, n = T.length - 1; 1 <= a && 0 <= n && p[a] !== T[n]; ) n--
        for (; 1 <= a && 0 <= n; a--, n--)
          if (p[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || p[a] !== T[n])) {
                  var M =
                    `
` + p[a].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      M.includes('<anonymous>') &&
                      (M = M.replace('<anonymous>', e.displayName)),
                    M
                  )
                }
              while (1 <= a && 0 <= n)
            break
          }
      }
    } finally {
      ;(Di = !1), (Error.prepareStackTrace = l)
    }
    return (l = e ? e.displayName || e.name : '') ? ca(l) : ''
  }
  function wh(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ca(e.type)
      case 16:
        return ca('Lazy')
      case 13:
        return ca('Suspense')
      case 19:
        return ca('SuspenseList')
      case 0:
      case 15:
        return Ci(e.type, !1)
      case 11:
        return Ci(e.type.render, !1)
      case 1:
        return Ci(e.type, !0)
      case 31:
        return ca('Activity')
      default:
        return ''
    }
  }
  function wo(e) {
    try {
      var t = ''
      do (t += wh(e)), (e = e.return)
      while (e)
      return t
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      )
    }
  }
  function bt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function zo(e) {
    var t = e.type
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  }
  function zh(e) {
    var t = zo(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var n = l.get,
        u = l.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this)
          },
          set: function (r) {
            ;(a = '' + r), u.call(this, r)
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (r) {
            a = '' + r
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function ou(e) {
    e._valueTracker || (e._valueTracker = zh(e))
  }
  function Ro(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var l = t.getValue(),
      a = ''
    return (
      e && (a = zo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    )
  }
  function su(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Rh = /[\n"\\]/g
  function xt(e) {
    return e.replace(Rh, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function Ui(e, t, l, a, n, u, r, s) {
    ;(e.name = ''),
      r != null && typeof r != 'function' && typeof r != 'symbol' && typeof r != 'boolean'
        ? (e.type = r)
        : e.removeAttribute('type'),
      t != null
        ? r === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + bt(t))
          : e.value !== '' + bt(t) && (e.value = '' + bt(t))
        : (r !== 'submit' && r !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Hi(e, r, bt(t))
        : l != null
          ? Hi(e, r, bt(l))
          : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean'
        ? (e.name = '' + bt(s))
        : e.removeAttribute('name')
  }
  function jo(e, t, l, a, n, u, r, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) return
      ;(l = l != null ? '' + bt(l) : ''),
        (t = t != null ? '' + bt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        typeof r != 'boolean' &&
        (e.name = r)
  }
  function Hi(e, t, l) {
    ;(t === 'number' && su(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l)
  }
  function oa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {}
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0)
    } else {
      for (l = '' + bt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ;(e[n].selected = !0), a && (e[n].defaultSelected = !0)
          return
        }
        t !== null || e[n].disabled || (t = e[n])
      }
      t !== null && (t.selected = !0)
    }
  }
  function No(e, t, l) {
    if (t != null && ((t = '' + bt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = l != null ? '' + bt(l) : ''
  }
  function Mo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(c(92))
        if (Oe(a)) {
          if (1 < a.length) throw Error(c(93))
          a = a[0]
        }
        l = a
      }
      l == null && (l = ''), (t = l)
    }
    ;(l = bt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a)
  }
  function sa(e, t) {
    if (t) {
      var l = e.firstChild
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var jh = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function Oo(e, t, l) {
    var a = t.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || jh.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px')
  }
  function _o(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(c(62))
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''))
      for (var n in t) (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Oo(e, n, a)
    } else for (var u in t) t.hasOwnProperty(u) && Oo(e, u, t[u])
  }
  function Bi(e) {
    if (e.indexOf('-') === -1) return !1
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Nh = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Mh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function fu(e) {
    return Mh.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  var qi = null
  function Gi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var fa = null,
    da = null
  function Do(e) {
    var t = ua(e)
    if (t && (e = t.stateNode)) {
      var l = e[at] || null
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Ui(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll('input[name="' + xt('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t]
              if (a !== e && a.form === e.form) {
                var n = a[at] || null
                if (!n) throw Error(c(90))
                Ui(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                )
              }
            }
            for (t = 0; t < l.length; t++) (a = l[t]), a.form === e.form && Ro(a)
          }
          break e
        case 'textarea':
          No(e, l.value, l.defaultValue)
          break e
        case 'select':
          ;(t = l.value), t != null && oa(e, !!l.multiple, t, !1)
      }
    }
  }
  var Li = !1
  function Co(e, t, l) {
    if (Li) return e(t, l)
    Li = !0
    try {
      var a = e(t)
      return a
    } finally {
      if (
        ((Li = !1),
        (fa !== null || da !== null) &&
          (Wu(), fa && ((t = fa), (e = da), (da = fa = null), Do(t), e)))
      )
        for (t = 0; t < e.length; t++) Do(e[t])
    }
  }
  function en(e, t) {
    var l = e.stateNode
    if (l === null) return null
    var a = l[at] || null
    if (a === null) return null
    l = a[t]
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
        ;(a = !a.disabled) ||
          ((e = e.type),
          (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !a)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (l && typeof l != 'function') throw Error(c(231, t, typeof l))
    return l
  }
  var Qt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Yi = !1
  if (Qt)
    try {
      var tn = {}
      Object.defineProperty(tn, 'passive', {
        get: function () {
          Yi = !0
        },
      }),
        window.addEventListener('test', tn, tn),
        window.removeEventListener('test', tn, tn)
    } catch {
      Yi = !1
    }
  var ml = null,
    ki = null,
    du = null
  function Uo() {
    if (du) return du
    var e,
      t = ki,
      l = t.length,
      a,
      n = 'value' in ml ? ml.value : ml.textContent,
      u = n.length
    for (e = 0; e < l && t[e] === n[e]; e++);
    var r = l - e
    for (a = 1; a <= r && t[l - a] === n[u - a]; a++);
    return (du = n.slice(e, 1 < a ? 1 - a : void 0))
  }
  function mu(e) {
    var t = e.keyCode
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function hu() {
    return !0
  }
  function Ho() {
    return !1
  }
  function nt(e) {
    function t(l, a, n, u, r) {
      ;(this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = r),
        (this.currentTarget = null)
      for (var s in e) e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? hu
          : Ho),
        (this.isPropagationStopped = Ho),
        this
      )
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = hu))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = hu))
        },
        persist: function () {},
        isPersistent: hu,
      }),
      t
    )
  }
  var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yu = nt(Gl),
    ln = w({}, Gl, { view: 0, detail: 0 }),
    Oh = nt(ln),
    Xi,
    Qi,
    an,
    pu = w({}, ln, {
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
      getModifierState: Zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== an &&
              (an && e.type === 'mousemove'
                ? ((Xi = e.screenX - an.screenX), (Qi = e.screenY - an.screenY))
                : (Qi = Xi = 0),
              (an = e)),
            Xi)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Qi
      },
    }),
    Bo = nt(pu),
    _h = w({}, pu, { dataTransfer: 0 }),
    Dh = nt(_h),
    Ch = w({}, ln, { relatedTarget: 0 }),
    Vi = nt(Ch),
    Uh = w({}, Gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hh = nt(Uh),
    Bh = w({}, Gl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    qh = nt(Bh),
    Gh = w({}, Gl, { data: 0 }),
    qo = nt(Gh),
    Lh = {
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
    Yh = {
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
    kh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function Xh(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : (e = kh[e]) ? !!t[e] : !1
  }
  function Zi() {
    return Xh
  }
  var Qh = w({}, ln, {
      key: function (e) {
        if (e.key) {
          var t = Lh[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = mu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Yh[e.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zi,
      charCode: function (e) {
        return e.type === 'keypress' ? mu(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? mu(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0
      },
    }),
    Vh = nt(Qh),
    Zh = w({}, pu, {
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
    Go = nt(Zh),
    Kh = w({}, ln, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zi,
    }),
    Jh = nt(Kh),
    $h = w({}, Gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wh = nt($h),
    Fh = w({}, pu, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ph = nt(Fh),
    Ih = w({}, Gl, { newState: 0, oldState: 0 }),
    ey = nt(Ih),
    ty = [9, 13, 27, 32],
    Ki = Qt && 'CompositionEvent' in window,
    nn = null
  Qt && 'documentMode' in document && (nn = document.documentMode)
  var ly = Qt && 'TextEvent' in window && !nn,
    Lo = Qt && (!Ki || (nn && 8 < nn && 11 >= nn)),
    Yo = ' ',
    ko = !1
  function Xo(e, t) {
    switch (e) {
      case 'keyup':
        return ty.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Qo(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var ma = !1
  function ay(e, t) {
    switch (e) {
      case 'compositionend':
        return Qo(t)
      case 'keypress':
        return t.which !== 32 ? null : ((ko = !0), Yo)
      case 'textInput':
        return (e = t.data), e === Yo && ko ? null : e
      default:
        return null
    }
  }
  function ny(e, t) {
    if (ma)
      return e === 'compositionend' || (!Ki && Xo(e, t))
        ? ((e = Uo()), (du = ki = ml = null), (ma = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Lo && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var uy = {
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
  }
  function Vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!uy[e.type] : t === 'textarea'
  }
  function Zo(e, t, l, a) {
    fa ? (da ? da.push(a) : (da = [a])) : (fa = a),
      (t = li(t, 'onChange')),
      0 < t.length &&
        ((l = new yu('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t }))
  }
  var un = null,
    rn = null
  function iy(e) {
    Rd(e, 0)
  }
  function vu(e) {
    var t = Ia(e)
    if (Ro(t)) return e
  }
  function Ko(e, t) {
    if (e === 'change') return t
  }
  var Jo = !1
  if (Qt) {
    var Ji
    if (Qt) {
      var $i = 'oninput' in document
      if (!$i) {
        var $o = document.createElement('div')
        $o.setAttribute('oninput', 'return;'), ($i = typeof $o.oninput == 'function')
      }
      Ji = $i
    } else Ji = !1
    Jo = Ji && (!document.documentMode || 9 < document.documentMode)
  }
  function Wo() {
    un && (un.detachEvent('onpropertychange', Fo), (rn = un = null))
  }
  function Fo(e) {
    if (e.propertyName === 'value' && vu(rn)) {
      var t = []
      Zo(t, rn, e, Gi(e)), Co(iy, t)
    }
  }
  function ry(e, t, l) {
    e === 'focusin'
      ? (Wo(), (un = t), (rn = l), un.attachEvent('onpropertychange', Fo))
      : e === 'focusout' && Wo()
  }
  function cy(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vu(rn)
  }
  function oy(e, t) {
    if (e === 'click') return vu(t)
  }
  function sy(e, t) {
    if (e === 'input' || e === 'change') return vu(t)
  }
  function fy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var ft = typeof Object.is == 'function' ? Object.is : fy
  function cn(e, t) {
    if (ft(e, t)) return !0
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
    var l = Object.keys(e),
      a = Object.keys(t)
    if (l.length !== a.length) return !1
    for (a = 0; a < l.length; a++) {
      var n = l[a]
      if (!sl.call(t, n) || !ft(e[n], t[n])) return !1
    }
    return !0
  }
  function Po(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Io(e, t) {
    var l = Po(e)
    e = 0
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t)) return { node: l, offset: t - e }
        e = a
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = Po(l)
    }
  }
  function es(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? es(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function ts(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = su(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow
      else break
      t = su(e.document)
    }
    return t
  }
  function Wi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
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
    )
  }
  var dy = Qt && 'documentMode' in document && 11 >= document.documentMode,
    ha = null,
    Fi = null,
    on = null,
    Pi = !1
  function ls(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    Pi ||
      ha == null ||
      ha !== su(a) ||
      ((a = ha),
      'selectionStart' in a && Wi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (on && cn(on, a)) ||
        ((on = a),
        (a = li(Fi, 'onSelect')),
        0 < a.length &&
          ((t = new yu('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ha))))
  }
  function Ll(e, t) {
    var l = {}
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    )
  }
  var ya = {
      animationend: Ll('Animation', 'AnimationEnd'),
      animationiteration: Ll('Animation', 'AnimationIteration'),
      animationstart: Ll('Animation', 'AnimationStart'),
      transitionrun: Ll('Transition', 'TransitionRun'),
      transitionstart: Ll('Transition', 'TransitionStart'),
      transitioncancel: Ll('Transition', 'TransitionCancel'),
      transitionend: Ll('Transition', 'TransitionEnd'),
    },
    Ii = {},
    as = {}
  Qt &&
    ((as = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ya.animationend.animation,
      delete ya.animationiteration.animation,
      delete ya.animationstart.animation),
    'TransitionEvent' in window || delete ya.transitionend.transition)
  function Yl(e) {
    if (Ii[e]) return Ii[e]
    if (!ya[e]) return e
    var t = ya[e],
      l
    for (l in t) if (t.hasOwnProperty(l) && l in as) return (Ii[e] = t[l])
    return e
  }
  var ns = Yl('animationend'),
    us = Yl('animationiteration'),
    is = Yl('animationstart'),
    my = Yl('transitionrun'),
    hy = Yl('transitionstart'),
    yy = Yl('transitioncancel'),
    rs = Yl('transitionend'),
    cs = new Map(),
    er =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  er.push('scrollEnd')
  function Nt(e, t) {
    cs.set(e, t), ql(t, [e])
  }
  var os = new WeakMap()
  function St(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = os.get(e)
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: wo(t) }), os.set(e, t), t)
    }
    return { value: e, source: t, stack: wo(t) }
  }
  var Et = [],
    pa = 0,
    tr = 0
  function gu() {
    for (var e = pa, t = (tr = pa = 0); t < e; ) {
      var l = Et[t]
      Et[t++] = null
      var a = Et[t]
      Et[t++] = null
      var n = Et[t]
      Et[t++] = null
      var u = Et[t]
      if (((Et[t++] = null), a !== null && n !== null)) {
        var r = a.pending
        r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)), (a.pending = n)
      }
      u !== 0 && ss(l, n, u)
    }
  }
  function bu(e, t, l, a) {
    ;(Et[pa++] = e),
      (Et[pa++] = t),
      (Et[pa++] = l),
      (Et[pa++] = a),
      (tr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a)
  }
  function lr(e, t, l, a) {
    return bu(e, t, l, a), xu(e)
  }
  function va(e, t) {
    return bu(e, null, null, t), xu(e)
  }
  function ss(e, t, l) {
    e.lanes |= l
    var a = e.alternate
    a !== null && (a.lanes |= l)
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return)
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - st(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null
  }
  function xu(e) {
    if (50 < Cn) throw ((Cn = 0), (cc = null), Error(c(185)))
    for (var t = e.return; t !== null; ) (e = t), (t = e.return)
    return e.tag === 3 ? e.stateNode : null
  }
  var ga = {}
  function py(e, t, l, a) {
    ;(this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function dt(e, t, l, a) {
    return new py(e, t, l, a)
  }
  function ar(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Vt(e, t) {
    var l = e.alternate
    return (
      l === null
        ? ((l = dt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    )
  }
  function fs(e, t) {
    e.flags &= 65011714
    var l = e.alternate
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function Su(e, t, l, a, n, u) {
    var r = 0
    if (((a = e), typeof e == 'function')) ar(e) && (r = 1)
    else if (typeof e == 'string')
      r = gp(e, l, Z.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5
    else
      e: switch (e) {
        case me:
          return (e = dt(31, l, t, n)), (e.elementType = me), (e.lanes = u), e
        case D:
          return kl(l.children, n, u, t)
        case L:
          ;(r = 8), (n |= 24)
          break
        case X:
          return (e = dt(12, l, t, n | 2)), (e.elementType = X), (e.lanes = u), e
        case I:
          return (e = dt(13, l, t, n)), (e.elementType = I), (e.lanes = u), e
        case Se:
          return (e = dt(19, l, t, n)), (e.elementType = Se), (e.lanes = u), e
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case G:
              case ee:
                r = 10
                break e
              case V:
                r = 9
                break e
              case ie:
                r = 11
                break e
              case Ee:
                r = 14
                break e
              case K:
                ;(r = 16), (a = null)
                break e
            }
          ;(r = 29), (l = Error(c(130, e === null ? 'null' : typeof e, ''))), (a = null)
      }
    return (t = dt(r, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
  }
  function kl(e, t, l, a) {
    return (e = dt(7, e, a, t)), (e.lanes = l), e
  }
  function nr(e, t, l) {
    return (e = dt(6, e, null, t)), (e.lanes = l), e
  }
  function ur(e, t, l) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var ba = [],
    xa = 0,
    Eu = null,
    Tu = 0,
    Tt = [],
    At = 0,
    Xl = null,
    Zt = 1,
    Kt = ''
  function Ql(e, t) {
    ;(ba[xa++] = Tu), (ba[xa++] = Eu), (Eu = e), (Tu = t)
  }
  function ds(e, t, l) {
    ;(Tt[At++] = Zt), (Tt[At++] = Kt), (Tt[At++] = Xl), (Xl = e)
    var a = Zt
    e = Kt
    var n = 32 - st(a) - 1
    ;(a &= ~(1 << n)), (l += 1)
    var u = 32 - st(t) + n
    if (30 < u) {
      var r = n - (n % 5)
      ;(u = (a & ((1 << r) - 1)).toString(32)),
        (a >>= r),
        (n -= r),
        (Zt = (1 << (32 - st(t) + n)) | (l << n) | a),
        (Kt = u + e)
    } else (Zt = (1 << u) | (l << n) | a), (Kt = e)
  }
  function ir(e) {
    e.return !== null && (Ql(e, 1), ds(e, 1, 0))
  }
  function rr(e) {
    for (; e === Eu; ) (Eu = ba[--xa]), (ba[xa] = null), (Tu = ba[--xa]), (ba[xa] = null)
    for (; e === Xl; )
      (Xl = Tt[--At]),
        (Tt[At] = null),
        (Kt = Tt[--At]),
        (Tt[At] = null),
        (Zt = Tt[--At]),
        (Tt[At] = null)
  }
  var lt = null,
    Ce = null,
    ve = !1,
    Vl = null,
    Ut = !1,
    cr = Error(c(519))
  function Zl(e) {
    var t = Error(c(418, ''))
    throw (dn(St(t, e)), cr)
  }
  function ms(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps
    switch (((t[Pe] = e), (t[at] = a), l)) {
      case 'dialog':
        de('cancel', t), de('close', t)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        de('load', t)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < Hn.length; l++) de(Hn[l], t)
        break
      case 'source':
        de('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        de('error', t), de('load', t)
        break
      case 'details':
        de('toggle', t)
        break
      case 'input':
        de('invalid', t),
          jo(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          ou(t)
        break
      case 'select':
        de('invalid', t)
        break
      case 'textarea':
        de('invalid', t), Mo(t, a.value, a.defaultValue, a.children), ou(t)
    }
    ;(l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Od(t.textContent, l)
        ? (a.popover != null && (de('beforetoggle', t), de('toggle', t)),
          a.onScroll != null && de('scroll', t),
          a.onScrollEnd != null && de('scrollend', t),
          a.onClick != null && (t.onclick = ai),
          (t = !0))
        : (t = !1),
      t || Zl(e)
  }
  function hs(e) {
    for (lt = e.return; lt; )
      switch (lt.tag) {
        case 5:
        case 13:
          Ut = !1
          return
        case 27:
        case 3:
          Ut = !0
          return
        default:
          lt = lt.return
      }
  }
  function sn(e) {
    if (e !== lt) return !1
    if (!ve) return hs(e), (ve = !0), !1
    var t = e.tag,
      l
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Ac(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ce && Zl(e),
      hs(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                Ce = Ot(e.nextSibling)
                break e
              }
              t--
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++
          e = e.nextSibling
        }
        Ce = null
      }
    } else
      t === 27
        ? ((t = Ce), Nl(e.type) ? ((e = jc), (jc = null), (Ce = e)) : (Ce = t))
        : (Ce = lt ? Ot(e.stateNode.nextSibling) : null)
    return !0
  }
  function fn() {
    ;(Ce = lt = null), (ve = !1)
  }
  function ys() {
    var e = Vl
    return e !== null && (rt === null ? (rt = e) : rt.push.apply(rt, e), (Vl = null)), e
  }
  function dn(e) {
    Vl === null ? (Vl = [e]) : Vl.push(e)
  }
  var or = U(null),
    Kl = null,
    Jt = null
  function hl(e, t, l) {
    q(or, t._currentValue), (t._currentValue = l)
  }
  function $t(e) {
    ;(e._currentValue = or.current), Q(or)
  }
  function sr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break
      e = e.return
    }
  }
  function fr(e, t, l, a) {
    var n = e.child
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies
      if (u !== null) {
        var r = n.child
        u = u.firstContext
        e: for (; u !== null; ) {
          var s = u
          u = n
          for (var p = 0; p < t.length; p++)
            if (s.context === t[p]) {
              ;(u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                sr(u.return, l, e),
                a || (r = null)
              break e
            }
          u = s.next
        }
      } else if (n.tag === 18) {
        if (((r = n.return), r === null)) throw Error(c(341))
        ;(r.lanes |= l), (u = r.alternate), u !== null && (u.lanes |= l), sr(r, l, e), (r = null)
      } else r = n.child
      if (r !== null) r.return = n
      else
        for (r = n; r !== null; ) {
          if (r === e) {
            r = null
            break
          }
          if (((n = r.sibling), n !== null)) {
            ;(n.return = r.return), (r = n)
            break
          }
          r = r.return
        }
      n = r
    }
  }
  function mn(e, t, l, a) {
    e = null
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var r = n.alternate
        if (r === null) throw Error(c(387))
        if (((r = r.memoizedProps), r !== null)) {
          var s = n.type
          ft(n.pendingProps.value, r.value) || (e !== null ? e.push(s) : (e = [s]))
        }
      } else if (n === ye.current) {
        if (((r = n.alternate), r === null)) throw Error(c(387))
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(kn) : (e = [kn]))
      }
      n = n.return
    }
    e !== null && fr(t, e, l, a), (t.flags |= 262144)
  }
  function Au(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ft(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function Jl(e) {
    ;(Kl = e), (Jt = null), (e = e.dependencies), e !== null && (e.firstContext = null)
  }
  function Ie(e) {
    return ps(Kl, e)
  }
  function wu(e, t) {
    return Kl === null && Jl(e), ps(e, t)
  }
  function ps(e, t) {
    var l = t._currentValue
    if (((t = { context: t, memoizedValue: l, next: null }), Jt === null)) {
      if (e === null) throw Error(c(308))
      ;(Jt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288)
    } else Jt = Jt.next = t
    return l
  }
  var vy =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a)
                },
              })
            this.abort = function () {
              ;(t.aborted = !0),
                e.forEach(function (l) {
                  return l()
                })
            }
          },
    gy = i.unstable_scheduleCallback,
    by = i.unstable_NormalPriority,
    Ye = {
      $$typeof: ee,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function dr() {
    return { controller: new vy(), data: new Map(), refCount: 0 }
  }
  function hn(e) {
    e.refCount--,
      e.refCount === 0 &&
        gy(by, function () {
          e.controller.abort()
        })
  }
  var yn = null,
    mr = 0,
    Sa = 0,
    Ea = null
  function xy(e, t) {
    if (yn === null) {
      var l = (yn = [])
      ;(mr = 0),
        (Sa = yc()),
        (Ea = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a)
          },
        })
    }
    return mr++, t.then(vs, vs), t
  }
  function vs() {
    if (--mr === 0 && yn !== null) {
      Ea !== null && (Ea.status = 'fulfilled')
      var e = yn
      ;(yn = null), (Sa = 0), (Ea = null)
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function Sy(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n)
        },
      }
    return (
      e.then(
        function () {
          ;(a.status = 'fulfilled'), (a.value = t)
          for (var n = 0; n < l.length; n++) (0, l[n])(t)
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0)
        }
      ),
      a
    )
  }
  var gs = j.S
  j.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && xy(e, t),
      gs !== null && gs(e, t)
  }
  var $l = U(null)
  function hr() {
    var e = $l.current
    return e !== null ? e : je.pooledCache
  }
  function zu(e, t) {
    t === null ? q($l, $l.current) : q($l, t.pool)
  }
  function bs() {
    var e = hr()
    return e === null ? null : { parent: Ye._currentValue, pool: e }
  }
  var pn = Error(c(460)),
    xs = Error(c(474)),
    Ru = Error(c(542)),
    yr = { then: function () {} }
  function Ss(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected'
  }
  function ju() {}
  function Es(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(ju, ju), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((e = t.reason), As(e), e)
      default:
        if (typeof t.status == 'string') t.then(ju, ju)
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482))
          ;(e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t
                  ;(n.status = 'fulfilled'), (n.value = a)
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t
                  ;(n.status = 'rejected'), (n.reason = a)
                }
              }
            )
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((e = t.reason), As(e), e)
        }
        throw ((vn = t), pn)
    }
  }
  var vn = null
  function Ts() {
    if (vn === null) throw Error(c(459))
    var e = vn
    return (vn = null), e
  }
  function As(e) {
    if (e === pn || e === Ru) throw Error(c(483))
  }
  var yl = !1
  function pr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function vr(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        })
  }
  function pl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function vl(e, t, l) {
    var a = e.updateQueue
    if (a === null) return null
    if (((a = a.shared), (be & 2) !== 0)) {
      var n = a.pending
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = xu(e)),
        ss(e, null, l),
        t
      )
    }
    return bu(e, a, t, l), xu(e)
  }
  function gn(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), vo(e, l)
    }
  }
  function gr(e, t) {
    var l = e.updateQueue,
      a = e.alternate
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var r = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null }
          u === null ? (n = u = r) : (u = u.next = r), (l = l.next)
        } while (l !== null)
        u === null ? (n = u = t) : (u = u.next = t)
      } else n = u = t
      ;(l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l)
      return
    }
    ;(e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t)
  }
  var br = !1
  function bn() {
    if (br) {
      var e = Ea
      if (e !== null) throw e
    }
  }
  function xn(e, t, l, a) {
    br = !1
    var n = e.updateQueue
    yl = !1
    var u = n.firstBaseUpdate,
      r = n.lastBaseUpdate,
      s = n.shared.pending
    if (s !== null) {
      n.shared.pending = null
      var p = s,
        T = p.next
      ;(p.next = null), r === null ? (u = T) : (r.next = T), (r = p)
      var M = e.alternate
      M !== null &&
        ((M = M.updateQueue),
        (s = M.lastBaseUpdate),
        s !== r && (s === null ? (M.firstBaseUpdate = T) : (s.next = T), (M.lastBaseUpdate = p)))
    }
    if (u !== null) {
      var C = n.baseState
      ;(r = 0), (M = T = p = null), (s = u)
      do {
        var A = s.lane & -536870913,
          z = A !== s.lane
        if (z ? (he & A) === A : (a & A) === A) {
          A !== 0 && A === Sa && (br = !0),
            M !== null &&
              (M = M.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null })
          e: {
            var ae = e,
              te = s
            A = t
            var we = l
            switch (te.tag) {
              case 1:
                if (((ae = te.payload), typeof ae == 'function')) {
                  C = ae.call(we, C, A)
                  break e
                }
                C = ae
                break e
              case 3:
                ae.flags = (ae.flags & -65537) | 128
              case 0:
                if (
                  ((ae = te.payload),
                  (A = typeof ae == 'function' ? ae.call(we, C, A) : ae),
                  A == null)
                )
                  break e
                C = w({}, C, A)
                break e
              case 2:
                yl = !0
            }
          }
          ;(A = s.callback),
            A !== null &&
              ((e.flags |= 64),
              z && (e.flags |= 8192),
              (z = n.callbacks),
              z === null ? (n.callbacks = [A]) : z.push(A))
        } else
          (z = { lane: A, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
            M === null ? ((T = M = z), (p = C)) : (M = M.next = z),
            (r |= A)
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break
          ;(z = s), (s = z.next), (z.next = null), (n.lastBaseUpdate = z), (n.shared.pending = null)
        }
      } while (!0)
      M === null && (p = C),
        (n.baseState = p),
        (n.firstBaseUpdate = T),
        (n.lastBaseUpdate = M),
        u === null && (n.shared.lanes = 0),
        (wl |= r),
        (e.lanes = r),
        (e.memoizedState = C)
    }
  }
  function ws(e, t) {
    if (typeof e != 'function') throw Error(c(191, e))
    e.call(t)
  }
  function zs(e, t) {
    var l = e.callbacks
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) ws(l[e], t)
  }
  var Ta = U(null),
    Nu = U(0)
  function Rs(e, t) {
    ;(e = ll), q(Nu, e), q(Ta, t), (ll = e | t.baseLanes)
  }
  function xr() {
    q(Nu, ll), q(Ta, Ta.current)
  }
  function Sr() {
    ;(ll = Nu.current), Q(Ta), Q(Nu)
  }
  var gl = 0,
    re = null,
    Te = null,
    Ge = null,
    Mu = !1,
    Aa = !1,
    Wl = !1,
    Ou = 0,
    Sn = 0,
    wa = null,
    Ey = 0
  function Be() {
    throw Error(c(321))
  }
  function Er(e, t) {
    if (t === null) return !1
    for (var l = 0; l < t.length && l < e.length; l++) if (!ft(e[l], t[l])) return !1
    return !0
  }
  function Tr(e, t, l, a, n, u) {
    return (
      (gl = u),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (j.H = e === null || e.memoizedState === null ? ff : df),
      (Wl = !1),
      (u = l(a, n)),
      (Wl = !1),
      Aa && (u = Ns(t, l, a, n)),
      js(e),
      u
    )
  }
  function js(e) {
    j.H = Bu
    var t = Te !== null && Te.next !== null
    if (((gl = 0), (Ge = Te = re = null), (Mu = !1), (Sn = 0), (wa = null), t)) throw Error(c(300))
    e === null || Ze || ((e = e.dependencies), e !== null && Au(e) && (Ze = !0))
  }
  function Ns(e, t, l, a) {
    re = e
    var n = 0
    do {
      if ((Aa && (wa = null), (Sn = 0), (Aa = !1), 25 <= n)) throw Error(c(301))
      if (((n += 1), (Ge = Te = null), e.updateQueue != null)) {
        var u = e.updateQueue
        ;(u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0)
      }
      ;(j.H = Ny), (u = t(l, a))
    } while (Aa)
    return u
  }
  function Ty() {
    var e = j.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == 'function' ? En(t) : t),
      (e = e.useState()[0]),
      (Te !== null ? Te.memoizedState : null) !== e && (re.flags |= 1024),
      t
    )
  }
  function Ar() {
    var e = Ou !== 0
    return (Ou = 0), e
  }
  function wr(e, t, l) {
    ;(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l)
  }
  function zr(e) {
    if (Mu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        t !== null && (t.pending = null), (e = e.next)
      }
      Mu = !1
    }
    ;(gl = 0), (Ge = Te = re = null), (Aa = !1), (Sn = Ou = 0), (wa = null)
  }
  function ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return Ge === null ? (re.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge
  }
  function Le() {
    if (Te === null) {
      var e = re.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Te.next
    var t = Ge === null ? re.memoizedState : Ge.next
    if (t !== null) (Ge = t), (Te = e)
    else {
      if (e === null) throw re.alternate === null ? Error(c(467)) : Error(c(310))
      ;(Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        Ge === null ? (re.memoizedState = Ge = e) : (Ge = Ge.next = e)
    }
    return Ge
  }
  function Rr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function En(e) {
    var t = Sn
    return (
      (Sn += 1),
      wa === null && (wa = []),
      (e = Es(wa, e, t)),
      (t = re),
      (Ge === null ? t.memoizedState : Ge.next) === null &&
        ((t = t.alternate), (j.H = t === null || t.memoizedState === null ? ff : df)),
      e
    )
  }
  function _u(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return En(e)
      if (e.$$typeof === ee) return Ie(e)
    }
    throw Error(c(438, String(e)))
  }
  function jr(e) {
    var t = null,
      l = re.updateQueue
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = re.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Rr()), (re.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Qe
    return t.index++, l
  }
  function Wt(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function Du(e) {
    var t = Le()
    return Nr(t, Te, e)
  }
  function Nr(e, t, l) {
    var a = e.queue
    if (a === null) throw Error(c(311))
    a.lastRenderedReducer = l
    var n = e.baseQueue,
      u = a.pending
    if (u !== null) {
      if (n !== null) {
        var r = n.next
        ;(n.next = u.next), (u.next = r)
      }
      ;(t.baseQueue = n = u), (a.pending = null)
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u
    else {
      t = n.next
      var s = (r = null),
        p = null,
        T = t,
        M = !1
      do {
        var C = T.lane & -536870913
        if (C !== T.lane ? (he & C) === C : (gl & C) === C) {
          var A = T.revertLane
          if (A === 0)
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              C === Sa && (M = !0)
          else if ((gl & A) === A) {
            ;(T = T.next), A === Sa && (M = !0)
            continue
          } else
            (C = {
              lane: 0,
              revertLane: T.revertLane,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              p === null ? ((s = p = C), (r = u)) : (p = p.next = C),
              (re.lanes |= A),
              (wl |= A)
          ;(C = T.action), Wl && l(u, C), (u = T.hasEagerState ? T.eagerState : l(u, C))
        } else
          (A = {
            lane: C,
            revertLane: T.revertLane,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            p === null ? ((s = p = A), (r = u)) : (p = p.next = A),
            (re.lanes |= C),
            (wl |= C)
        T = T.next
      } while (T !== null && T !== t)
      if (
        (p === null ? (r = u) : (p.next = s),
        !ft(u, e.memoizedState) && ((Ze = !0), M && ((l = Ea), l !== null)))
      )
        throw l
      ;(e.memoizedState = u), (e.baseState = r), (e.baseQueue = p), (a.lastRenderedState = u)
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }
  function Mr(e) {
    var t = Le(),
      l = t.queue
    if (l === null) throw Error(c(311))
    l.lastRenderedReducer = e
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState
    if (n !== null) {
      l.pending = null
      var r = (n = n.next)
      do (u = e(u, r.action)), (r = r.next)
      while (r !== n)
      ft(u, t.memoizedState) || (Ze = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u)
    }
    return [u, a]
  }
  function Ms(e, t, l) {
    var a = re,
      n = Le(),
      u = ve
    if (u) {
      if (l === void 0) throw Error(c(407))
      l = l()
    } else l = t()
    var r = !ft((Te || n).memoizedState, l)
    r && ((n.memoizedState = l), (Ze = !0)), (n = n.queue)
    var s = Ds.bind(null, a, n, e)
    if (
      (Tn(2048, 8, s, [e]), n.getSnapshot !== t || r || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), za(9, Cu(), _s.bind(null, a, n, l, t), null), je === null))
        throw Error(c(349))
      u || (gl & 124) !== 0 || Os(a, t, l)
    }
    return l
  }
  function Os(e, t, l) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = re.updateQueue),
      t === null
        ? ((t = Rr()), (re.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e))
  }
  function _s(e, t, l, a) {
    ;(t.value = l), (t.getSnapshot = a), Cs(t) && Us(e)
  }
  function Ds(e, t, l) {
    return l(function () {
      Cs(t) && Us(e)
    })
  }
  function Cs(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var l = t()
      return !ft(e, l)
    } catch {
      return !0
    }
  }
  function Us(e) {
    var t = va(e, 2)
    t !== null && vt(t, e, 2)
  }
  function Or(e) {
    var t = ut()
    if (typeof e == 'function') {
      var l = e
      if (((e = l()), Wl)) {
        fl(!0)
        try {
          l()
        } finally {
          fl(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: e,
      }),
      t
    )
  }
  function Hs(e, t, l, a) {
    return (e.baseState = l), Nr(e, Te, typeof a == 'function' ? a : Wt)
  }
  function Ay(e, t, l, a, n) {
    if (Hu(e)) throw Error(c(485))
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          u.listeners.push(r)
        },
      }
      j.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Bs(t, u))
          : ((u.next = l.next), (t.pending = l.next = u))
    }
  }
  function Bs(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state
    if (t.isTransition) {
      var u = j.T,
        r = {}
      j.T = r
      try {
        var s = l(n, a),
          p = j.S
        p !== null && p(r, s), qs(e, t, s)
      } catch (T) {
        _r(e, t, T)
      } finally {
        j.T = u
      }
    } else
      try {
        ;(u = l(n, a)), qs(e, t, u)
      } catch (T) {
        _r(e, t, T)
      }
  }
  function qs(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            Gs(e, t, a)
          },
          function (a) {
            return _r(e, t, a)
          }
        )
      : Gs(e, t, l)
  }
  function Gs(e, t, l) {
    ;(t.status = 'fulfilled'),
      (t.value = l),
      Ls(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Bs(e, l)))
  }
  function _r(e, t, l) {
    var a = e.pending
    if (((e.pending = null), a !== null)) {
      a = a.next
      do (t.status = 'rejected'), (t.reason = l), Ls(t), (t = t.next)
      while (t !== a)
    }
    e.action = null
  }
  function Ls(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function Ys(e, t) {
    return t
  }
  function ks(e, t) {
    if (ve) {
      var l = je.formState
      if (l !== null) {
        e: {
          var a = re
          if (ve) {
            if (Ce) {
              t: {
                for (var n = Ce, u = Ut; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null
                    break t
                  }
                  if (((n = Ot(n.nextSibling)), n === null)) {
                    n = null
                    break t
                  }
                }
                ;(u = n.data), (n = u === 'F!' || u === 'F' ? n : null)
              }
              if (n) {
                ;(Ce = Ot(n.nextSibling)), (a = n.data === 'F!')
                break e
              }
            }
            Zl(a)
          }
          a = !1
        }
        a && (t = l[0])
      }
    }
    return (
      (l = ut()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ys,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = cf.bind(null, re, a)),
      (a.dispatch = l),
      (a = Or(!1)),
      (u = Br.bind(null, re, !1, a.queue)),
      (a = ut()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Ay.bind(null, re, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    )
  }
  function Xs(e) {
    var t = Le()
    return Qs(t, Te, e)
  }
  function Qs(e, t, l) {
    if (
      ((t = Nr(e, t, Ys)[0]),
      (e = Du(Wt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = En(t)
      } catch (r) {
        throw r === pn ? Ru : r
      }
    else a = t
    t = Le()
    var n = t.queue,
      u = n.dispatch
    return (
      l !== t.memoizedState && ((re.flags |= 2048), za(9, Cu(), wy.bind(null, n, l), null)),
      [a, u, e]
    )
  }
  function wy(e, t) {
    e.action = t
  }
  function Vs(e) {
    var t = Le(),
      l = Te
    if (l !== null) return Qs(t, l, e)
    Le(), (t = t.memoizedState), (l = Le())
    var a = l.queue.dispatch
    return (l.memoizedState = e), [t, a, !1]
  }
  function za(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = re.updateQueue),
      t === null && ((t = Rr()), (re.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    )
  }
  function Cu() {
    return { destroy: void 0, resource: void 0 }
  }
  function Zs() {
    return Le().memoizedState
  }
  function Uu(e, t, l, a) {
    var n = ut()
    ;(a = a === void 0 ? null : a), (re.flags |= e), (n.memoizedState = za(1 | t, Cu(), l, a))
  }
  function Tn(e, t, l, a) {
    var n = Le()
    a = a === void 0 ? null : a
    var u = n.memoizedState.inst
    Te !== null && a !== null && Er(a, Te.memoizedState.deps)
      ? (n.memoizedState = za(t, u, l, a))
      : ((re.flags |= e), (n.memoizedState = za(1 | t, u, l, a)))
  }
  function Ks(e, t) {
    Uu(8390656, 8, e, t)
  }
  function Js(e, t) {
    Tn(2048, 8, e, t)
  }
  function $s(e, t) {
    return Tn(4, 2, e, t)
  }
  function Ws(e, t) {
    return Tn(4, 4, e, t)
  }
  function Fs(e, t) {
    if (typeof t == 'function') {
      e = e()
      var l = t(e)
      return function () {
        typeof l == 'function' ? l() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function Ps(e, t, l) {
    ;(l = l != null ? l.concat([e]) : null), Tn(4, 4, Fs.bind(null, t, e), l)
  }
  function Dr() {}
  function Is(e, t) {
    var l = Le()
    t = t === void 0 ? null : t
    var a = l.memoizedState
    return t !== null && Er(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e)
  }
  function ef(e, t) {
    var l = Le()
    t = t === void 0 ? null : t
    var a = l.memoizedState
    if (t !== null && Er(t, a[1])) return a[0]
    if (((a = e()), Wl)) {
      fl(!0)
      try {
        e()
      } finally {
        fl(!1)
      }
    }
    return (l.memoizedState = [a, t]), a
  }
  function Cr(e, t, l) {
    return l === void 0 || (gl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = nd()), (re.lanes |= e), (wl |= e), l)
  }
  function tf(e, t, l, a) {
    return ft(l, t)
      ? l
      : Ta.current !== null
        ? ((e = Cr(e, l, a)), ft(e, t) || (Ze = !0), e)
        : (gl & 42) === 0
          ? ((Ze = !0), (e.memoizedState = l))
          : ((e = nd()), (re.lanes |= e), (wl |= e), t)
  }
  function lf(e, t, l, a, n) {
    var u = Y.p
    Y.p = u !== 0 && 8 > u ? u : 8
    var r = j.T,
      s = {}
    ;(j.T = s), Br(e, !1, t, l)
    try {
      var p = n(),
        T = j.S
      if (
        (T !== null && T(s, p), p !== null && typeof p == 'object' && typeof p.then == 'function')
      ) {
        var M = Sy(p, a)
        An(e, t, M, pt(e))
      } else An(e, t, a, pt(e))
    } catch (C) {
      An(e, t, { then: function () {}, status: 'rejected', reason: C }, pt())
    } finally {
      ;(Y.p = u), (j.T = r)
    }
  }
  function zy() {}
  function Ur(e, t, l, a) {
    if (e.tag !== 5) throw Error(c(476))
    var n = af(e).queue
    lf(
      e,
      n,
      t,
      B,
      l === null
        ? zy
        : function () {
            return nf(e), l(a)
          }
    )
  }
  function af(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: B,
      },
      next: null,
    }
    var l = {}
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function nf(e) {
    var t = af(e).next.queue
    An(e, t, {}, pt())
  }
  function Hr() {
    return Ie(kn)
  }
  function uf() {
    return Le().memoizedState
  }
  function rf() {
    return Le().memoizedState
  }
  function Ry(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = pt()
          e = pl(l)
          var a = vl(t, e, l)
          a !== null && (vt(a, t, l), gn(a, t, l)), (t = { cache: dr() }), (e.payload = t)
          return
      }
      t = t.return
    }
  }
  function jy(e, t, l) {
    var a = pt()
    ;(l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      Hu(e) ? of(t, l) : ((l = lr(e, t, l, a)), l !== null && (vt(l, e, a), sf(l, t, a)))
  }
  function cf(e, t, l) {
    var a = pt()
    An(e, t, l, a)
  }
  function An(e, t, l, a) {
    var n = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }
    if (Hu(e)) of(t, n)
    else {
      var u = e.alternate
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var r = t.lastRenderedState,
            s = u(r, l)
          if (((n.hasEagerState = !0), (n.eagerState = s), ft(s, r)))
            return bu(e, t, n, 0), je === null && gu(), !1
        } catch {
        } finally {
        }
      if (((l = lr(e, t, n, a)), l !== null)) return vt(l, e, a), sf(l, t, a), !0
    }
    return !1
  }
  function Br(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: yc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hu(e))
    ) {
      if (t) throw Error(c(479))
    } else (t = lr(e, l, a, 2)), t !== null && vt(t, e, 2)
  }
  function Hu(e) {
    var t = e.alternate
    return e === re || (t !== null && t === re)
  }
  function of(e, t) {
    Aa = Mu = !0
    var l = e.pending
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t)
  }
  function sf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), vo(e, l)
    }
  }
  var Bu = {
      readContext: Ie,
      use: _u,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useLayoutEffect: Be,
      useInsertionEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useSyncExternalStore: Be,
      useId: Be,
      useHostTransitionStatus: Be,
      useFormState: Be,
      useActionState: Be,
      useOptimistic: Be,
      useMemoCache: Be,
      useCacheRefresh: Be,
    },
    ff = {
      readContext: Ie,
      use: _u,
      useCallback: function (e, t) {
        return (ut().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: Ie,
      useEffect: Ks,
      useImperativeHandle: function (e, t, l) {
        ;(l = l != null ? l.concat([e]) : null), Uu(4194308, 4, Fs.bind(null, t, e), l)
      },
      useLayoutEffect: function (e, t) {
        return Uu(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        Uu(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var l = ut()
        t = t === void 0 ? null : t
        var a = e()
        if (Wl) {
          fl(!0)
          try {
            e()
          } finally {
            fl(!1)
          }
        }
        return (l.memoizedState = [a, t]), a
      },
      useReducer: function (e, t, l) {
        var a = ut()
        if (l !== void 0) {
          var n = l(t)
          if (Wl) {
            fl(!0)
            try {
              l(t)
            } finally {
              fl(!1)
            }
          }
        } else n = t
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = jy.bind(null, re, e)),
          [a.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = ut()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: function (e) {
        e = Or(e)
        var t = e.queue,
          l = cf.bind(null, re, t)
        return (t.dispatch = l), [e.memoizedState, l]
      },
      useDebugValue: Dr,
      useDeferredValue: function (e, t) {
        var l = ut()
        return Cr(l, e, t)
      },
      useTransition: function () {
        var e = Or(!1)
        return (e = lf.bind(null, re, e.queue, !0, !1)), (ut().memoizedState = e), [!1, e]
      },
      useSyncExternalStore: function (e, t, l) {
        var a = re,
          n = ut()
        if (ve) {
          if (l === void 0) throw Error(c(407))
          l = l()
        } else {
          if (((l = t()), je === null)) throw Error(c(349))
          ;(he & 124) !== 0 || Os(a, t, l)
        }
        n.memoizedState = l
        var u = { value: l, getSnapshot: t }
        return (
          (n.queue = u),
          Ks(Ds.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          za(9, Cu(), _s.bind(null, a, u, l, t), null),
          l
        )
      },
      useId: function () {
        var e = ut(),
          t = je.identifierPrefix
        if (ve) {
          var l = Kt,
            a = Zt
          ;(l = (a & ~(1 << (32 - st(a) - 1))).toString(32) + l),
            (t = '«' + t + 'R' + l),
            (l = Ou++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '»')
        } else (l = Ey++), (t = '«' + t + 'r' + l.toString(32) + '»')
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: Hr,
      useFormState: ks,
      useActionState: ks,
      useOptimistic: function (e) {
        var t = ut()
        t.memoizedState = t.baseState = e
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return (t.queue = l), (t = Br.bind(null, re, !0, l)), (l.dispatch = t), [e, t]
      },
      useMemoCache: jr,
      useCacheRefresh: function () {
        return (ut().memoizedState = Ry.bind(null, re))
      },
    },
    df = {
      readContext: Ie,
      use: _u,
      useCallback: Is,
      useContext: Ie,
      useEffect: Js,
      useImperativeHandle: Ps,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: ef,
      useReducer: Du,
      useRef: Zs,
      useState: function () {
        return Du(Wt)
      },
      useDebugValue: Dr,
      useDeferredValue: function (e, t) {
        var l = Le()
        return tf(l, Te.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Du(Wt)[0],
          t = Le().memoizedState
        return [typeof e == 'boolean' ? e : En(e), t]
      },
      useSyncExternalStore: Ms,
      useId: uf,
      useHostTransitionStatus: Hr,
      useFormState: Xs,
      useActionState: Xs,
      useOptimistic: function (e, t) {
        var l = Le()
        return Hs(l, Te, e, t)
      },
      useMemoCache: jr,
      useCacheRefresh: rf,
    },
    Ny = {
      readContext: Ie,
      use: _u,
      useCallback: Is,
      useContext: Ie,
      useEffect: Js,
      useImperativeHandle: Ps,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: ef,
      useReducer: Mr,
      useRef: Zs,
      useState: function () {
        return Mr(Wt)
      },
      useDebugValue: Dr,
      useDeferredValue: function (e, t) {
        var l = Le()
        return Te === null ? Cr(l, e, t) : tf(l, Te.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Mr(Wt)[0],
          t = Le().memoizedState
        return [typeof e == 'boolean' ? e : En(e), t]
      },
      useSyncExternalStore: Ms,
      useId: uf,
      useHostTransitionStatus: Hr,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function (e, t) {
        var l = Le()
        return Te !== null ? Hs(l, Te, e, t) : ((l.baseState = e), [e, l.queue.dispatch])
      },
      useMemoCache: jr,
      useCacheRefresh: rf,
    },
    Ra = null,
    wn = 0
  function qu(e) {
    var t = wn
    return (wn += 1), Ra === null && (Ra = []), Es(Ra, e, t)
  }
  function zn(e, t) {
    ;(t = t.props.ref), (e.ref = t !== void 0 ? t : null)
  }
  function Gu(e, t) {
    throw t.$$typeof === H
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ))
  }
  function mf(e) {
    var t = e._init
    return t(e._payload)
  }
  function hf(e) {
    function t(S, b) {
      if (e) {
        var E = S.deletions
        E === null ? ((S.deletions = [b]), (S.flags |= 16)) : E.push(b)
      }
    }
    function l(S, b) {
      if (!e) return null
      for (; b !== null; ) t(S, b), (b = b.sibling)
      return null
    }
    function a(S) {
      for (var b = new Map(); S !== null; )
        S.key !== null ? b.set(S.key, S) : b.set(S.index, S), (S = S.sibling)
      return b
    }
    function n(S, b) {
      return (S = Vt(S, b)), (S.index = 0), (S.sibling = null), S
    }
    function u(S, b, E) {
      return (
        (S.index = E),
        e
          ? ((E = S.alternate),
            E !== null
              ? ((E = E.index), E < b ? ((S.flags |= 67108866), b) : E)
              : ((S.flags |= 67108866), b))
          : ((S.flags |= 1048576), b)
      )
    }
    function r(S) {
      return e && S.alternate === null && (S.flags |= 67108866), S
    }
    function s(S, b, E, _) {
      return b === null || b.tag !== 6
        ? ((b = nr(E, S.mode, _)), (b.return = S), b)
        : ((b = n(b, E)), (b.return = S), b)
    }
    function p(S, b, E, _) {
      var J = E.type
      return J === D
        ? M(S, b, E.props.children, _, E.key)
        : b !== null &&
            (b.elementType === J ||
              (typeof J == 'object' && J !== null && J.$$typeof === K && mf(J) === b.type))
          ? ((b = n(b, E.props)), zn(b, E), (b.return = S), b)
          : ((b = Su(E.type, E.key, E.props, null, S.mode, _)), zn(b, E), (b.return = S), b)
    }
    function T(S, b, E, _) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== E.containerInfo ||
        b.stateNode.implementation !== E.implementation
        ? ((b = ur(E, S.mode, _)), (b.return = S), b)
        : ((b = n(b, E.children || [])), (b.return = S), b)
    }
    function M(S, b, E, _, J) {
      return b === null || b.tag !== 7
        ? ((b = kl(E, S.mode, _, J)), (b.return = S), b)
        : ((b = n(b, E)), (b.return = S), b)
    }
    function C(S, b, E) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number' || typeof b == 'bigint')
        return (b = nr('' + b, S.mode, E)), (b.return = S), b
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case O:
            return (E = Su(b.type, b.key, b.props, null, S.mode, E)), zn(E, b), (E.return = S), E
          case k:
            return (b = ur(b, S.mode, E)), (b.return = S), b
          case K:
            var _ = b._init
            return (b = _(b._payload)), C(S, b, E)
        }
        if (Oe(b) || He(b)) return (b = kl(b, S.mode, E, null)), (b.return = S), b
        if (typeof b.then == 'function') return C(S, qu(b), E)
        if (b.$$typeof === ee) return C(S, wu(S, b), E)
        Gu(S, b)
      }
      return null
    }
    function A(S, b, E, _) {
      var J = b !== null ? b.key : null
      if ((typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint')
        return J !== null ? null : s(S, b, '' + E, _)
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case O:
            return E.key === J ? p(S, b, E, _) : null
          case k:
            return E.key === J ? T(S, b, E, _) : null
          case K:
            return (J = E._init), (E = J(E._payload)), A(S, b, E, _)
        }
        if (Oe(E) || He(E)) return J !== null ? null : M(S, b, E, _, null)
        if (typeof E.then == 'function') return A(S, b, qu(E), _)
        if (E.$$typeof === ee) return A(S, b, wu(S, E), _)
        Gu(S, E)
      }
      return null
    }
    function z(S, b, E, _, J) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint')
        return (S = S.get(E) || null), s(b, S, '' + _, J)
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case O:
            return (S = S.get(_.key === null ? E : _.key) || null), p(b, S, _, J)
          case k:
            return (S = S.get(_.key === null ? E : _.key) || null), T(b, S, _, J)
          case K:
            var oe = _._init
            return (_ = oe(_._payload)), z(S, b, E, _, J)
        }
        if (Oe(_) || He(_)) return (S = S.get(E) || null), M(b, S, _, J, null)
        if (typeof _.then == 'function') return z(S, b, E, qu(_), J)
        if (_.$$typeof === ee) return z(S, b, E, wu(b, _), J)
        Gu(b, _)
      }
      return null
    }
    function ae(S, b, E, _) {
      for (
        var J = null, oe = null, F = b, le = (b = 0), Je = null;
        F !== null && le < E.length;
        le++
      ) {
        F.index > le ? ((Je = F), (F = null)) : (Je = F.sibling)
        var pe = A(S, F, E[le], _)
        if (pe === null) {
          F === null && (F = Je)
          break
        }
        e && F && pe.alternate === null && t(S, F),
          (b = u(pe, b, le)),
          oe === null ? (J = pe) : (oe.sibling = pe),
          (oe = pe),
          (F = Je)
      }
      if (le === E.length) return l(S, F), ve && Ql(S, le), J
      if (F === null) {
        for (; le < E.length; le++)
          (F = C(S, E[le], _)),
            F !== null && ((b = u(F, b, le)), oe === null ? (J = F) : (oe.sibling = F), (oe = F))
        return ve && Ql(S, le), J
      }
      for (F = a(F); le < E.length; le++)
        (Je = z(F, S, le, E[le], _)),
          Je !== null &&
            (e && Je.alternate !== null && F.delete(Je.key === null ? le : Je.key),
            (b = u(Je, b, le)),
            oe === null ? (J = Je) : (oe.sibling = Je),
            (oe = Je))
      return (
        e &&
          F.forEach(function (Cl) {
            return t(S, Cl)
          }),
        ve && Ql(S, le),
        J
      )
    }
    function te(S, b, E, _) {
      if (E == null) throw Error(c(151))
      for (
        var J = null, oe = null, F = b, le = (b = 0), Je = null, pe = E.next();
        F !== null && !pe.done;
        le++, pe = E.next()
      ) {
        F.index > le ? ((Je = F), (F = null)) : (Je = F.sibling)
        var Cl = A(S, F, pe.value, _)
        if (Cl === null) {
          F === null && (F = Je)
          break
        }
        e && F && Cl.alternate === null && t(S, F),
          (b = u(Cl, b, le)),
          oe === null ? (J = Cl) : (oe.sibling = Cl),
          (oe = Cl),
          (F = Je)
      }
      if (pe.done) return l(S, F), ve && Ql(S, le), J
      if (F === null) {
        for (; !pe.done; le++, pe = E.next())
          (pe = C(S, pe.value, _)),
            pe !== null &&
              ((b = u(pe, b, le)), oe === null ? (J = pe) : (oe.sibling = pe), (oe = pe))
        return ve && Ql(S, le), J
      }
      for (F = a(F); !pe.done; le++, pe = E.next())
        (pe = z(F, S, le, pe.value, _)),
          pe !== null &&
            (e && pe.alternate !== null && F.delete(pe.key === null ? le : pe.key),
            (b = u(pe, b, le)),
            oe === null ? (J = pe) : (oe.sibling = pe),
            (oe = pe))
      return (
        e &&
          F.forEach(function (Mp) {
            return t(S, Mp)
          }),
        ve && Ql(S, le),
        J
      )
    }
    function we(S, b, E, _) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === D &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case O:
            e: {
              for (var J = E.key; b !== null; ) {
                if (b.key === J) {
                  if (((J = E.type), J === D)) {
                    if (b.tag === 7) {
                      l(S, b.sibling), (_ = n(b, E.props.children)), (_.return = S), (S = _)
                      break e
                    }
                  } else if (
                    b.elementType === J ||
                    (typeof J == 'object' && J !== null && J.$$typeof === K && mf(J) === b.type)
                  ) {
                    l(S, b.sibling), (_ = n(b, E.props)), zn(_, E), (_.return = S), (S = _)
                    break e
                  }
                  l(S, b)
                  break
                } else t(S, b)
                b = b.sibling
              }
              E.type === D
                ? ((_ = kl(E.props.children, S.mode, _, E.key)), (_.return = S), (S = _))
                : ((_ = Su(E.type, E.key, E.props, null, S.mode, _)),
                  zn(_, E),
                  (_.return = S),
                  (S = _))
            }
            return r(S)
          case k:
            e: {
              for (J = E.key; b !== null; ) {
                if (b.key === J)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === E.containerInfo &&
                    b.stateNode.implementation === E.implementation
                  ) {
                    l(S, b.sibling), (_ = n(b, E.children || [])), (_.return = S), (S = _)
                    break e
                  } else {
                    l(S, b)
                    break
                  }
                else t(S, b)
                b = b.sibling
              }
              ;(_ = ur(E, S.mode, _)), (_.return = S), (S = _)
            }
            return r(S)
          case K:
            return (J = E._init), (E = J(E._payload)), we(S, b, E, _)
        }
        if (Oe(E)) return ae(S, b, E, _)
        if (He(E)) {
          if (((J = He(E)), typeof J != 'function')) throw Error(c(150))
          return (E = J.call(E)), te(S, b, E, _)
        }
        if (typeof E.then == 'function') return we(S, b, qu(E), _)
        if (E.$$typeof === ee) return we(S, b, wu(S, E), _)
        Gu(S, E)
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint'
        ? ((E = '' + E),
          b !== null && b.tag === 6
            ? (l(S, b.sibling), (_ = n(b, E)), (_.return = S), (S = _))
            : (l(S, b), (_ = nr(E, S.mode, _)), (_.return = S), (S = _)),
          r(S))
        : l(S, b)
    }
    return function (S, b, E, _) {
      try {
        wn = 0
        var J = we(S, b, E, _)
        return (Ra = null), J
      } catch (F) {
        if (F === pn || F === Ru) throw F
        var oe = dt(29, F, null, S.mode)
        return (oe.lanes = _), (oe.return = S), oe
      } finally {
      }
    }
  }
  var ja = hf(!0),
    yf = hf(!1),
    wt = U(null),
    Ht = null
  function bl(e) {
    var t = e.alternate
    q(ke, ke.current & 1),
      q(wt, e),
      Ht === null && (t === null || Ta.current !== null || t.memoizedState !== null) && (Ht = e)
  }
  function pf(e) {
    if (e.tag === 22) {
      if ((q(ke, ke.current), q(wt, e), Ht === null)) {
        var t = e.alternate
        t !== null && t.memoizedState !== null && (Ht = e)
      }
    } else xl()
  }
  function xl() {
    q(ke, ke.current), q(wt, wt.current)
  }
  function Ft(e) {
    Q(wt), Ht === e && (Ht = null), Q(ke)
  }
  var ke = U(0)
  function Lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || Rc(l))) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  function qr(e, t, l, a) {
    ;(t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : w({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l)
  }
  var Gr = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals
      var a = pt(),
        n = pl(a)
      ;(n.payload = t),
        l != null && (n.callback = l),
        (t = vl(e, n, a)),
        t !== null && (vt(t, e, a), gn(t, e, a))
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals
      var a = pt(),
        n = pl(a)
      ;(n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = vl(e, n, a)),
        t !== null && (vt(t, e, a), gn(t, e, a))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var l = pt(),
        a = pl(l)
      ;(a.tag = 2),
        t != null && (a.callback = t),
        (t = vl(e, a, l)),
        t !== null && (vt(t, e, l), gn(t, e, l))
    },
  }
  function vf(e, t, l, a, n, u, r) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, r)
        : t.prototype && t.prototype.isPureReactComponent
          ? !cn(l, a) || !cn(n, u)
          : !0
    )
  }
  function gf(e, t, l, a) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Gr.enqueueReplaceState(t, t.state, null)
  }
  function Fl(e, t) {
    var l = t
    if ('ref' in t) {
      l = {}
      for (var a in t) a !== 'ref' && (l[a] = t[a])
    }
    if ((e = e.defaultProps)) {
      l === t && (l = w({}, l))
      for (var n in e) l[n] === void 0 && (l[n] = e[n])
    }
    return l
  }
  var Yu =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            })
            if (!window.dispatchEvent(t)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e)
            return
          }
          console.error(e)
        }
  function bf(e) {
    Yu(e)
  }
  function xf(e) {
    console.error(e)
  }
  function Sf(e) {
    Yu(e)
  }
  function ku(e, t) {
    try {
      var l = e.onUncaughtError
      l(t.value, { componentStack: t.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function Ef(e, t, l) {
    try {
      var a = e.onCaughtError
      a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function Lr(e, t, l) {
    return (
      (l = pl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        ku(e, t)
      }),
      l
    )
  }
  function Tf(e) {
    return (e = pl(e)), (e.tag = 3), e
  }
  function Af(e, t, l, a) {
    var n = l.type.getDerivedStateFromError
    if (typeof n == 'function') {
      var u = a.value
      ;(e.payload = function () {
        return n(u)
      }),
        (e.callback = function () {
          Ef(t, l, a)
        })
    }
    var r = l.stateNode
    r !== null &&
      typeof r.componentDidCatch == 'function' &&
      (e.callback = function () {
        Ef(t, l, a), typeof n != 'function' && (zl === null ? (zl = new Set([this])) : zl.add(this))
        var s = a.stack
        this.componentDidCatch(a.value, { componentStack: s !== null ? s : '' })
      })
  }
  function My(e, t, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = l.alternate), t !== null && mn(t, l, n, !0), (l = wt.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              Ht === null ? sc() : l.alternate === null && Ue === 0 && (Ue = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === yr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  dc(e, a, n)),
              !1
            )
          case 22:
            return (
              (l.flags |= 65536),
              a === yr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  dc(e, a, n)),
              !1
            )
        }
        throw Error(c(435, l.tag))
      }
      return dc(e, a, n), sc(), !1
    }
    if (ve)
      return (
        (t = wt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== cr && ((e = Error(c(422), { cause: a })), dn(St(e, l))))
          : (a !== cr && ((t = Error(c(423), { cause: a })), dn(St(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = St(a, l)),
            (n = Lr(e.stateNode, a, n)),
            gr(e, n),
            Ue !== 4 && (Ue = 2)),
        !1
      )
    var u = Error(c(520), { cause: a })
    if (((u = St(u, l)), Dn === null ? (Dn = [u]) : Dn.push(u), Ue !== 4 && (Ue = 2), t === null))
      return !0
    ;(a = St(a, l)), (l = t)
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Lr(l.stateNode, a, e)),
            gr(l, e),
            !1
          )
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (zl === null || !zl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Tf(n)),
              Af(n, e, l, a),
              gr(l, n),
              !1
            )
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var wf = Error(c(461)),
    Ze = !1
  function $e(e, t, l, a) {
    t.child = e === null ? yf(t, null, l, a) : ja(t, e.child, l, a)
  }
  function zf(e, t, l, a, n) {
    l = l.render
    var u = t.ref
    if ('ref' in a) {
      var r = {}
      for (var s in a) s !== 'ref' && (r[s] = a[s])
    } else r = a
    return (
      Jl(t),
      (a = Tr(e, t, l, r, u, n)),
      (s = Ar()),
      e !== null && !Ze
        ? (wr(e, t, n), Pt(e, t, n))
        : (ve && s && ir(t), (t.flags |= 1), $e(e, t, a, n), t.child)
    )
  }
  function Rf(e, t, l, a, n) {
    if (e === null) {
      var u = l.type
      return typeof u == 'function' && !ar(u) && u.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = u), jf(e, t, u, a, n))
        : ((e = Su(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    if (((u = e.child), !Jr(e, n))) {
      var r = u.memoizedProps
      if (((l = l.compare), (l = l !== null ? l : cn), l(r, a) && e.ref === t.ref))
        return Pt(e, t, n)
    }
    return (t.flags |= 1), (e = Vt(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e)
  }
  function jf(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps
      if (cn(u, a) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = a = u), Jr(e, n))) (e.flags & 131072) !== 0 && (Ze = !0)
        else return (t.lanes = e.lanes), Pt(e, t, n)
    }
    return Yr(e, t, l, a, n)
  }
  function Nf(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      u = e !== null ? e.memoizedState : null
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling)
          t.childLanes = u & ~a
        } else (t.childLanes = 0), (t.child = null)
        return Mf(e, t, a, l)
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && zu(t, u !== null ? u.cachePool : null),
          u !== null ? Rs(t, u) : xr(),
          pf(t)
      else
        return (t.lanes = t.childLanes = 536870912), Mf(e, t, u !== null ? u.baseLanes | l : l, l)
    } else
      u !== null
        ? (zu(t, u.cachePool), Rs(t, u), xl(), (t.memoizedState = null))
        : (e !== null && zu(t, null), xr(), xl())
    return $e(e, t, n, l), t.child
  }
  function Mf(e, t, l, a) {
    var n = hr()
    return (
      (n = n === null ? null : { parent: Ye._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && zu(t, null),
      xr(),
      pf(t),
      e !== null && mn(e, t, a, !0),
      null
    )
  }
  function Xu(e, t) {
    var l = t.ref
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(c(284))
      ;(e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }
  function Yr(e, t, l, a, n) {
    return (
      Jl(t),
      (l = Tr(e, t, l, a, void 0, n)),
      (a = Ar()),
      e !== null && !Ze
        ? (wr(e, t, n), Pt(e, t, n))
        : (ve && a && ir(t), (t.flags |= 1), $e(e, t, l, n), t.child)
    )
  }
  function Of(e, t, l, a, n, u) {
    return (
      Jl(t),
      (t.updateQueue = null),
      (l = Ns(t, a, l, n)),
      js(e),
      (a = Ar()),
      e !== null && !Ze
        ? (wr(e, t, u), Pt(e, t, u))
        : (ve && a && ir(t), (t.flags |= 1), $e(e, t, l, u), t.child)
    )
  }
  function _f(e, t, l, a, n) {
    if ((Jl(t), t.stateNode === null)) {
      var u = ga,
        r = l.contextType
      typeof r == 'object' && r !== null && (u = Ie(r)),
        (u = new l(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Gr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        pr(t),
        (r = l.contextType),
        (u.context = typeof r == 'object' && r !== null ? Ie(r) : ga),
        (u.state = t.memoizedState),
        (r = l.getDerivedStateFromProps),
        typeof r == 'function' && (qr(t, l, r, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((r = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          r !== u.state && Gr.enqueueReplaceState(u, u.state, null),
          xn(t, a, u, n),
          bn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0)
    } else if (e === null) {
      u = t.stateNode
      var s = t.memoizedProps,
        p = Fl(l, s)
      u.props = p
      var T = u.context,
        M = l.contextType
      ;(r = ga), typeof M == 'object' && M !== null && (r = Ie(M))
      var C = l.getDerivedStateFromProps
      ;(M = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = t.pendingProps !== s),
        M ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || T !== r) && gf(t, u, a, r)),
        (yl = !1)
      var A = t.memoizedState
      ;(u.state = A),
        xn(t, a, u, n),
        bn(),
        (T = t.memoizedState),
        s || A !== T || yl
          ? (typeof C == 'function' && (qr(t, l, C, a), (T = t.memoizedState)),
            (p = yl || vf(t, l, p, a, A, T, r))
              ? (M ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = T)),
            (u.props = a),
            (u.state = T),
            (u.context = r),
            (a = p))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1))
    } else {
      ;(u = t.stateNode),
        vr(e, t),
        (r = t.memoizedProps),
        (M = Fl(l, r)),
        (u.props = M),
        (C = t.pendingProps),
        (A = u.context),
        (T = l.contextType),
        (p = ga),
        typeof T == 'object' && T !== null && (p = Ie(T)),
        (s = l.getDerivedStateFromProps),
        (T = typeof s == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((r !== C || A !== p) && gf(t, u, a, p)),
        (yl = !1),
        (A = t.memoizedState),
        (u.state = A),
        xn(t, a, u, n),
        bn()
      var z = t.memoizedState
      r !== C || A !== z || yl || (e !== null && e.dependencies !== null && Au(e.dependencies))
        ? (typeof s == 'function' && (qr(t, l, s, a), (z = t.memoizedState)),
          (M =
            yl ||
            vf(t, l, M, a, A, z, p) ||
            (e !== null && e.dependencies !== null && Au(e.dependencies)))
            ? (T ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, z, p),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, z, p)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (r === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (r === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = z)),
          (u.props = a),
          (u.state = z),
          (u.context = p),
          (a = M))
        : (typeof u.componentDidUpdate != 'function' ||
            (r === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (r === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1))
    }
    return (
      (u = a),
      Xu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ja(t, e.child, null, n)), (t.child = ja(t, null, l, n)))
            : $e(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Pt(e, t, n)),
      e
    )
  }
  function Df(e, t, l, a) {
    return fn(), (t.flags |= 256), $e(e, t, l, a), t.child
  }
  var kr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function Xr(e) {
    return { baseLanes: e, cachePool: bs() }
  }
  function Qr(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= zt), e
  }
  function Cf(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      r
    if (
      ((r = u) || (r = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0),
      r && ((n = !0), (t.flags &= -129)),
      (r = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ve) {
        if ((n ? bl(t) : xl(), ve)) {
          var s = Ce,
            p
          if ((p = s)) {
            e: {
              for (p = s, s = Ut; p.nodeType !== 8; ) {
                if (!s) {
                  s = null
                  break e
                }
                if (((p = Ot(p.nextSibling)), p === null)) {
                  s = null
                  break e
                }
              }
              s = p
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: Xl !== null ? { id: Zt, overflow: Kt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (p = dt(18, null, null, 0)),
                (p.stateNode = s),
                (p.return = t),
                (t.child = p),
                (lt = t),
                (Ce = null),
                (p = !0))
              : (p = !1)
          }
          p || Zl(t)
        }
        if (((s = t.memoizedState), s !== null && ((s = s.dehydrated), s !== null)))
          return Rc(s) ? (t.lanes = 32) : (t.lanes = 536870912), null
        Ft(t)
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (xl(),
            (n = t.mode),
            (s = Qu({ mode: 'hidden', children: s }, n)),
            (a = kl(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (n = t.child),
            (n.memoizedState = Xr(l)),
            (n.childLanes = Qr(e, r, l)),
            (t.memoizedState = kr),
            a)
          : (bl(t), Vr(t, s))
      )
    }
    if (((p = e.memoizedState), p !== null && ((s = p.dehydrated), s !== null))) {
      if (u)
        t.flags & 256
          ? (bl(t), (t.flags &= -257), (t = Zr(e, t, l)))
          : t.memoizedState !== null
            ? (xl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (xl(),
              (n = a.fallback),
              (s = t.mode),
              (a = Qu({ mode: 'visible', children: a.children }, s)),
              (n = kl(n, s, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              ja(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Xr(l)),
              (a.childLanes = Qr(e, r, l)),
              (t.memoizedState = kr),
              (t = n))
      else if ((bl(t), Rc(s))) {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var T = r.dgst
        ;(r = T),
          (a = Error(c(419))),
          (a.stack = ''),
          (a.digest = r),
          dn({ value: a, source: null, stack: null }),
          (t = Zr(e, t, l))
      } else if ((Ze || mn(e, t, l, !1), (r = (l & e.childLanes) !== 0), Ze || r)) {
        if (
          ((r = je),
          r !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : ji(a)),
            (a = (a & (r.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== p.retryLane))
        )
          throw ((p.retryLane = a), va(e, a), vt(r, e, a), wf)
        s.data === '$?' || sc(), (t = Zr(e, t, l))
      } else
        s.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = p.treeContext),
            (Ce = Ot(s.nextSibling)),
            (lt = t),
            (ve = !0),
            (Vl = null),
            (Ut = !1),
            e !== null &&
              ((Tt[At++] = Zt),
              (Tt[At++] = Kt),
              (Tt[At++] = Xl),
              (Zt = e.id),
              (Kt = e.overflow),
              (Xl = t)),
            (t = Vr(t, a.children)),
            (t.flags |= 4096))
      return t
    }
    return n
      ? (xl(),
        (n = a.fallback),
        (s = t.mode),
        (p = e.child),
        (T = p.sibling),
        (a = Vt(p, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = p.subtreeFlags & 65011712),
        T !== null ? (n = Vt(T, n)) : ((n = kl(n, s, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = Xr(l))
          : ((p = s.cachePool),
            p !== null
              ? ((T = Ye._currentValue), (p = p.parent !== T ? { parent: T, pool: T } : p))
              : (p = bs()),
            (s = { baseLanes: s.baseLanes | l, cachePool: p })),
        (n.memoizedState = s),
        (n.childLanes = Qr(e, r, l)),
        (t.memoizedState = kr),
        a)
      : (bl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Vt(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l)
  }
  function Vr(e, t) {
    return (t = Qu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t)
  }
  function Qu(e, t) {
    return (
      (e = dt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    )
  }
  function Zr(e, t, l) {
    return (
      ja(t, e.child, null, l),
      (e = Vr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function Uf(e, t, l) {
    e.lanes |= t
    var a = e.alternate
    a !== null && (a.lanes |= t), sr(e.return, t, l)
  }
  function Kr(e, t, l, a, n) {
    var u = e.memoizedState
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n))
  }
  function Hf(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail
    if (($e(e, t, a.children, l), (a = ke.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Uf(e, l, t)
          else if (e.tag === 19) Uf(e, l, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      a &= 1
    }
    switch ((q(ke, a), n)) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate), e !== null && Lu(e) === null && (n = l), (l = l.sibling)
        ;(l = n),
          l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)),
          Kr(t, !1, n, l, u)
        break
      case 'backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Lu(e) === null)) {
            t.child = n
            break
          }
          ;(e = n.sibling), (n.sibling = l), (l = n), (n = e)
        }
        Kr(t, !0, l, null, u)
        break
      case 'together':
        Kr(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function Pt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (wl |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((mn(e, t, l, !1), (l & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(c(153))
    if (t.child !== null) {
      for (e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        (e = e.sibling), (l = l.sibling = Vt(e, e.pendingProps)), (l.return = t)
      l.sibling = null
    }
    return t.child
  }
  function Jr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Au(e)))
  }
  function Oy(e, t, l) {
    switch (t.tag) {
      case 3:
        ze(t, t.stateNode.containerInfo), hl(t, Ye, e.memoizedState.cache), fn()
        break
      case 27:
      case 5:
        cl(t)
        break
      case 4:
        ze(t, t.stateNode.containerInfo)
        break
      case 10:
        hl(t, t.type, t.memoizedProps.value)
        break
      case 13:
        var a = t.memoizedState
        if (a !== null)
          return a.dehydrated !== null
            ? (bl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Cf(e, t, l)
              : (bl(t), (e = Pt(e, t, l)), e !== null ? e.sibling : null)
        bl(t)
        break
      case 19:
        var n = (e.flags & 128) !== 0
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (mn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Hf(e, t, l)
          t.flags |= 128
        }
        if (
          ((n = t.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          q(ke, ke.current),
          a)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), Nf(e, t, l)
      case 24:
        hl(t, Ye, e.memoizedState.cache)
    }
    return Pt(e, t, l)
  }
  function Bf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ze = !0
      else {
        if (!Jr(e, l) && (t.flags & 128) === 0) return (Ze = !1), Oy(e, t, l)
        Ze = (e.flags & 131072) !== 0
      }
    else (Ze = !1), ve && (t.flags & 1048576) !== 0 && ds(t, Tu, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps
          var a = t.elementType,
            n = a._init
          if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
            ar(a)
              ? ((e = Fl(a, e)), (t.tag = 1), (t = _f(null, t, a, e, l)))
              : ((t.tag = 0), (t = Yr(null, t, a, e, l)))
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === ie)) {
                ;(t.tag = 11), (t = zf(null, t, a, e, l))
                break e
              } else if (n === Ee) {
                ;(t.tag = 14), (t = Rf(null, t, a, e, l))
                break e
              }
            }
            throw ((t = jt(a) || a), Error(c(306, t, '')))
          }
        }
        return t
      case 0:
        return Yr(e, t, t.type, t.pendingProps, l)
      case 1:
        return (a = t.type), (n = Fl(a, t.pendingProps)), _f(e, t, a, n, l)
      case 3:
        e: {
          if ((ze(t, t.stateNode.containerInfo), e === null)) throw Error(c(387))
          a = t.pendingProps
          var u = t.memoizedState
          ;(n = u.element), vr(e, t), xn(t, a, null, l)
          var r = t.memoizedState
          if (
            ((a = r.cache),
            hl(t, Ye, a),
            a !== u.cache && fr(t, [Ye], l, !0),
            bn(),
            (a = r.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: r.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Df(e, t, a, l)
              break e
            } else if (a !== n) {
              ;(n = St(Error(c(424)), t)), dn(n), (t = Df(e, t, a, l))
              break e
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body
                  break
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e
              }
              for (
                Ce = Ot(e.firstChild),
                  lt = t,
                  ve = !0,
                  Vl = null,
                  Ut = !0,
                  l = yf(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling)
            }
          else {
            if ((fn(), a === n)) {
              t = Pt(e, t, l)
              break e
            }
            $e(e, t, a, l)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          Xu(e, t),
          e === null
            ? (l = Yd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ve ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ni(ne.current).createElement(l)),
                (a[Pe] = t),
                (a[at] = e),
                Fe(a, l, e),
                Ve(a),
                (t.stateNode = a))
            : (t.memoizedState = Yd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        )
      case 27:
        return (
          cl(t),
          e === null &&
            ve &&
            ((a = t.stateNode = qd(t.type, t.pendingProps, ne.current)),
            (lt = t),
            (Ut = !0),
            (n = Ce),
            Nl(t.type) ? ((jc = n), (Ce = Ot(a.firstChild))) : (Ce = n)),
          $e(e, t, t.pendingProps.children, l),
          Xu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            ve &&
            ((n = a = Ce) &&
              ((a = up(a, t.type, t.pendingProps, Ut)),
              a !== null
                ? ((t.stateNode = a), (lt = t), (Ce = Ot(a.firstChild)), (Ut = !1), (n = !0))
                : (n = !1)),
            n || Zl(t)),
          cl(t),
          (n = t.type),
          (u = t.pendingProps),
          (r = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ac(n, u) ? (a = null) : r !== null && Ac(n, r) && (t.flags |= 32),
          t.memoizedState !== null && ((n = Tr(e, t, Ty, null, null, l)), (kn._currentValue = n)),
          Xu(e, t),
          $e(e, t, a, l),
          t.child
        )
      case 6:
        return (
          e === null &&
            ve &&
            ((e = l = Ce) &&
              ((l = ip(l, t.pendingProps, Ut)),
              l !== null ? ((t.stateNode = l), (lt = t), (Ce = null), (e = !0)) : (e = !1)),
            e || Zl(t)),
          null
        )
      case 13:
        return Cf(e, t, l)
      case 4:
        return (
          ze(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ja(t, null, a, l)) : $e(e, t, a, l),
          t.child
        )
      case 11:
        return zf(e, t, t.type, t.pendingProps, l)
      case 7:
        return $e(e, t, t.pendingProps, l), t.child
      case 8:
        return $e(e, t, t.pendingProps.children, l), t.child
      case 12:
        return $e(e, t, t.pendingProps.children, l), t.child
      case 10:
        return (a = t.pendingProps), hl(t, t.type, a.value), $e(e, t, a.children, l), t.child
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Jl(t),
          (n = Ie(n)),
          (a = a(n)),
          (t.flags |= 1),
          $e(e, t, a, l),
          t.child
        )
      case 14:
        return Rf(e, t, t.type, t.pendingProps, l)
      case 15:
        return jf(e, t, t.type, t.pendingProps, l)
      case 19:
        return Hf(e, t, l)
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Qu(a, l)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l))
            : ((l = Vt(e.child, a)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l)),
          t
        )
      case 22:
        return Nf(e, t, l)
      case 24:
        return (
          Jl(t),
          (a = Ie(Ye)),
          e === null
            ? ((n = hr()),
              n === null &&
                ((n = je),
                (u = dr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              pr(t),
              hl(t, Ye, n))
            : ((e.lanes & l) !== 0 && (vr(e, t), xn(t, null, null, l), bn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                  hl(t, Ye, a))
                : ((a = u.cache), hl(t, Ye, a), a !== n.cache && fr(t, [Ye], l, !0))),
          $e(e, t, t.pendingProps.children, l),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(c(156, t.tag))
  }
  function It(e) {
    e.flags |= 4
  }
  function qf(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217
    else if (((e.flags |= 16777216), !Zd(t))) {
      if (
        ((t = wt.current),
        t !== null &&
          ((he & 4194048) === he
            ? Ht !== null
            : ((he & 62914560) !== he && (he & 536870912) === 0) || t !== Ht))
      )
        throw ((vn = yr), xs)
      e.flags |= 8192
    }
  }
  function Vu(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? yo() : 536870912), (e.lanes |= t), (_a |= t))
  }
  function Rn(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), (t = t.sibling)
          l === null ? (e.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = e.tail
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), (l = l.sibling)
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null)
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling)
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling)
    return (e.subtreeFlags |= a), (e.childLanes = l), t
  }
  function _y(e, t, l) {
    var a = t.pendingProps
    switch ((rr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null
      case 1:
        return _e(t), null
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          $t(Ye),
          ct(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (sn(t)
              ? It(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ys())),
          _e(t),
          null
        )
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (It(t), l !== null ? (_e(t), qf(t, l)) : (_e(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (It(t), _e(t), qf(t, l))
                : (_e(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && It(t), _e(t), (t.flags &= -16777217)),
          null
        )
      case 27:
        ol(t), (l = ne.current)
        var n = t.type
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && It(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166))
            return _e(t), null
          }
          ;(e = Z.current), sn(t) ? ms(t) : ((e = qd(n, a, l)), (t.stateNode = e), It(t))
        }
        return _e(t), null
      case 5:
        if ((ol(t), (l = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && It(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166))
            return _e(t), null
          }
          if (((e = Z.current), sn(t))) ms(t)
          else {
            switch (((n = ni(ne.current)), e)) {
              case 1:
                e = n.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    e = n.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                    break
                  case 'script':
                    ;(e = n.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild))
                    break
                  case 'select':
                    ;(e =
                      typeof a.is == 'string'
                        ? n.createElement('select', { is: a.is })
                        : n.createElement('select')),
                      a.multiple ? (e.multiple = !0) : a.size && (e.size = a.size)
                    break
                  default:
                    e =
                      typeof a.is == 'string'
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l)
                }
            }
            ;(e[Pe] = t), (e[at] = a)
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ;(n.child.return = n), (n = n.child)
                continue
              }
              if (n === t) break e
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e
                n = n.return
              }
              ;(n.sibling.return = n.return), (n = n.sibling)
            }
            t.stateNode = e
            e: switch ((Fe(e, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus
                break e
              case 'img':
                e = !0
                break e
              default:
                e = !1
            }
            e && It(t)
          }
        }
        return _e(t), (t.flags &= -16777217), null
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && It(t)
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(c(166))
          if (((e = ne.current), sn(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = lt), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps
              }
            ;(e[Pe] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Od(e.nodeValue, l)
              )),
              e || Zl(t)
          } else (e = ni(e).createTextNode(a)), (e[Pe] = t), (t.stateNode = e)
        }
        return _e(t), null
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = sn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318))
              if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(c(317))
              n[Pe] = t
            } else fn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4)
            _e(t), (n = !1)
          } else
            (n = ys()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (n = !0)
          if (!n) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null)
        }
        if ((Ft(t), (t.flags & 128) !== 0)) return (t.lanes = l), t
        if (((l = a !== null), (e = e !== null && e.memoizedState !== null), l)) {
          ;(a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool)
          var u = null
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)
        }
        return l !== e && l && (t.child.flags |= 8192), Vu(t, t.updateQueue), _e(t), null
      case 4:
        return ct(), e === null && bc(t.stateNode.containerInfo), _e(t), null
      case 10:
        return $t(t.type), _e(t), null
      case 19:
        if ((Q(ke), (n = t.memoizedState), n === null)) return _e(t), null
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) Rn(n, !1)
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Lu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Rn(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Vu(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    fs(l, e), (l = l.sibling)
                  return q(ke, (ke.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            n.tail !== null &&
              Ct() > Ju &&
              ((t.flags |= 128), (a = !0), Rn(n, !1), (t.lanes = 4194304))
          }
        else {
          if (!a)
            if (((e = Lu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Vu(t, e),
                Rn(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !u.alternate && !ve)
              )
                return _e(t), null
            } else
              2 * Ct() - n.renderingStartTime > Ju &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Rn(n, !1), (t.lanes = 4194304))
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last), e !== null ? (e.sibling = u) : (t.child = u), (n.last = u))
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = Ct()),
            (t.sibling = null),
            (e = ke.current),
            q(ke, a ? (e & 1) | 2 : e & 1),
            t)
          : (_e(t), null)
      case 22:
      case 23:
        return (
          Ft(t),
          Sr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          (l = t.updateQueue),
          l !== null && Vu(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && Q($l),
          null
        )
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          $t(Ye),
          _e(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(c(156, t.tag))
  }
  function Dy(e, t) {
    switch ((rr(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      case 3:
        return (
          $t(Ye),
          ct(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 26:
      case 27:
      case 5:
        return ol(t), null
      case 13:
        if ((Ft(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340))
          fn()
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      case 19:
        return Q(ke), null
      case 4:
        return ct(), null
      case 10:
        return $t(t.type), null
      case 22:
      case 23:
        return (
          Ft(t),
          Sr(),
          e !== null && Q($l),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return $t(Ye), null
      case 25:
        return null
      default:
        return null
    }
  }
  function Gf(e, t) {
    switch ((rr(t), t.tag)) {
      case 3:
        $t(Ye), ct()
        break
      case 26:
      case 27:
      case 5:
        ol(t)
        break
      case 4:
        ct()
        break
      case 13:
        Ft(t)
        break
      case 19:
        Q(ke)
        break
      case 10:
        $t(t.type)
        break
      case 22:
      case 23:
        Ft(t), Sr(), e !== null && Q($l)
        break
      case 24:
        $t(Ye)
    }
  }
  function jn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null
      if (a !== null) {
        var n = a.next
        l = n
        do {
          if ((l.tag & e) === e) {
            a = void 0
            var u = l.create,
              r = l.inst
            ;(a = u()), (r.destroy = a)
          }
          l = l.next
        } while (l !== n)
      }
    } catch (s) {
      Re(t, t.return, s)
    }
  }
  function Sl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null
      if (n !== null) {
        var u = n.next
        a = u
        do {
          if ((a.tag & e) === e) {
            var r = a.inst,
              s = r.destroy
            if (s !== void 0) {
              ;(r.destroy = void 0), (n = t)
              var p = l,
                T = s
              try {
                T()
              } catch (M) {
                Re(n, p, M)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (M) {
      Re(t, t.return, M)
    }
  }
  function Lf(e) {
    var t = e.updateQueue
    if (t !== null) {
      var l = e.stateNode
      try {
        zs(t, l)
      } catch (a) {
        Re(e, e.return, a)
      }
    }
  }
  function Yf(e, t, l) {
    ;(l.props = Fl(e.type, e.memoizedProps)), (l.state = e.memoizedState)
    try {
      l.componentWillUnmount()
    } catch (a) {
      Re(e, t, a)
    }
  }
  function Nn(e, t) {
    try {
      var l = e.ref
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode
            break
          case 30:
            a = e.stateNode
            break
          default:
            a = e.stateNode
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a)
      }
    } catch (n) {
      Re(e, t, n)
    }
  }
  function Bt(e, t) {
    var l = e.ref,
      a = e.refCleanup
    if (l !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (n) {
          Re(e, t, n)
        } finally {
          ;(e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null)
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (n) {
          Re(e, t, n)
        }
      else l.current = null
  }
  function kf(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus()
          break e
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
      }
    } catch (n) {
      Re(e, e.return, n)
    }
  }
  function $r(e, t, l) {
    try {
      var a = e.stateNode
      ep(a, e.type, l, t), (a[at] = t)
    } catch (n) {
      Re(e, e.return, n)
    }
  }
  function Xf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Nl(e.type)) || e.tag === 4
  }
  function Wr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xf(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && Nl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Fr(e, t, l) {
    var a = e.tag
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ai))
    else if (
      a !== 4 &&
      (a === 27 && Nl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Fr(e, t, l), e = e.sibling; e !== null; ) Fr(e, t, l), (e = e.sibling)
  }
  function Zu(e, t, l) {
    var a = e.tag
    if (a === 5 || a === 6) (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e)
    else if (a !== 4 && (a === 27 && Nl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (Zu(e, t, l), e = e.sibling; e !== null; ) Zu(e, t, l), (e = e.sibling)
  }
  function Qf(e) {
    var t = e.stateNode,
      l = e.memoizedProps
    try {
      for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0])
      Fe(t, a, l), (t[Pe] = e), (t[at] = l)
    } catch (u) {
      Re(e, e.return, u)
    }
  }
  var el = !1,
    qe = !1,
    Pr = !1,
    Vf = typeof WeakSet == 'function' ? WeakSet : Set,
    Ke = null
  function Cy(e, t) {
    if (((e = e.containerInfo), (Ec = si), (e = ts(e)), Wi(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window
          var a = l.getSelection && l.getSelection()
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode
            var n = a.anchorOffset,
              u = a.focusNode
            a = a.focusOffset
            try {
              l.nodeType, u.nodeType
            } catch {
              l = null
              break e
            }
            var r = 0,
              s = -1,
              p = -1,
              T = 0,
              M = 0,
              C = e,
              A = null
            t: for (;;) {
              for (
                var z;
                C !== l || (n !== 0 && C.nodeType !== 3) || (s = r + n),
                  C !== u || (a !== 0 && C.nodeType !== 3) || (p = r + a),
                  C.nodeType === 3 && (r += C.nodeValue.length),
                  (z = C.firstChild) !== null;

              )
                (A = C), (C = z)
              for (;;) {
                if (C === e) break t
                if (
                  (A === l && ++T === n && (s = r),
                  A === u && ++M === a && (p = r),
                  (z = C.nextSibling) !== null)
                )
                  break
                ;(C = A), (A = C.parentNode)
              }
              C = z
            }
            l = s === -1 || p === -1 ? null : { start: s, end: p }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (Tc = { focusedElem: e, selectionRange: l }, si = !1, Ke = t; Ke !== null; )
      if (((t = Ke), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = t), (Ke = e)
      else
        for (; Ke !== null; ) {
          switch (((t = Ke), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ;(e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode)
                try {
                  var ae = Fl(l.type, n, l.elementType === l.type)
                  ;(e = a.getSnapshotBeforeUpdate(ae, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e)
                } catch (te) {
                  Re(l, l.return, te)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) zc(e)
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      zc(e)
                      break
                    default:
                      e.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(c(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (Ke = e)
            break
          }
          Ke = t.return
        }
  }
  function Zf(e, t, l) {
    var a = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        El(e, l), a & 4 && jn(5, l)
        break
      case 1:
        if ((El(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (r) {
              Re(l, l.return, r)
            }
          else {
            var n = Fl(l.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (r) {
              Re(l, l.return, r)
            }
          }
        a & 64 && Lf(l), a & 512 && Nn(l, l.return)
        break
      case 3:
        if ((El(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode
                break
              case 1:
                t = l.child.stateNode
            }
          try {
            zs(e, t)
          } catch (r) {
            Re(l, l.return, r)
          }
        }
        break
      case 27:
        t === null && a & 4 && Qf(l)
      case 26:
      case 5:
        El(e, l), t === null && a & 4 && kf(l), a & 512 && Nn(l, l.return)
        break
      case 12:
        El(e, l)
        break
      case 13:
        El(e, l),
          a & 4 && $f(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = Xy.bind(null, l)), rp(e, l))))
        break
      case 22:
        if (((a = l.memoizedState !== null || el), !a)) {
          ;(t = (t !== null && t.memoizedState !== null) || qe), (n = el)
          var u = qe
          ;(el = a),
            (qe = t) && !u ? Tl(e, l, (l.subtreeFlags & 8772) !== 0) : El(e, l),
            (el = n),
            (qe = u)
        }
        break
      case 30:
        break
      default:
        El(e, l)
    }
  }
  function Kf(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Kf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Oi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  var Ne = null,
    it = !1
  function tl(e, t, l) {
    for (l = l.child; l !== null; ) Jf(e, t, l), (l = l.sibling)
  }
  function Jf(e, t, l) {
    if (ot && typeof ot.onCommitFiberUnmount == 'function')
      try {
        ot.onCommitFiberUnmount($a, l)
      } catch {}
    switch (l.tag) {
      case 26:
        qe || Bt(l, t),
          tl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l))
        break
      case 27:
        qe || Bt(l, t)
        var a = Ne,
          n = it
        Nl(l.type) && ((Ne = l.stateNode), (it = !1)),
          tl(e, t, l),
          qn(l.stateNode),
          (Ne = a),
          (it = n)
        break
      case 5:
        qe || Bt(l, t)
      case 6:
        if (((a = Ne), (n = it), (Ne = null), tl(e, t, l), (Ne = a), (it = n), Ne !== null))
          if (it)
            try {
              ;(Ne.nodeType === 9
                ? Ne.body
                : Ne.nodeName === 'HTML'
                  ? Ne.ownerDocument.body
                  : Ne
              ).removeChild(l.stateNode)
            } catch (u) {
              Re(l, t, u)
            }
          else
            try {
              Ne.removeChild(l.stateNode)
            } catch (u) {
              Re(l, t, u)
            }
        break
      case 18:
        Ne !== null &&
          (it
            ? ((e = Ne),
              Hd(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode
              ),
              Zn(e))
            : Hd(Ne, l.stateNode))
        break
      case 4:
        ;(a = Ne),
          (n = it),
          (Ne = l.stateNode.containerInfo),
          (it = !0),
          tl(e, t, l),
          (Ne = a),
          (it = n)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        qe || Sl(2, l, t), qe || Sl(4, l, t), tl(e, t, l)
        break
      case 1:
        qe ||
          (Bt(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && Yf(l, t, a)),
          tl(e, t, l)
        break
      case 21:
        tl(e, t, l)
        break
      case 22:
        ;(qe = (a = qe) || l.memoizedState !== null), tl(e, t, l), (qe = a)
        break
      default:
        tl(e, t, l)
    }
  }
  function $f(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Zn(e)
      } catch (l) {
        Re(t, t.return, l)
      }
  }
  function Uy(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode
        return t === null && (t = e.stateNode = new Vf()), t
      case 22:
        return (
          (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Vf()), t
        )
      default:
        throw Error(c(435, e.tag))
    }
  }
  function Ir(e, t) {
    var l = Uy(e)
    t.forEach(function (a) {
      var n = Qy.bind(null, e, a)
      l.has(a) || (l.add(a), a.then(n, n))
    })
  }
  function mt(e, t) {
    var l = t.deletions
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          r = t,
          s = r
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Nl(s.type)) {
                ;(Ne = s.stateNode), (it = !1)
                break e
              }
              break
            case 5:
              ;(Ne = s.stateNode), (it = !1)
              break e
            case 3:
            case 4:
              ;(Ne = s.stateNode.containerInfo), (it = !0)
              break e
          }
          s = s.return
        }
        if (Ne === null) throw Error(c(160))
        Jf(u, r, n),
          (Ne = null),
          (it = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null)
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Wf(t, e), (t = t.sibling)
  }
  var Mt = null
  function Wf(e, t) {
    var l = e.alternate,
      a = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mt(t, e), ht(e), a & 4 && (Sl(3, e, e.return), jn(3, e), Sl(5, e, e.return))
        break
      case 1:
        mt(t, e),
          ht(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          a & 64 &&
            el &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))))
        break
      case 26:
        var n = Mt
        if ((mt(t, e), ht(e), a & 512 && (qe || l === null || Bt(l, l.return)), a & 4)) {
          var u = l !== null ? l.memoizedState : null
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ;(a = e.type), (l = e.memoizedProps), (n = n.ownerDocument || n)
                  t: switch (a) {
                    case 'title':
                      ;(u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Pa] ||
                          u[Pe] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(u, n.querySelector('head > title'))),
                        Fe(u, a, l),
                        (u[Pe] = e),
                        Ve(u),
                        (a = u)
                      break e
                    case 'link':
                      var r = Qd('link', 'href', n).get(a + (l.href || ''))
                      if (r) {
                        for (var s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') === (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            r.splice(s, 1)
                            break t
                          }
                      }
                      ;(u = n.createElement(a)), Fe(u, a, l), n.head.appendChild(u)
                      break
                    case 'meta':
                      if ((r = Qd('meta', 'content', n).get(a + (l.content || '')))) {
                        for (s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') === (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            r.splice(s, 1)
                            break t
                          }
                      }
                      ;(u = n.createElement(a)), Fe(u, a, l), n.head.appendChild(u)
                      break
                    default:
                      throw Error(c(468, a))
                  }
                  ;(u[Pe] = e), Ve(u), (a = u)
                }
                e.stateNode = a
              } else Vd(n, e.type, e.stateNode)
            else e.stateNode = Xd(n, a, e.memoizedProps)
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null ? Vd(n, e.type, e.stateNode) : Xd(n, a, e.memoizedProps))
              : a === null && e.stateNode !== null && $r(e, e.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        mt(t, e),
          ht(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          l !== null && a & 4 && $r(e, e.memoizedProps, l.memoizedProps)
        break
      case 5:
        if ((mt(t, e), ht(e), a & 512 && (qe || l === null || Bt(l, l.return)), e.flags & 32)) {
          n = e.stateNode
          try {
            sa(n, '')
          } catch (z) {
            Re(e, e.return, z)
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), $r(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Pr = !0)
        break
      case 6:
        if ((mt(t, e), ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(c(162))
          ;(a = e.memoizedProps), (l = e.stateNode)
          try {
            l.nodeValue = a
          } catch (z) {
            Re(e, e.return, z)
          }
        }
        break
      case 3:
        if (
          ((ri = null),
          (n = Mt),
          (Mt = ui(t.containerInfo)),
          mt(t, e),
          (Mt = n),
          ht(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo)
          } catch (z) {
            Re(e, e.return, z)
          }
        Pr && ((Pr = !1), Ff(e))
        break
      case 4:
        ;(a = Mt), (Mt = ui(e.stateNode.containerInfo)), mt(t, e), ht(e), (Mt = a)
        break
      case 12:
        mt(t, e), ht(e)
        break
      case 13:
        mt(t, e),
          ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (uc = Ct()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ir(e, a)))
        break
      case 22:
        n = e.memoizedState !== null
        var p = l !== null && l.memoizedState !== null,
          T = el,
          M = qe
        if (((el = T || n), (qe = M || p), mt(t, e), (qe = M), (el = T), ht(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || p || el || qe || Pl(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                p = l = t
                try {
                  if (((u = p.stateNode), n))
                    (r = u.style),
                      typeof r.setProperty == 'function'
                        ? r.setProperty('display', 'none', 'important')
                        : (r.display = 'none')
                  else {
                    s = p.stateNode
                    var C = p.memoizedProps.style,
                      A = C != null && C.hasOwnProperty('display') ? C.display : null
                    s.style.display = A == null || typeof A == 'boolean' ? '' : ('' + A).trim()
                  }
                } catch (z) {
                  Re(p, p.return, z)
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                p = t
                try {
                  p.stateNode.nodeValue = n ? '' : p.memoizedProps
                } catch (z) {
                  Re(p, p.return, z)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              l === t && (l = null), (t = t.return)
            }
            l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling)
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Ir(e, l))))
        break
      case 19:
        mt(t, e),
          ht(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ir(e, a)))
        break
      case 30:
        break
      case 21:
        break
      default:
        mt(t, e), ht(e)
    }
  }
  function ht(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Xf(a)) {
            l = a
            break
          }
          a = a.return
        }
        if (l == null) throw Error(c(160))
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Wr(e)
            Zu(e, u, n)
            break
          case 5:
            var r = l.stateNode
            l.flags & 32 && (sa(r, ''), (l.flags &= -33))
            var s = Wr(e)
            Zu(e, s, r)
            break
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              T = Wr(e)
            Fr(e, T, p)
            break
          default:
            throw Error(c(161))
        }
      } catch (M) {
        Re(e, e.return, M)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Ff(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        Ff(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling)
      }
  }
  function El(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Zf(e, t.alternate, t), (t = t.sibling)
  }
  function Pl(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(4, t, t.return), Pl(t)
          break
        case 1:
          Bt(t, t.return)
          var l = t.stateNode
          typeof l.componentWillUnmount == 'function' && Yf(t, t.return, l), Pl(t)
          break
        case 27:
          qn(t.stateNode)
        case 26:
        case 5:
          Bt(t, t.return), Pl(t)
          break
        case 22:
          t.memoizedState === null && Pl(t)
          break
        case 30:
          Pl(t)
          break
        default:
          Pl(t)
      }
      e = e.sibling
    }
  }
  function Tl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        r = u.flags
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Tl(n, u, l), jn(4, u)
          break
        case 1:
          if ((Tl(n, u, l), (a = u), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount()
            } catch (T) {
              Re(a, a.return, T)
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode
            try {
              var p = n.shared.hiddenCallbacks
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++) ws(p[n], s)
            } catch (T) {
              Re(a, a.return, T)
            }
          }
          l && r & 64 && Lf(u), Nn(u, u.return)
          break
        case 27:
          Qf(u)
        case 26:
        case 5:
          Tl(n, u, l), l && a === null && r & 4 && kf(u), Nn(u, u.return)
          break
        case 12:
          Tl(n, u, l)
          break
        case 13:
          Tl(n, u, l), l && r & 4 && $f(n, u)
          break
        case 22:
          u.memoizedState === null && Tl(n, u, l), Nn(u, u.return)
          break
        case 30:
          break
        default:
          Tl(n, u, l)
      }
      t = t.sibling
    }
  }
  function ec(e, t) {
    var l = null
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && hn(l))
  }
  function tc(e, t) {
    ;(e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && hn(e))
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Pf(e, t, l, a), (t = t.sibling)
  }
  function Pf(e, t, l, a) {
    var n = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(e, t, l, a), n & 2048 && jn(9, t)
        break
      case 1:
        qt(e, t, l, a)
        break
      case 3:
        qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && hn(e)))
        break
      case 12:
        if (n & 2048) {
          qt(e, t, l, a), (e = t.stateNode)
          try {
            var u = t.memoizedProps,
              r = u.id,
              s = u.onPostCommit
            typeof s == 'function' &&
              s(r, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0)
          } catch (p) {
            Re(t, t.return, p)
          }
        } else qt(e, t, l, a)
        break
      case 13:
        qt(e, t, l, a)
        break
      case 23:
        break
      case 22:
        ;(u = t.stateNode),
          (r = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? qt(e, t, l, a)
              : Mn(e, t)
            : u._visibility & 2
              ? qt(e, t, l, a)
              : ((u._visibility |= 2), Na(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && ec(r, t)
        break
      case 24:
        qt(e, t, l, a), n & 2048 && tc(t.alternate, t)
        break
      default:
        qt(e, t, l, a)
    }
  }
  function Na(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        r = t,
        s = l,
        p = a,
        T = r.flags
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Na(u, r, s, p, n), jn(8, r)
          break
        case 23:
          break
        case 22:
          var M = r.stateNode
          r.memoizedState !== null
            ? M._visibility & 2
              ? Na(u, r, s, p, n)
              : Mn(u, r)
            : ((M._visibility |= 2), Na(u, r, s, p, n)),
            n && T & 2048 && ec(r.alternate, r)
          break
        case 24:
          Na(u, r, s, p, n), n && T & 2048 && tc(r.alternate, r)
          break
        default:
          Na(u, r, s, p, n)
      }
      t = t.sibling
    }
  }
  function Mn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags
        switch (a.tag) {
          case 22:
            Mn(l, a), n & 2048 && ec(a.alternate, a)
            break
          case 24:
            Mn(l, a), n & 2048 && tc(a.alternate, a)
            break
          default:
            Mn(l, a)
        }
        t = t.sibling
      }
  }
  var On = 8192
  function Ma(e) {
    if (e.subtreeFlags & On) for (e = e.child; e !== null; ) If(e), (e = e.sibling)
  }
  function If(e) {
    switch (e.tag) {
      case 26:
        Ma(e), e.flags & On && e.memoizedState !== null && xp(Mt, e.memoizedState, e.memoizedProps)
        break
      case 5:
        Ma(e)
        break
      case 3:
      case 4:
        var t = Mt
        ;(Mt = ui(e.stateNode.containerInfo)), Ma(e), (Mt = t)
        break
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = On), (On = 16777216), Ma(e), (On = t))
            : Ma(e))
        break
      default:
        Ma(e)
    }
  }
  function ed(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do (t = e.sibling), (e.sibling = null), (e = t)
      while (e !== null)
    }
  }
  function _n(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l]
          ;(Ke = a), ld(a, e)
        }
      ed(e)
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) td(e), (e = e.sibling)
  }
  function td(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _n(e), e.flags & 2048 && Sl(9, e, e.return)
        break
      case 3:
        _n(e)
        break
      case 12:
        _n(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ku(e))
          : _n(e)
        break
      default:
        _n(e)
    }
  }
  function Ku(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l]
          ;(Ke = a), ld(a, e)
        }
      ed(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Sl(8, t, t.return), Ku(t)
          break
        case 22:
          ;(l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Ku(t))
          break
        default:
          Ku(t)
      }
      e = e.sibling
    }
  }
  function ld(e, t) {
    for (; Ke !== null; ) {
      var l = Ke
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Sl(8, l, t)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          hn(l.memoizedState.cache)
      }
      if (((a = l.child), a !== null)) (a.return = l), (Ke = a)
      else
        e: for (l = e; Ke !== null; ) {
          a = Ke
          var n = a.sibling,
            u = a.return
          if ((Kf(a), a === l)) {
            Ke = null
            break e
          }
          if (n !== null) {
            ;(n.return = u), (Ke = n)
            break e
          }
          Ke = u
        }
    }
  }
  var Hy = {
      getCacheForType: function (e) {
        var t = Ie(Ye),
          l = t.data.get(e)
        return l === void 0 && ((l = e()), t.data.set(e, l)), l
      },
    },
    By = typeof WeakMap == 'function' ? WeakMap : Map,
    be = 0,
    je = null,
    fe = null,
    he = 0,
    xe = 0,
    yt = null,
    Al = !1,
    Oa = !1,
    lc = !1,
    ll = 0,
    Ue = 0,
    wl = 0,
    Il = 0,
    ac = 0,
    zt = 0,
    _a = 0,
    Dn = null,
    rt = null,
    nc = !1,
    uc = 0,
    Ju = 1 / 0,
    $u = null,
    zl = null,
    We = 0,
    Rl = null,
    Da = null,
    Ca = 0,
    ic = 0,
    rc = null,
    ad = null,
    Cn = 0,
    cc = null
  function pt() {
    if ((be & 2) !== 0 && he !== 0) return he & -he
    if (j.T !== null) {
      var e = Sa
      return e !== 0 ? e : yc()
    }
    return go()
  }
  function nd() {
    zt === 0 && (zt = (he & 536870912) === 0 || ve ? ho() : 536870912)
    var e = wt.current
    return e !== null && (e.flags |= 32), zt
  }
  function vt(e, t, l) {
    ;((e === je && (xe === 2 || xe === 9)) || e.cancelPendingCommit !== null) &&
      (Ua(e, 0), jl(e, he, zt, !1)),
      Fa(e, l),
      ((be & 2) === 0 || e !== je) &&
        (e === je && ((be & 2) === 0 && (Il |= l), Ue === 4 && jl(e, he, zt, !1)), Gt(e))
  }
  function ud(e, t, l) {
    if ((be & 6) !== 0) throw Error(c(327))
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Wa(e, t),
      n = a ? Ly(e, t) : fc(e, t, !0),
      u = a
    do {
      if (n === 0) {
        Oa && !a && jl(e, t, 0, !1)
        break
      } else {
        if (((l = e.current.alternate), u && !qy(l))) {
          ;(n = fc(e, t, !1)), (u = !1)
          continue
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var r = 0
          else (r = e.pendingLanes & -536870913), (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0)
          if (r !== 0) {
            t = r
            e: {
              var s = e
              n = Dn
              var p = s.current.memoizedState.isDehydrated
              if ((p && (Ua(s, r).flags |= 256), (r = fc(s, r, !1)), r !== 2)) {
                if (lc && !p) {
                  ;(s.errorRecoveryDisabledLanes |= u), (Il |= u), (n = 4)
                  break e
                }
                ;(u = rt), (rt = n), u !== null && (rt === null ? (rt = u) : rt.push.apply(rt, u))
              }
              n = r
            }
            if (((u = !1), n !== 2)) continue
          }
        }
        if (n === 1) {
          Ua(e, 0), jl(e, t, 0, !0)
          break
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(c(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              jl(a, t, zt, !Al)
              break e
            case 2:
              rt = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(c(329))
          }
          if ((t & 62914560) === t && ((n = uc + 300 - Ct()), 10 < n)) {
            if ((jl(a, t, zt, !Al), iu(a, 0, !0) !== 0)) break e
            a.timeoutHandle = Cd(id.bind(null, a, l, rt, $u, nc, t, zt, Il, _a, Al, u, 2, -0, 0), n)
            break e
          }
          id(a, l, rt, $u, nc, t, zt, Il, _a, Al, u, 0, -0, 0)
        }
      }
      break
    } while (!0)
    Gt(e)
  }
  function id(e, t, l, a, n, u, r, s, p, T, M, C, A, z) {
    if (
      ((e.timeoutHandle = -1),
      (C = t.subtreeFlags),
      (C & 8192 || (C & 16785408) === 16785408) &&
        ((Yn = { stylesheets: null, count: 0, unsuspend: bp }), If(t), (C = Sp()), C !== null))
    ) {
      ;(e.cancelPendingCommit = C(md.bind(null, e, t, u, l, a, n, r, s, p, M, 1, A, z))),
        jl(e, u, r, !T)
      return
    }
    md(e, t, u, l, a, n, r, s, p)
  }
  function qy(e) {
    for (var t = e; ; ) {
      var l = t.tag
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot
          n = n.value
          try {
            if (!ft(u(), n)) return !1
          } catch {
            return !1
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) (l.return = t), (t = l)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function jl(e, t, l, a) {
    ;(t &= ~ac),
      (t &= ~Il),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes)
    for (var n = t; 0 < n; ) {
      var u = 31 - st(n),
        r = 1 << u
      ;(a[u] = -1), (n &= ~r)
    }
    l !== 0 && po(e, l, t)
  }
  function Wu() {
    return (be & 6) === 0 ? (Un(0), !1) : !0
  }
  function oc() {
    if (fe !== null) {
      if (xe === 0) var e = fe.return
      else (e = fe), (Jt = Kl = null), zr(e), (Ra = null), (wn = 0), (e = fe)
      for (; e !== null; ) Gf(e.alternate, e), (e = e.return)
      fe = null
    }
  }
  function Ua(e, t) {
    var l = e.timeoutHandle
    l !== -1 && ((e.timeoutHandle = -1), lp(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      oc(),
      (je = e),
      (fe = l = Vt(e.current, null)),
      (he = t),
      (xe = 0),
      (yt = null),
      (Al = !1),
      (Oa = Wa(e, t)),
      (lc = !1),
      (_a = zt = ac = Il = wl = Ue = 0),
      (rt = Dn = null),
      (nc = !1),
      (t & 8) !== 0 && (t |= t & 32)
    var a = e.entangledLanes
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - st(a),
          u = 1 << n
        ;(t |= e[n]), (a &= ~u)
      }
    return (ll = t), gu(), l
  }
  function rd(e, t) {
    ;(re = null),
      (j.H = Bu),
      t === pn || t === Ru
        ? ((t = Ts()), (xe = 3))
        : t === xs
          ? ((t = Ts()), (xe = 4))
          : (xe =
              t === wf
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (yt = t),
      fe === null && ((Ue = 1), ku(e, St(t, e.current)))
  }
  function cd() {
    var e = j.H
    return (j.H = Bu), e === null ? Bu : e
  }
  function od() {
    var e = j.A
    return (j.A = Hy), e
  }
  function sc() {
    ;(Ue = 4),
      Al || ((he & 4194048) !== he && wt.current !== null) || (Oa = !0),
      ((wl & 134217727) === 0 && (Il & 134217727) === 0) || je === null || jl(je, he, zt, !1)
  }
  function fc(e, t, l) {
    var a = be
    be |= 2
    var n = cd(),
      u = od()
    ;(je !== e || he !== t) && (($u = null), Ua(e, t)), (t = !1)
    var r = Ue
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var s = fe,
            p = yt
          switch (xe) {
            case 8:
              oc(), (r = 6)
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0)
              var T = xe
              if (((xe = 0), (yt = null), Ha(e, s, p, T), l && Oa)) {
                r = 0
                break e
              }
              break
            default:
              ;(T = xe), (xe = 0), (yt = null), Ha(e, s, p, T)
          }
        }
        Gy(), (r = Ue)
        break
      } catch (M) {
        rd(e, M)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (Jt = Kl = null),
      (be = a),
      (j.H = n),
      (j.A = u),
      fe === null && ((je = null), (he = 0), gu()),
      r
    )
  }
  function Gy() {
    for (; fe !== null; ) sd(fe)
  }
  function Ly(e, t) {
    var l = be
    be |= 2
    var a = cd(),
      n = od()
    je !== e || he !== t ? (($u = null), (Ju = Ct() + 500), Ua(e, t)) : (Oa = Wa(e, t))
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe
          var u = yt
          t: switch (xe) {
            case 1:
              ;(xe = 0), (yt = null), Ha(e, t, u, 1)
              break
            case 2:
            case 9:
              if (Ss(u)) {
                ;(xe = 0), (yt = null), fd(t)
                break
              }
              ;(t = function () {
                ;(xe !== 2 && xe !== 9) || je !== e || (xe = 7), Gt(e)
              }),
                u.then(t, t)
              break e
            case 3:
              xe = 7
              break e
            case 4:
              xe = 5
              break e
            case 7:
              Ss(u) ? ((xe = 0), (yt = null), fd(t)) : ((xe = 0), (yt = null), Ha(e, t, u, 7))
              break
            case 5:
              var r = null
              switch (fe.tag) {
                case 26:
                  r = fe.memoizedState
                case 5:
                case 27:
                  var s = fe
                  if (!r || Zd(r)) {
                    ;(xe = 0), (yt = null)
                    var p = s.sibling
                    if (p !== null) fe = p
                    else {
                      var T = s.return
                      T !== null ? ((fe = T), Fu(T)) : (fe = null)
                    }
                    break t
                  }
              }
              ;(xe = 0), (yt = null), Ha(e, t, u, 5)
              break
            case 6:
              ;(xe = 0), (yt = null), Ha(e, t, u, 6)
              break
            case 8:
              oc(), (Ue = 6)
              break e
            default:
              throw Error(c(462))
          }
        }
        Yy()
        break
      } catch (M) {
        rd(e, M)
      }
    while (!0)
    return (
      (Jt = Kl = null),
      (j.H = a),
      (j.A = n),
      (be = l),
      fe !== null ? 0 : ((je = null), (he = 0), gu(), Ue)
    )
  }
  function Yy() {
    for (; fe !== null && !oh(); ) sd(fe)
  }
  function sd(e) {
    var t = Bf(e.alternate, e, ll)
    ;(e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (fe = t)
  }
  function fd(e) {
    var t = e,
      l = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = Of(l, t, t.pendingProps, t.type, void 0, he)
        break
      case 11:
        t = Of(l, t, t.pendingProps, t.type.render, t.ref, he)
        break
      case 5:
        zr(t)
      default:
        Gf(l, t), (t = fe = fs(t, ll)), (t = Bf(l, t, ll))
    }
    ;(e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (fe = t)
  }
  function Ha(e, t, l, a) {
    ;(Jt = Kl = null), zr(t), (Ra = null), (wn = 0)
    var n = t.return
    try {
      if (My(e, n, t, l, he)) {
        ;(Ue = 1), ku(e, St(l, e.current)), (fe = null)
        return
      }
    } catch (u) {
      if (n !== null) throw ((fe = n), u)
      ;(Ue = 1), ku(e, St(l, e.current)), (fe = null)
      return
    }
    t.flags & 32768
      ? (ve || a === 1
          ? (e = !0)
          : Oa || (he & 536870912) !== 0
            ? (e = !1)
            : ((Al = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = wt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        dd(t, e))
      : Fu(t)
  }
  function Fu(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        dd(t, Al)
        return
      }
      e = t.return
      var l = _y(t.alternate, t, ll)
      if (l !== null) {
        fe = l
        return
      }
      if (((t = t.sibling), t !== null)) {
        fe = t
        return
      }
      fe = t = e
    } while (t !== null)
    Ue === 0 && (Ue = 5)
  }
  function dd(e, t) {
    do {
      var l = Dy(e.alternate, e)
      if (l !== null) {
        ;(l.flags &= 32767), (fe = l)
        return
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        fe = e
        return
      }
      fe = e = l
    } while (e !== null)
    ;(Ue = 6), (fe = null)
  }
  function md(e, t, l, a, n, u, r, s, p) {
    e.cancelPendingCommit = null
    do Pu()
    while (We !== 0)
    if ((be & 6) !== 0) throw Error(c(327))
    if (t !== null) {
      if (t === e.current) throw Error(c(177))
      if (
        ((u = t.lanes | t.childLanes),
        (u |= tr),
        bh(e, l, u, r, s, p),
        e === je && ((fe = je = null), (he = 0)),
        (Da = t),
        (Rl = e),
        (Ca = l),
        (ic = u),
        (rc = n),
        (ad = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Vy(au, function () {
              return gd(), null
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ;(a = j.T), (j.T = null), (n = Y.p), (Y.p = 2), (r = be), (be |= 4)
        try {
          Cy(e, t, l)
        } finally {
          ;(be = r), (Y.p = n), (j.T = a)
        }
      }
      ;(We = 1), hd(), yd(), pd()
    }
  }
  function hd() {
    if (We === 1) {
      We = 0
      var e = Rl,
        t = Da,
        l = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ;(l = j.T), (j.T = null)
        var a = Y.p
        Y.p = 2
        var n = be
        be |= 4
        try {
          Wf(t, e)
          var u = Tc,
            r = ts(e.containerInfo),
            s = u.focusedElem,
            p = u.selectionRange
          if (r !== s && s && s.ownerDocument && es(s.ownerDocument.documentElement, s)) {
            if (p !== null && Wi(s)) {
              var T = p.start,
                M = p.end
              if ((M === void 0 && (M = T), 'selectionStart' in s))
                (s.selectionStart = T), (s.selectionEnd = Math.min(M, s.value.length))
              else {
                var C = s.ownerDocument || document,
                  A = (C && C.defaultView) || window
                if (A.getSelection) {
                  var z = A.getSelection(),
                    ae = s.textContent.length,
                    te = Math.min(p.start, ae),
                    we = p.end === void 0 ? te : Math.min(p.end, ae)
                  !z.extend && te > we && ((r = we), (we = te), (te = r))
                  var S = Io(s, te),
                    b = Io(s, we)
                  if (
                    S &&
                    b &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== S.node ||
                      z.anchorOffset !== S.offset ||
                      z.focusNode !== b.node ||
                      z.focusOffset !== b.offset)
                  ) {
                    var E = C.createRange()
                    E.setStart(S.node, S.offset),
                      z.removeAllRanges(),
                      te > we
                        ? (z.addRange(E), z.extend(b.node, b.offset))
                        : (E.setEnd(b.node, b.offset), z.addRange(E))
                  }
                }
              }
            }
            for (C = [], z = s; (z = z.parentNode); )
              z.nodeType === 1 && C.push({ element: z, left: z.scrollLeft, top: z.scrollTop })
            for (typeof s.focus == 'function' && s.focus(), s = 0; s < C.length; s++) {
              var _ = C[s]
              ;(_.element.scrollLeft = _.left), (_.element.scrollTop = _.top)
            }
          }
          ;(si = !!Ec), (Tc = Ec = null)
        } finally {
          ;(be = n), (Y.p = a), (j.T = l)
        }
      }
      ;(e.current = t), (We = 2)
    }
  }
  function yd() {
    if (We === 2) {
      We = 0
      var e = Rl,
        t = Da,
        l = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ;(l = j.T), (j.T = null)
        var a = Y.p
        Y.p = 2
        var n = be
        be |= 4
        try {
          Zf(e, t.alternate, t)
        } finally {
          ;(be = n), (Y.p = a), (j.T = l)
        }
      }
      We = 3
    }
  }
  function pd() {
    if (We === 4 || We === 3) {
      ;(We = 0), sh()
      var e = Rl,
        t = Da,
        l = Ca,
        a = ad
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (We = 5)
        : ((We = 0), (Da = Rl = null), vd(e, e.pendingLanes))
      var n = e.pendingLanes
      if (
        (n === 0 && (zl = null),
        Ni(l),
        (t = t.stateNode),
        ot && typeof ot.onCommitFiberRoot == 'function')
      )
        try {
          ot.onCommitFiberRoot($a, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (a !== null) {
        ;(t = j.T), (n = Y.p), (Y.p = 2), (j.T = null)
        try {
          for (var u = e.onRecoverableError, r = 0; r < a.length; r++) {
            var s = a[r]
            u(s.value, { componentStack: s.stack })
          }
        } finally {
          ;(j.T = t), (Y.p = n)
        }
      }
      ;(Ca & 3) !== 0 && Pu(),
        Gt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0 ? (e === cc ? Cn++ : ((Cn = 0), (cc = e))) : (Cn = 0),
        Un(0)
    }
  }
  function vd(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), hn(t)))
  }
  function Pu(e) {
    return hd(), yd(), pd(), gd()
  }
  function gd() {
    if (We !== 5) return !1
    var e = Rl,
      t = ic
    ic = 0
    var l = Ni(Ca),
      a = j.T,
      n = Y.p
    try {
      ;(Y.p = 32 > l ? 32 : l), (j.T = null), (l = rc), (rc = null)
      var u = Rl,
        r = Ca
      if (((We = 0), (Da = Rl = null), (Ca = 0), (be & 6) !== 0)) throw Error(c(331))
      var s = be
      if (
        ((be |= 4),
        td(u.current),
        Pf(u, u.current, r, l),
        (be = s),
        Un(0, !1),
        ot && typeof ot.onPostCommitFiberRoot == 'function')
      )
        try {
          ot.onPostCommitFiberRoot($a, u)
        } catch {}
      return !0
    } finally {
      ;(Y.p = n), (j.T = a), vd(e, t)
    }
  }
  function bd(e, t, l) {
    ;(t = St(l, t)), (t = Lr(e.stateNode, t, 2)), (e = vl(e, t, 2)), e !== null && (Fa(e, 2), Gt(e))
  }
  function Re(e, t, l) {
    if (e.tag === 3) bd(e, e, l)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bd(t, e, l)
          break
        } else if (t.tag === 1) {
          var a = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (zl === null || !zl.has(a)))
          ) {
            ;(e = St(l, e)),
              (l = Tf(2)),
              (a = vl(t, l, 2)),
              a !== null && (Af(l, a, t, e), Fa(a, 2), Gt(a))
            break
          }
        }
        t = t.return
      }
  }
  function dc(e, t, l) {
    var a = e.pingCache
    if (a === null) {
      a = e.pingCache = new By()
      var n = new Set()
      a.set(t, n)
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n))
    n.has(l) || ((lc = !0), n.add(l), (e = ky.bind(null, e, t, l)), t.then(e, e))
  }
  function ky(e, t, l) {
    var a = e.pingCache
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      je === e &&
        (he & l) === l &&
        (Ue === 4 || (Ue === 3 && (he & 62914560) === he && 300 > Ct() - uc)
          ? (be & 2) === 0 && Ua(e, 0)
          : (ac |= l),
        _a === he && (_a = 0)),
      Gt(e)
  }
  function xd(e, t) {
    t === 0 && (t = yo()), (e = va(e, t)), e !== null && (Fa(e, t), Gt(e))
  }
  function Xy(e) {
    var t = e.memoizedState,
      l = 0
    t !== null && (l = t.retryLane), xd(e, l)
  }
  function Qy(e, t) {
    var l = 0
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState
        n !== null && (l = n.retryLane)
        break
      case 19:
        a = e.stateNode
        break
      case 22:
        a = e.stateNode._retryCache
        break
      default:
        throw Error(c(314))
    }
    a !== null && a.delete(t), xd(e, l)
  }
  function Vy(e, t) {
    return wi(e, t)
  }
  var Iu = null,
    Ba = null,
    mc = !1,
    ei = !1,
    hc = !1,
    ea = 0
  function Gt(e) {
    e !== Ba && e.next === null && (Ba === null ? (Iu = Ba = e) : (Ba = Ba.next = e)),
      (ei = !0),
      mc || ((mc = !0), Ky())
  }
  function Un(e, t) {
    if (!hc && ei) {
      hc = !0
      do
        for (var l = !1, a = Iu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes
            if (n === 0) var u = 0
            else {
              var r = a.suspendedLanes,
                s = a.pingedLanes
              ;(u = (1 << (31 - st(42 | e) + 1)) - 1),
                (u &= n & ~(r & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0)
            }
            u !== 0 && ((l = !0), Ad(a, u))
          } else
            (u = he),
              (u = iu(
                a,
                a === je ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Wa(a, u) || ((l = !0), Ad(a, u))
          a = a.next
        }
      while (l)
      hc = !1
    }
  }
  function Zy() {
    Sd()
  }
  function Sd() {
    ei = mc = !1
    var e = 0
    ea !== 0 && (tp() && (e = ea), (ea = 0))
    for (var t = Ct(), l = null, a = Iu; a !== null; ) {
      var n = a.next,
        u = Ed(a, t)
      u === 0
        ? ((a.next = null), l === null ? (Iu = n) : (l.next = n), n === null && (Ba = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (ei = !0)),
        (a = n)
    }
    Un(e)
  }
  function Ed(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var r = 31 - st(u),
        s = 1 << r,
        p = n[r]
      p === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[r] = gh(s, t))
        : p <= t && (e.expiredLanes |= s),
        (u &= ~s)
    }
    if (
      ((t = je),
      (l = he),
      (l = iu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      l === 0 || (e === t && (xe === 2 || xe === 9)) || e.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && zi(a), (e.callbackNode = null), (e.callbackPriority = 0)
    if ((l & 3) === 0 || Wa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t
      switch ((a !== null && zi(a), Ni(l))) {
        case 2:
        case 8:
          l = fo
          break
        case 32:
          l = au
          break
        case 268435456:
          l = mo
          break
        default:
          l = au
      }
      return (
        (a = Td.bind(null, e)), (l = wi(l, a)), (e.callbackPriority = t), (e.callbackNode = l), t
      )
    }
    return a !== null && a !== null && zi(a), (e.callbackPriority = 2), (e.callbackNode = null), 2
  }
  function Td(e, t) {
    if (We !== 0 && We !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null
    var l = e.callbackNode
    if (Pu() && e.callbackNode !== l) return null
    var a = he
    return (
      (a = iu(e, e === je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (ud(e, a, t),
          Ed(e, Ct()),
          e.callbackNode != null && e.callbackNode === l ? Td.bind(null, e) : null)
    )
  }
  function Ad(e, t) {
    if (Pu()) return null
    ud(e, t, !0)
  }
  function Ky() {
    ap(function () {
      ;(be & 6) !== 0 ? wi(so, Zy) : Sd()
    })
  }
  function yc() {
    return ea === 0 && (ea = ho()), ea
  }
  function wd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : fu('' + e)
  }
  function zd(e, t) {
    var l = t.ownerDocument.createElement('input')
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    )
  }
  function Jy(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = wd((n[at] || null).action),
        r = a.submitter
      r &&
        ((t = (t = r[at] || null) ? wd(t.formAction) : r.getAttribute('formAction')),
        t !== null && ((u = t), (r = null)))
      var s = new yu('action', 'action', null, a, n)
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ea !== 0) {
                  var p = r ? zd(n, r) : new FormData(n)
                  Ur(l, { pending: !0, data: p, method: n.method, action: u }, null, p)
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (p = r ? zd(n, r) : new FormData(n)),
                  Ur(l, { pending: !0, data: p, method: n.method, action: u }, u, p))
            },
            currentTarget: n,
          },
        ],
      })
    }
  }
  for (var pc = 0; pc < er.length; pc++) {
    var vc = er[pc],
      $y = vc.toLowerCase(),
      Wy = vc[0].toUpperCase() + vc.slice(1)
    Nt($y, 'on' + Wy)
  }
  Nt(ns, 'onAnimationEnd'),
    Nt(us, 'onAnimationIteration'),
    Nt(is, 'onAnimationStart'),
    Nt('dblclick', 'onDoubleClick'),
    Nt('focusin', 'onFocus'),
    Nt('focusout', 'onBlur'),
    Nt(my, 'onTransitionRun'),
    Nt(hy, 'onTransitionStart'),
    Nt(yy, 'onTransitionCancel'),
    Nt(rs, 'onTransitionEnd'),
    ra('onMouseEnter', ['mouseout', 'mouseover']),
    ra('onMouseLeave', ['mouseout', 'mouseover']),
    ra('onPointerEnter', ['pointerout', 'pointerover']),
    ra('onPointerLeave', ['pointerout', 'pointerover']),
    ql('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ql(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ql('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ql('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ql(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ql(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var Hn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Fy = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Hn)
    )
  function Rd(e, t) {
    t = (t & 4) !== 0
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event
      a = a.listeners
      e: {
        var u = void 0
        if (t)
          for (var r = a.length - 1; 0 <= r; r--) {
            var s = a[r],
              p = s.instance,
              T = s.currentTarget
            if (((s = s.listener), p !== u && n.isPropagationStopped())) break e
            ;(u = s), (n.currentTarget = T)
            try {
              u(n)
            } catch (M) {
              Yu(M)
            }
            ;(n.currentTarget = null), (u = p)
          }
        else
          for (r = 0; r < a.length; r++) {
            if (
              ((s = a[r]),
              (p = s.instance),
              (T = s.currentTarget),
              (s = s.listener),
              p !== u && n.isPropagationStopped())
            )
              break e
            ;(u = s), (n.currentTarget = T)
            try {
              u(n)
            } catch (M) {
              Yu(M)
            }
            ;(n.currentTarget = null), (u = p)
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Mi]
    l === void 0 && (l = t[Mi] = new Set())
    var a = e + '__bubble'
    l.has(a) || (jd(t, e, 2, !1), l.add(a))
  }
  function gc(e, t, l) {
    var a = 0
    t && (a |= 4), jd(l, e, a, t)
  }
  var ti = '_reactListening' + Math.random().toString(36).slice(2)
  function bc(e) {
    if (!e[ti]) {
      ;(e[ti] = !0),
        xo.forEach(function (l) {
          l !== 'selectionchange' && (Fy.has(l) || gc(l, !1, e), gc(l, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[ti] || ((t[ti] = !0), gc('selectionchange', !1, t))
    }
  }
  function jd(e, t, l, a) {
    switch (Pd(t)) {
      case 2:
        var n = Ap
        break
      case 8:
        n = wp
        break
      default:
        n = Dc
    }
    ;(l = n.bind(null, t, l, e)),
      (n = void 0),
      !Yi || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1)
  }
  function xc(e, t, l, a, n) {
    var u = a
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return
        var r = a.tag
        if (r === 3 || r === 4) {
          var s = a.stateNode.containerInfo
          if (s === n) break
          if (r === 4)
            for (r = a.return; r !== null; ) {
              var p = r.tag
              if ((p === 3 || p === 4) && r.stateNode.containerInfo === n) return
              r = r.return
            }
          for (; s !== null; ) {
            if (((r = na(s)), r === null)) return
            if (((p = r.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
              a = u = r
              continue e
            }
            s = s.parentNode
          }
        }
        a = a.return
      }
    Co(function () {
      var T = u,
        M = Gi(l),
        C = []
      e: {
        var A = cs.get(e)
        if (A !== void 0) {
          var z = yu,
            ae = e
          switch (e) {
            case 'keypress':
              if (mu(l) === 0) break e
            case 'keydown':
            case 'keyup':
              z = Vh
              break
            case 'focusin':
              ;(ae = 'focus'), (z = Vi)
              break
            case 'focusout':
              ;(ae = 'blur'), (z = Vi)
              break
            case 'beforeblur':
            case 'afterblur':
              z = Vi
              break
            case 'click':
              if (l.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              z = Bo
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = Dh
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = Jh
              break
            case ns:
            case us:
            case is:
              z = Hh
              break
            case rs:
              z = Wh
              break
            case 'scroll':
            case 'scrollend':
              z = Oh
              break
            case 'wheel':
              z = Ph
              break
            case 'copy':
            case 'cut':
            case 'paste':
              z = qh
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = Go
              break
            case 'toggle':
            case 'beforetoggle':
              z = ey
          }
          var te = (t & 4) !== 0,
            we = !te && (e === 'scroll' || e === 'scrollend'),
            S = te ? (A !== null ? A + 'Capture' : null) : A
          te = []
          for (var b = T, E; b !== null; ) {
            var _ = b
            if (
              ((E = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                E === null ||
                S === null ||
                ((_ = en(b, S)), _ != null && te.push(Bn(b, _, E))),
              we)
            )
              break
            b = b.return
          }
          0 < te.length && ((A = new z(A, ae, null, l, M)), C.push({ event: A, listeners: te }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === 'mouseover' || e === 'pointerover'),
            (z = e === 'mouseout' || e === 'pointerout'),
            A && l !== qi && (ae = l.relatedTarget || l.fromElement) && (na(ae) || ae[aa]))
          )
            break e
          if (
            (z || A) &&
            ((A =
              M.window === M
                ? M
                : (A = M.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            z
              ? ((ae = l.relatedTarget || l.toElement),
                (z = T),
                (ae = ae ? na(ae) : null),
                ae !== null &&
                  ((we = y(ae)), (te = ae.tag), ae !== we || (te !== 5 && te !== 27 && te !== 6)) &&
                  (ae = null))
              : ((z = null), (ae = T)),
            z !== ae)
          ) {
            if (
              ((te = Bo),
              (_ = 'onMouseLeave'),
              (S = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((te = Go), (_ = 'onPointerLeave'), (S = 'onPointerEnter'), (b = 'pointer')),
              (we = z == null ? A : Ia(z)),
              (E = ae == null ? A : Ia(ae)),
              (A = new te(_, b + 'leave', z, l, M)),
              (A.target = we),
              (A.relatedTarget = E),
              (_ = null),
              na(M) === T &&
                ((te = new te(S, b + 'enter', ae, l, M)),
                (te.target = E),
                (te.relatedTarget = we),
                (_ = te)),
              (we = _),
              z && ae)
            )
              t: {
                for (te = z, S = ae, b = 0, E = te; E; E = qa(E)) b++
                for (E = 0, _ = S; _; _ = qa(_)) E++
                for (; 0 < b - E; ) (te = qa(te)), b--
                for (; 0 < E - b; ) (S = qa(S)), E--
                for (; b--; ) {
                  if (te === S || (S !== null && te === S.alternate)) break t
                  ;(te = qa(te)), (S = qa(S))
                }
                te = null
              }
            else te = null
            z !== null && Nd(C, A, z, te, !1), ae !== null && we !== null && Nd(C, we, ae, te, !0)
          }
        }
        e: {
          if (
            ((A = T ? Ia(T) : window),
            (z = A.nodeName && A.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && A.type === 'file'))
          )
            var J = Ko
          else if (Vo(A))
            if (Jo) J = sy
            else {
              J = cy
              var oe = ry
            }
          else
            (z = A.nodeName),
              !z || z.toLowerCase() !== 'input' || (A.type !== 'checkbox' && A.type !== 'radio')
                ? T && Bi(T.elementType) && (J = Ko)
                : (J = oy)
          if (J && (J = J(e, T))) {
            Zo(C, J, l, M)
            break e
          }
          oe && oe(e, A, T),
            e === 'focusout' &&
              T &&
              A.type === 'number' &&
              T.memoizedProps.value != null &&
              Hi(A, 'number', A.value)
        }
        switch (((oe = T ? Ia(T) : window), e)) {
          case 'focusin':
            ;(Vo(oe) || oe.contentEditable === 'true') && ((ha = oe), (Fi = T), (on = null))
            break
          case 'focusout':
            on = Fi = ha = null
            break
          case 'mousedown':
            Pi = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(Pi = !1), ls(C, l, M)
            break
          case 'selectionchange':
            if (dy) break
          case 'keydown':
          case 'keyup':
            ls(C, l, M)
        }
        var F
        if (Ki)
          e: {
            switch (e) {
              case 'compositionstart':
                var le = 'onCompositionStart'
                break e
              case 'compositionend':
                le = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                le = 'onCompositionUpdate'
                break e
            }
            le = void 0
          }
        else
          ma
            ? Xo(e, l) && (le = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (le = 'onCompositionStart')
        le &&
          (Lo &&
            l.locale !== 'ko' &&
            (ma || le !== 'onCompositionStart'
              ? le === 'onCompositionEnd' && ma && (F = Uo())
              : ((ml = M), (ki = 'value' in ml ? ml.value : ml.textContent), (ma = !0))),
          (oe = li(T, le)),
          0 < oe.length &&
            ((le = new qo(le, e, null, l, M)),
            C.push({ event: le, listeners: oe }),
            F ? (le.data = F) : ((F = Qo(l)), F !== null && (le.data = F)))),
          (F = ly ? ay(e, l) : ny(e, l)) &&
            ((le = li(T, 'onBeforeInput')),
            0 < le.length &&
              ((oe = new qo('onBeforeInput', 'beforeinput', null, l, M)),
              C.push({ event: oe, listeners: le }),
              (oe.data = F))),
          Jy(C, e, T, l, M)
      }
      Rd(C, t)
    })
  }
  function Bn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l }
  }
  function li(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = en(e, l)),
          n != null && a.unshift(Bn(e, n, u)),
          (n = en(e, t)),
          n != null && a.push(Bn(e, n, u))),
        e.tag === 3)
      )
        return a
      e = e.return
    }
    return []
  }
  function qa(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function Nd(e, t, l, a, n) {
    for (var u = t._reactName, r = []; l !== null && l !== a; ) {
      var s = l,
        p = s.alternate,
        T = s.stateNode
      if (((s = s.tag), p !== null && p === a)) break
      ;(s !== 5 && s !== 26 && s !== 27) ||
        T === null ||
        ((p = T),
        n
          ? ((T = en(l, u)), T != null && r.unshift(Bn(l, T, p)))
          : n || ((T = en(l, u)), T != null && r.push(Bn(l, T, p)))),
        (l = l.return)
    }
    r.length !== 0 && e.push({ event: t, listeners: r })
  }
  var Py = /\r\n?/g,
    Iy = /\u0000|\uFFFD/g
  function Md(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Py,
        `
`
      )
      .replace(Iy, '')
  }
  function Od(e, t) {
    return (t = Md(t)), Md(e) === t
  }
  function ai() {}
  function Ae(e, t, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || sa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && sa(e, '' + a)
        break
      case 'className':
        cu(e, 'class', a)
        break
      case 'tabIndex':
        cu(e, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        cu(e, l, a)
        break
      case 'style':
        _o(e, a, u)
        break
      case 'data':
        if (t !== 'object') {
          cu(e, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l)
          break
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l)
          break
        }
        ;(a = fu('' + a)), e.setAttribute(l, a)
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && Ae(e, t, 'name', n.name, n, null),
                Ae(e, t, 'formEncType', n.formEncType, n, null),
                Ae(e, t, 'formMethod', n.formMethod, n, null),
                Ae(e, t, 'formTarget', n.formTarget, n, null))
              : (Ae(e, t, 'encType', n.encType, n, null),
                Ae(e, t, 'method', n.method, n, null),
                Ae(e, t, 'target', n.target, n, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l)
          break
        }
        ;(a = fu('' + a)), e.setAttribute(l, a)
        break
      case 'onClick':
        a != null && (e.onclick = ai)
        break
      case 'onScroll':
        a != null && de('scroll', e)
        break
      case 'onScrollEnd':
        a != null && de('scrollend', e)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(c(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60))
            e.innerHTML = l
          }
        }
        break
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          e.removeAttribute('xlink:href')
          break
        }
        ;(l = fu('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l)
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? e.setAttribute(l, a)
            : e.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a)
        break
      case 'popover':
        de('beforetoggle', e), de('toggle', e), ru(e, 'popover', a)
        break
      case 'xlinkActuate':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        ru(e, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Nh.get(l) || l), ru(e, l, a))
    }
  }
  function Sc(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        _o(e, a, u)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(c(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60))
            e.innerHTML = l
          }
        }
        break
      case 'children':
        typeof a == 'string'
          ? sa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && sa(e, '' + a)
        break
      case 'onScroll':
        a != null && de('scroll', e)
        break
      case 'onScrollEnd':
        a != null && de('scrollend', e)
        break
      case 'onClick':
        a != null && (e.onclick = ai)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!So.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[at] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof a == 'function')
            ) {
              typeof u != 'function' &&
                u !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n)
              break e
            }
            l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : ru(e, l, a)
          }
    }
  }
  function Fe(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        de('error', e), de('load', e)
        var a = !1,
          n = !1,
          u
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var r = l[u]
            if (r != null)
              switch (u) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  n = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(c(137, t))
                default:
                  Ae(e, t, u, r, l, null)
              }
          }
        n && Ae(e, t, 'srcSet', l.srcSet, l, null), a && Ae(e, t, 'src', l.src, l, null)
        return
      case 'input':
        de('invalid', e)
        var s = (u = r = n = null),
          p = null,
          T = null
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a]
            if (M != null)
              switch (a) {
                case 'name':
                  n = M
                  break
                case 'type':
                  r = M
                  break
                case 'checked':
                  p = M
                  break
                case 'defaultChecked':
                  T = M
                  break
                case 'value':
                  u = M
                  break
                case 'defaultValue':
                  s = M
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (M != null) throw Error(c(137, t))
                  break
                default:
                  Ae(e, t, a, M, l, null)
              }
          }
        jo(e, u, s, p, T, r, n, !1), ou(e)
        return
      case 'select':
        de('invalid', e), (a = r = u = null)
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case 'value':
                u = s
                break
              case 'defaultValue':
                r = s
                break
              case 'multiple':
                a = s
              default:
                Ae(e, t, n, s, l, null)
            }
        ;(t = u),
          (l = r),
          (e.multiple = !!a),
          t != null ? oa(e, !!a, t, !1) : l != null && oa(e, !!a, l, !0)
        return
      case 'textarea':
        de('invalid', e), (u = n = a = null)
        for (r in l)
          if (l.hasOwnProperty(r) && ((s = l[r]), s != null))
            switch (r) {
              case 'value':
                a = s
                break
              case 'defaultValue':
                n = s
                break
              case 'children':
                u = s
                break
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(c(91))
                break
              default:
                Ae(e, t, r, s, l, null)
            }
        Mo(e, a, n, u), ou(e)
        return
      case 'option':
        for (p in l)
          if (l.hasOwnProperty(p) && ((a = l[p]), a != null))
            switch (p) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                Ae(e, t, p, a, l, null)
            }
        return
      case 'dialog':
        de('beforetoggle', e), de('toggle', e), de('cancel', e), de('close', e)
        break
      case 'iframe':
      case 'object':
        de('load', e)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < Hn.length; a++) de(Hn[a], e)
        break
      case 'image':
        de('error', e), de('load', e)
        break
      case 'details':
        de('toggle', e)
        break
      case 'embed':
      case 'source':
      case 'link':
        de('error', e), de('load', e)
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (T in l)
          if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
            switch (T) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(c(137, t))
              default:
                Ae(e, t, T, a, l, null)
            }
        return
      default:
        if (Bi(t)) {
          for (M in l)
            l.hasOwnProperty(M) && ((a = l[M]), a !== void 0 && Sc(e, t, M, a, l, void 0))
          return
        }
    }
    for (s in l) l.hasOwnProperty(s) && ((a = l[s]), a != null && Ae(e, t, s, a, l, null))
  }
  function ep(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var n = null,
          u = null,
          r = null,
          s = null,
          p = null,
          T = null,
          M = null
        for (z in l) {
          var C = l[z]
          if (l.hasOwnProperty(z) && C != null)
            switch (z) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                p = C
              default:
                a.hasOwnProperty(z) || Ae(e, t, z, null, a, C)
            }
        }
        for (var A in a) {
          var z = a[A]
          if (((C = l[A]), a.hasOwnProperty(A) && (z != null || C != null)))
            switch (A) {
              case 'type':
                u = z
                break
              case 'name':
                n = z
                break
              case 'checked':
                T = z
                break
              case 'defaultChecked':
                M = z
                break
              case 'value':
                r = z
                break
              case 'defaultValue':
                s = z
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(c(137, t))
                break
              default:
                z !== C && Ae(e, t, A, z, a, C)
            }
        }
        Ui(e, r, s, p, T, M, u, n)
        return
      case 'select':
        z = r = s = A = null
        for (u in l)
          if (((p = l[u]), l.hasOwnProperty(u) && p != null))
            switch (u) {
              case 'value':
                break
              case 'multiple':
                z = p
              default:
                a.hasOwnProperty(u) || Ae(e, t, u, null, a, p)
            }
        for (n in a)
          if (((u = a[n]), (p = l[n]), a.hasOwnProperty(n) && (u != null || p != null)))
            switch (n) {
              case 'value':
                A = u
                break
              case 'defaultValue':
                s = u
                break
              case 'multiple':
                r = u
              default:
                u !== p && Ae(e, t, n, u, a, p)
            }
        ;(t = s),
          (l = r),
          (a = z),
          A != null
            ? oa(e, !!l, A, !1)
            : !!a != !!l && (t != null ? oa(e, !!l, t, !0) : oa(e, !!l, l ? [] : '', !1))
        return
      case 'textarea':
        z = A = null
        for (s in l)
          if (((n = l[s]), l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s)))
            switch (s) {
              case 'value':
                break
              case 'children':
                break
              default:
                Ae(e, t, s, null, a, n)
            }
        for (r in a)
          if (((n = a[r]), (u = l[r]), a.hasOwnProperty(r) && (n != null || u != null)))
            switch (r) {
              case 'value':
                A = n
                break
              case 'defaultValue':
                z = n
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(c(91))
                break
              default:
                n !== u && Ae(e, t, r, n, a, u)
            }
        No(e, A, z)
        return
      case 'option':
        for (var ae in l)
          if (((A = l[ae]), l.hasOwnProperty(ae) && A != null && !a.hasOwnProperty(ae)))
            switch (ae) {
              case 'selected':
                e.selected = !1
                break
              default:
                Ae(e, t, ae, null, a, A)
            }
        for (p in a)
          if (((A = a[p]), (z = l[p]), a.hasOwnProperty(p) && A !== z && (A != null || z != null)))
            switch (p) {
              case 'selected':
                e.selected = A && typeof A != 'function' && typeof A != 'symbol'
                break
              default:
                Ae(e, t, p, A, a, z)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var te in l)
          (A = l[te]),
            l.hasOwnProperty(te) && A != null && !a.hasOwnProperty(te) && Ae(e, t, te, null, a, A)
        for (T in a)
          if (((A = a[T]), (z = l[T]), a.hasOwnProperty(T) && A !== z && (A != null || z != null)))
            switch (T) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(c(137, t))
                break
              default:
                Ae(e, t, T, A, a, z)
            }
        return
      default:
        if (Bi(t)) {
          for (var we in l)
            (A = l[we]),
              l.hasOwnProperty(we) &&
                A !== void 0 &&
                !a.hasOwnProperty(we) &&
                Sc(e, t, we, void 0, a, A)
          for (M in a)
            (A = a[M]),
              (z = l[M]),
              !a.hasOwnProperty(M) ||
                A === z ||
                (A === void 0 && z === void 0) ||
                Sc(e, t, M, A, a, z)
          return
        }
    }
    for (var S in l)
      (A = l[S]),
        l.hasOwnProperty(S) && A != null && !a.hasOwnProperty(S) && Ae(e, t, S, null, a, A)
    for (C in a)
      (A = a[C]),
        (z = l[C]),
        !a.hasOwnProperty(C) || A === z || (A == null && z == null) || Ae(e, t, C, A, a, z)
  }
  var Ec = null,
    Tc = null
  function ni(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function _d(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Dd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return e === 1 && t === 'foreignObject' ? 0 : e
  }
  function Ac(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var wc = null
  function tp() {
    var e = window.event
    return e && e.type === 'popstate' ? (e === wc ? !1 : ((wc = e), !0)) : ((wc = null), !1)
  }
  var Cd = typeof setTimeout == 'function' ? setTimeout : void 0,
    lp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ud = typeof Promise == 'function' ? Promise : void 0,
    ap =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ud < 'u'
          ? function (e) {
              return Ud.resolve(null).then(e).catch(np)
            }
          : Cd
  function np(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Nl(e) {
    return e === 'head'
  }
  function Hd(e, t) {
    var l = t,
      a = 0,
      n = 0
    do {
      var u = l.nextSibling
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a
            var r = e.ownerDocument
            if ((l & 1 && qn(r.documentElement), l & 2 && qn(r.body), l & 4))
              for (l = r.head, qn(l), r = l.firstChild; r; ) {
                var s = r.nextSibling,
                  p = r.nodeName
                r[Pa] ||
                  p === 'SCRIPT' ||
                  p === 'STYLE' ||
                  (p === 'LINK' && r.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(r),
                  (r = s)
              }
          }
          if (n === 0) {
            e.removeChild(u), Zn(t)
            return
          }
          n--
        } else l === '$' || l === '$?' || l === '$!' ? n++ : (a = l.charCodeAt(0) - 48)
      else a = 0
      l = u
    } while (l)
    Zn(t)
  }
  function zc(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          zc(l), Oi(l)
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      e.removeChild(l)
    }
  }
  function up(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
      } else if (a) {
        if (!e[Pa])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break
              return e
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break
              if (
                u !== n.rel ||
                e.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break
              return e
            case 'style':
              if (e.hasAttribute('data-precedence')) break
              return e
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e
      } else return e
      if (((e = Ot(e.nextSibling)), e === null)) break
    }
    return null
  }
  function ip(e, t, l) {
    if (t === '') return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Ot(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Rc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete')
  }
  function rp(e, t) {
    var l = e.ownerDocument
    if (e.data !== '$?' || l.readyState === 'complete') t()
    else {
      var a = function () {
        t(), l.removeEventListener('DOMContentLoaded', a)
      }
      l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a)
    }
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  var jc = null
  function Bd(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e
          t--
        } else l === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  function qd(e, t, l) {
    switch (((t = ni(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(c(452))
        return e
      case 'head':
        if (((e = t.head), !e)) throw Error(c(453))
        return e
      case 'body':
        if (((e = t.body), !e)) throw Error(c(454))
        return e
      default:
        throw Error(c(451))
    }
  }
  function qn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    Oi(e)
  }
  var Rt = new Map(),
    Gd = new Set()
  function ui(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument
  }
  var al = Y.d
  Y.d = { f: cp, r: op, D: sp, C: fp, L: dp, m: mp, X: yp, S: hp, M: pp }
  function cp() {
    var e = al.f(),
      t = Wu()
    return e || t
  }
  function op(e) {
    var t = ua(e)
    t !== null && t.tag === 5 && t.type === 'form' ? nf(t) : al.r(e)
  }
  var Ga = typeof document > 'u' ? null : document
  function Ld(e, t, l) {
    var a = Ga
    if (a && typeof t == 'string' && t) {
      var n = xt(t)
      ;(n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Gd.has(n) ||
          (Gd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')), Fe(t, 'link', e), Ve(t), a.head.appendChild(t)))
    }
  }
  function sp(e) {
    al.D(e), Ld('dns-prefetch', e, null)
  }
  function fp(e, t) {
    al.C(e, t), Ld('preconnect', e, t)
  }
  function dp(e, t, l) {
    al.L(e, t, l)
    var a = Ga
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + xt(t) + '"]'
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + xt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (n += '[imagesizes="' + xt(l.imageSizes) + '"]'))
        : (n += '[href="' + xt(e) + '"]')
      var u = n
      switch (t) {
        case 'style':
          u = La(e)
          break
        case 'script':
          u = Ya(e)
      }
      Rt.has(u) ||
        ((e = w(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Rt.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(Gn(u))) ||
          (t === 'script' && a.querySelector(Ln(u))) ||
          ((t = a.createElement('link')), Fe(t, 'link', e), Ve(t), a.head.appendChild(t)))
    }
  }
  function mp(e, t) {
    al.m(e, t)
    var l = Ga
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n = 'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(e) + '"]',
        u = n
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Ya(e)
      }
      if (
        !Rt.has(u) &&
        ((e = w({ rel: 'modulepreload', href: e }, t)), Rt.set(u, e), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Ln(u))) return
        }
        ;(a = l.createElement('link')), Fe(a, 'link', e), Ve(a), l.head.appendChild(a)
      }
    }
  }
  function hp(e, t, l) {
    al.S(e, t, l)
    var a = Ga
    if (a && e) {
      var n = ia(a).hoistableStyles,
        u = La(e)
      t = t || 'default'
      var r = n.get(u)
      if (!r) {
        var s = { loading: 0, preload: null }
        if ((r = a.querySelector(Gn(u)))) s.loading = 5
        else {
          ;(e = w({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Rt.get(u)) && Nc(e, l)
          var p = (r = a.createElement('link'))
          Ve(p),
            Fe(p, 'link', e),
            (p._p = new Promise(function (T, M) {
              ;(p.onload = T), (p.onerror = M)
            })),
            p.addEventListener('load', function () {
              s.loading |= 1
            }),
            p.addEventListener('error', function () {
              s.loading |= 2
            }),
            (s.loading |= 4),
            ii(r, t, a)
        }
        ;(r = { type: 'stylesheet', instance: r, count: 1, state: s }), n.set(u, r)
      }
    }
  }
  function yp(e, t) {
    al.X(e, t)
    var l = Ga
    if (l && e) {
      var a = ia(l).hoistableScripts,
        n = Ya(e),
        u = a.get(n)
      u ||
        ((u = l.querySelector(Ln(n))),
        u ||
          ((e = w({ src: e, async: !0 }, t)),
          (t = Rt.get(n)) && Mc(e, t),
          (u = l.createElement('script')),
          Ve(u),
          Fe(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function pp(e, t) {
    al.M(e, t)
    var l = Ga
    if (l && e) {
      var a = ia(l).hoistableScripts,
        n = Ya(e),
        u = a.get(n)
      u ||
        ((u = l.querySelector(Ln(n))),
        u ||
          ((e = w({ src: e, async: !0, type: 'module' }, t)),
          (t = Rt.get(n)) && Mc(e, t),
          (u = l.createElement('script')),
          Ve(u),
          Fe(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function Yd(e, t, l, a) {
    var n = (n = ne.current) ? ui(n) : null
    if (!n) throw Error(c(446))
    switch (e) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = La(l.href)),
            (l = ia(n).hoistableStyles),
            (a = l.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = La(l.href)
          var u = ia(n).hoistableStyles,
            r = u.get(e)
          if (
            (r ||
              ((n = n.ownerDocument || n),
              (r = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, r),
              (u = n.querySelector(Gn(e))) && !u._p && ((r.instance = u), (r.state.loading = 5)),
              Rt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Rt.set(e, l),
                u || vp(n, e, l, r.state))),
            t && a === null)
          )
            throw Error(c(528, ''))
          return r
        }
        if (t && a !== null) throw Error(c(529, ''))
        return null
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Ya(l)),
              (l = ia(n).hoistableScripts),
              (a = l.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(c(444, e))
    }
  }
  function La(e) {
    return 'href="' + xt(e) + '"'
  }
  function Gn(e) {
    return 'link[rel="stylesheet"][' + e + ']'
  }
  function kd(e) {
    return w({}, e, { 'data-precedence': e.precedence, precedence: null })
  }
  function vp(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        Fe(t, 'link', l),
        Ve(t),
        e.head.appendChild(t))
  }
  function Ya(e) {
    return '[src="' + xt(e) + '"]'
  }
  function Ln(e) {
    return 'script[async]' + e
  }
  function Xd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + xt(l.href) + '"]')
          if (a) return (t.instance = a), Ve(a), a
          var n = w({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          })
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Ve(a),
            Fe(a, 'style', n),
            ii(a, l.precedence, e),
            (t.instance = a)
          )
        case 'stylesheet':
          n = La(l.href)
          var u = e.querySelector(Gn(n))
          if (u) return (t.state.loading |= 4), (t.instance = u), Ve(u), u
          ;(a = kd(l)),
            (n = Rt.get(n)) && Nc(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Ve(u)
          var r = u
          return (
            (r._p = new Promise(function (s, p) {
              ;(r.onload = s), (r.onerror = p)
            })),
            Fe(u, 'link', a),
            (t.state.loading |= 4),
            ii(u, l.precedence, e),
            (t.instance = u)
          )
        case 'script':
          return (
            (u = Ya(l.src)),
            (n = e.querySelector(Ln(u)))
              ? ((t.instance = n), Ve(n), n)
              : ((a = l),
                (n = Rt.get(u)) && ((a = w({}, l)), Mc(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement('script')),
                Ve(n),
                Fe(n, 'link', a),
                e.head.appendChild(n),
                (t.instance = n))
          )
        case 'void':
          return null
        default:
          throw Error(c(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ii(a, l.precedence, e))
    return t.instance
  }
  function ii(e, t, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        r = 0;
      r < a.length;
      r++
    ) {
      var s = a[r]
      if (s.dataset.precedence === t) u = s
      else if (u !== n) break
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild))
  }
  function Nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title)
  }
  function Mc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity)
  }
  var ri = null
  function Qd(e, t, l) {
    if (ri === null) {
      var a = new Map(),
        n = (ri = new Map())
      n.set(l, a)
    } else (n = ri), (a = n.get(l)), a || ((a = new Map()), n.set(l, a))
    if (a.has(e)) return a
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n]
      if (
        !(u[Pa] || u[Pe] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var r = u.getAttribute(t) || ''
        r = e + r
        var s = a.get(r)
        s ? s.push(u) : a.set(r, [u])
      }
    }
    return a
  }
  function Vd(e, t, l) {
    ;(e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null)
  }
  function gp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1
    switch (e) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null
          default:
            return !0
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function Zd(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
  }
  var Yn = null
  function bp() {}
  function xp(e, t, l) {
    if (Yn === null) throw Error(c(475))
    var a = Yn
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = La(l.href),
          u = e.querySelector(Gn(n))
        if (u) {
          ;(e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = ci.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            Ve(u)
          return
        }
        ;(u = e.ownerDocument || e),
          (l = kd(l)),
          (n = Rt.get(n)) && Nc(l, n),
          (u = u.createElement('link')),
          Ve(u)
        var r = u
        ;(r._p = new Promise(function (s, p) {
          ;(r.onload = s), (r.onerror = p)
        })),
          Fe(u, 'link', l),
          (t.instance = u)
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = ci.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t))
    }
  }
  function Sp() {
    if (Yn === null) throw Error(c(475))
    var e = Yn
    return (
      e.stylesheets && e.count === 0 && Oc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Oc(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend
                ;(e.unsuspend = null), a()
              }
            }, 6e4)
            return (
              (e.unsuspend = t),
              function () {
                ;(e.unsuspend = null), clearTimeout(l)
              }
            )
          }
        : null
    )
  }
  function ci() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Oc(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;(this.unsuspend = null), e()
      }
    }
  }
  var oi = null
  function Oc(e, t) {
    ;(e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (oi = new Map()), t.forEach(Ep, e), (oi = null), ci.call(e))
  }
  function Ep(e, t) {
    if (!(t.state.loading & 4)) {
      var l = oi.get(e)
      if (l) var a = l.get(null)
      else {
        ;(l = new Map()), oi.set(e, l)
        for (
          var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < n.length;
          u++
        ) {
          var r = n[u]
          ;(r.nodeName === 'LINK' || r.getAttribute('media') !== 'not all') &&
            (l.set(r.dataset.precedence, r), (a = r))
        }
        a && l.set(null, a)
      }
      ;(n = t.instance),
        (r = n.getAttribute('data-precedence')),
        (u = l.get(r) || a),
        u === a && l.set(null, n),
        l.set(r, n),
        this.count++,
        (a = ci.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4)
    }
  }
  var kn = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  }
  function Tp(e, t, l, a, n, u, r, s) {
    ;(this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ri(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ri(0)),
      (this.hiddenUpdates = Ri(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map())
  }
  function Kd(e, t, l, a, n, u, r, s, p, T, M, C) {
    return (
      (e = new Tp(e, t, l, r, s, p, T, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = dt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = dr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      pr(u),
      e
    )
  }
  function Jd(e) {
    return e ? ((e = ga), e) : ga
  }
  function $d(e, t, l, a, n, u) {
    ;(n = Jd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = pl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = vl(e, a, t)),
      l !== null && (vt(l, e, t), gn(l, e, t))
  }
  function Wd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }
  function _c(e, t) {
    Wd(e, t), (e = e.alternate) && Wd(e, t)
  }
  function Fd(e) {
    if (e.tag === 13) {
      var t = va(e, 67108864)
      t !== null && vt(t, e, 67108864), _c(e, 67108864)
    }
  }
  var si = !0
  function Ap(e, t, l, a) {
    var n = j.T
    j.T = null
    var u = Y.p
    try {
      ;(Y.p = 2), Dc(e, t, l, a)
    } finally {
      ;(Y.p = u), (j.T = n)
    }
  }
  function wp(e, t, l, a) {
    var n = j.T
    j.T = null
    var u = Y.p
    try {
      ;(Y.p = 8), Dc(e, t, l, a)
    } finally {
      ;(Y.p = u), (j.T = n)
    }
  }
  function Dc(e, t, l, a) {
    if (si) {
      var n = Cc(a)
      if (n === null) xc(e, t, a, fi, l), Id(e, a)
      else if (Rp(n, e, t, l, a)) a.stopPropagation()
      else if ((Id(e, a), t & 4 && -1 < zp.indexOf(e))) {
        for (; n !== null; ) {
          var u = ua(n)
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var r = Bl(u.pendingLanes)
                  if (r !== 0) {
                    var s = u
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r; ) {
                      var p = 1 << (31 - st(r))
                      ;(s.entanglements[1] |= p), (r &= ~p)
                    }
                    Gt(u), (be & 6) === 0 && ((Ju = Ct() + 500), Un(0))
                  }
                }
                break
              case 13:
                ;(s = va(u, 2)), s !== null && vt(s, u, 2), Wu(), _c(u, 2)
            }
          if (((u = Cc(a)), u === null && xc(e, t, a, fi, l), u === n)) break
          n = u
        }
        n !== null && a.stopPropagation()
      } else xc(e, t, a, null, l)
    }
  }
  function Cc(e) {
    return (e = Gi(e)), Uc(e)
  }
  var fi = null
  function Uc(e) {
    if (((fi = null), (e = na(e)), e !== null)) {
      var t = y(e)
      if (t === null) e = null
      else {
        var l = t.tag
        if (l === 13) {
          if (((e = x(t)), e !== null)) return e
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return (fi = e), null
  }
  function Pd(e) {
    switch (e) {
      case 'beforetoggle':
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
      case 'toggle':
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
        return 2
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
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (fh()) {
          case so:
            return 2
          case fo:
            return 8
          case au:
          case dh:
            return 32
          case mo:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Hc = !1,
    Ml = null,
    Ol = null,
    _l = null,
    Xn = new Map(),
    Qn = new Map(),
    Dl = [],
    zp =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function Id(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ml = null
        break
      case 'dragenter':
      case 'dragleave':
        Ol = null
        break
      case 'mouseover':
      case 'mouseout':
        _l = null
        break
      case 'pointerover':
      case 'pointerout':
        Xn.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Qn.delete(t.pointerId)
    }
  }
  function Vn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = ua(t)), t !== null && Fd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
  }
  function Rp(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return (Ml = Vn(Ml, e, t, l, a, n)), !0
      case 'dragenter':
        return (Ol = Vn(Ol, e, t, l, a, n)), !0
      case 'mouseover':
        return (_l = Vn(_l, e, t, l, a, n)), !0
      case 'pointerover':
        var u = n.pointerId
        return Xn.set(u, Vn(Xn.get(u) || null, e, t, l, a, n)), !0
      case 'gotpointercapture':
        return (u = n.pointerId), Qn.set(u, Vn(Qn.get(u) || null, e, t, l, a, n)), !0
    }
    return !1
  }
  function em(e) {
    var t = na(e.target)
    if (t !== null) {
      var l = y(t)
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = x(l)), t !== null)) {
            ;(e.blockedOn = t),
              xh(e.priority, function () {
                if (l.tag === 13) {
                  var a = pt()
                  a = ji(a)
                  var n = va(l, a)
                  n !== null && vt(n, l, a), _c(l, a)
                }
              })
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function di(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Cc(e.nativeEvent)
      if (l === null) {
        l = e.nativeEvent
        var a = new l.constructor(l.type, l)
        ;(qi = a), l.target.dispatchEvent(a), (qi = null)
      } else return (t = ua(l)), t !== null && Fd(t), (e.blockedOn = l), !1
      t.shift()
    }
    return !0
  }
  function tm(e, t, l) {
    di(e) && l.delete(t)
  }
  function jp() {
    ;(Hc = !1),
      Ml !== null && di(Ml) && (Ml = null),
      Ol !== null && di(Ol) && (Ol = null),
      _l !== null && di(_l) && (_l = null),
      Xn.forEach(tm),
      Qn.forEach(tm)
  }
  function mi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Hc || ((Hc = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, jp)))
  }
  var hi = null
  function lm(e) {
    hi !== e &&
      ((hi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        hi === e && (hi = null)
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2]
          if (typeof a != 'function') {
            if (Uc(a || l) === null) continue
            break
          }
          var u = ua(l)
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ur(u, { pending: !0, data: n, method: l.method, action: a }, a, n))
        }
      }))
  }
  function Zn(e) {
    function t(p) {
      return mi(p, e)
    }
    Ml !== null && mi(Ml, e),
      Ol !== null && mi(Ol, e),
      _l !== null && mi(_l, e),
      Xn.forEach(t),
      Qn.forEach(t)
    for (var l = 0; l < Dl.length; l++) {
      var a = Dl[l]
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < Dl.length && ((l = Dl[0]), l.blockedOn === null); )
      em(l), l.blockedOn === null && Dl.shift()
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          r = n[at] || null
        if (typeof u == 'function') r || lm(l)
        else if (r) {
          var s = null
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (r = u[at] || null))) s = r.formAction
            else if (Uc(n) !== null) continue
          } else s = r.action
          typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)), lm(l)
        }
      }
  }
  function Bc(e) {
    this._internalRoot = e
  }
  ;(yi.prototype.render = Bc.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(c(409))
      var l = t.current,
        a = pt()
      $d(l, a, e, t, null, null)
    }),
    (yi.prototype.unmount = Bc.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          $d(e.current, 2, null, e, null, null), Wu(), (t[aa] = null)
        }
      })
  function yi(e) {
    this._internalRoot = e
  }
  yi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = go()
      e = { blockedOn: null, target: e, priority: t }
      for (var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
      Dl.splice(l, 0, e), l === 0 && em(e)
    }
  }
  var am = o.version
  if (am !== '19.1.0') throw Error(c(527, am, '19.1.0'))
  Y.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(c(188))
        : ((e = Object.keys(e).join(',')), Error(c(268, e)))
    return (e = v(t)), (e = e !== null ? h(e) : null), (e = e === null ? null : e.stateNode), e
  }
  var Np = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: j,
    reconcilerVersion: '19.1.0',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var pi = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!pi.isDisabled && pi.supportsFiber)
      try {
        ;($a = pi.inject(Np)), (ot = pi)
      } catch {}
  }
  return (
    (Jn.createRoot = function (e, t) {
      if (!m(e)) throw Error(c(299))
      var l = !1,
        a = '',
        n = bf,
        u = xf,
        r = Sf,
        s = null
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (s = t.unstable_transitionCallbacks)),
        (t = Kd(e, 1, !1, null, null, l, a, n, u, r, s, null)),
        (e[aa] = t.current),
        bc(e),
        new Bc(t)
      )
    }),
    (Jn.hydrateRoot = function (e, t, l) {
      if (!m(e)) throw Error(c(299))
      var a = !1,
        n = '',
        u = bf,
        r = xf,
        s = Sf,
        p = null,
        T = null
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (r = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (p = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (T = l.formState)),
        (t = Kd(e, 1, !0, t, l ?? null, a, n, u, r, s, p, T)),
        (t.context = Jd(null)),
        (l = t.current),
        (a = pt()),
        (a = ji(a)),
        (n = pl(a)),
        (n.callback = null),
        vl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Fa(t, l),
        Gt(t),
        (e[aa] = t.current),
        bc(e),
        new yi(t)
      )
    }),
    (Jn.version = '19.1.0'),
    Jn
  )
}
var mm
function Gp() {
  if (mm) return Lc.exports
  mm = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (o) {
        console.error(o)
      }
  }
  return i(), (Lc.exports = qp()), Lc.exports
}
var Lp = Gp(),
  $n = {},
  hm
function Yp() {
  if (hm) return $n
  ;(hm = 1),
    Object.defineProperty($n, '__esModule', { value: !0 }),
    ($n.parse = x),
    ($n.serialize = h)
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    f = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/,
    m = Object.prototype.toString,
    y = (() => {
      const O = function () {}
      return (O.prototype = Object.create(null)), O
    })()
  function x(O, k) {
    const D = new y(),
      L = O.length
    if (L < 2) return D
    const X = (k == null ? void 0 : k.decode) || w
    let G = 0
    do {
      const V = O.indexOf('=', G)
      if (V === -1) break
      const ee = O.indexOf(';', G),
        ie = ee === -1 ? L : ee
      if (V > ie) {
        G = O.lastIndexOf(';', V - 1) + 1
        continue
      }
      const I = R(O, G, V),
        Se = v(O, V, I),
        Ee = O.slice(I, Se)
      if (D[Ee] === void 0) {
        let K = R(O, V + 1, ie),
          me = v(O, ie, K)
        const Qe = X(O.slice(K, me))
        D[Ee] = Qe
      }
      G = ie + 1
    } while (G < L)
    return D
  }
  function R(O, k, D) {
    do {
      const L = O.charCodeAt(k)
      if (L !== 32 && L !== 9) return k
    } while (++k < D)
    return D
  }
  function v(O, k, D) {
    for (; k > D; ) {
      const L = O.charCodeAt(--k)
      if (L !== 32 && L !== 9) return k + 1
    }
    return D
  }
  function h(O, k, D) {
    const L = (D == null ? void 0 : D.encode) || encodeURIComponent
    if (!i.test(O)) throw new TypeError(`argument name is invalid: ${O}`)
    const X = L(k)
    if (!o.test(X)) throw new TypeError(`argument val is invalid: ${k}`)
    let G = O + '=' + X
    if (!D) return G
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`)
      G += '; Max-Age=' + D.maxAge
    }
    if (D.domain) {
      if (!f.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`)
      G += '; Domain=' + D.domain
    }
    if (D.path) {
      if (!c.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`)
      G += '; Path=' + D.path
    }
    if (D.expires) {
      if (!H(D.expires) || !Number.isFinite(D.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${D.expires}`)
      G += '; Expires=' + D.expires.toUTCString()
    }
    if (
      (D.httpOnly && (G += '; HttpOnly'),
      D.secure && (G += '; Secure'),
      D.partitioned && (G += '; Partitioned'),
      D.priority)
    )
      switch (typeof D.priority == 'string' ? D.priority.toLowerCase() : void 0) {
        case 'low':
          G += '; Priority=Low'
          break
        case 'medium':
          G += '; Priority=Medium'
          break
        case 'high':
          G += '; Priority=High'
          break
        default:
          throw new TypeError(`option priority is invalid: ${D.priority}`)
      }
    if (D.sameSite)
      switch (typeof D.sameSite == 'string' ? D.sameSite.toLowerCase() : D.sameSite) {
        case !0:
        case 'strict':
          G += '; SameSite=Strict'
          break
        case 'lax':
          G += '; SameSite=Lax'
          break
        case 'none':
          G += '; SameSite=None'
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)
      }
    return G
  }
  function w(O) {
    if (O.indexOf('%') === -1) return O
    try {
      return decodeURIComponent(O)
    } catch {
      return O
    }
  }
  function H(O) {
    return m.call(O) === '[object Date]'
  }
  return $n
}
Yp()
var ym = 'popstate'
function kp(i = {}) {
  function o(c, m) {
    let { pathname: y, search: x, hash: R } = c.location
    return Jc(
      '',
      { pathname: y, search: x, hash: R },
      (m.state && m.state.usr) || null,
      (m.state && m.state.key) || 'default'
    )
  }
  function f(c, m) {
    return typeof m == 'string' ? m : Pn(m)
  }
  return Qp(o, f, null, i)
}
function De(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o)
}
function Lt(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function Xp() {
  return Math.random().toString(36).substring(2, 10)
}
function pm(i, o) {
  return { usr: i.state, key: i.key, idx: o }
}
function Jc(i, o, f = null, c) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? Xa(o) : o),
    state: f,
    key: (o && o.key) || c || Xp(),
  }
}
function Pn({ pathname: i = '/', search: o = '', hash: f = '' }) {
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    f && f !== '#' && (i += f.charAt(0) === '#' ? f : '#' + f),
    i
  )
}
function Xa(i) {
  let o = {}
  if (i) {
    let f = i.indexOf('#')
    f >= 0 && ((o.hash = i.substring(f)), (i = i.substring(0, f)))
    let c = i.indexOf('?')
    c >= 0 && ((o.search = i.substring(c)), (i = i.substring(0, c))), i && (o.pathname = i)
  }
  return o
}
function Qp(i, o, f, c = {}) {
  let { window: m = document.defaultView, v5Compat: y = !1 } = c,
    x = m.history,
    R = 'POP',
    v = null,
    h = w()
  h == null && ((h = 0), x.replaceState({ ...x.state, idx: h }, ''))
  function w() {
    return (x.state || { idx: null }).idx
  }
  function H() {
    R = 'POP'
    let X = w(),
      G = X == null ? null : X - h
    ;(h = X), v && v({ action: R, location: L.location, delta: G })
  }
  function O(X, G) {
    R = 'PUSH'
    let V = Jc(L.location, X, G)
    h = w() + 1
    let ee = pm(V, h),
      ie = L.createHref(V)
    try {
      x.pushState(ee, '', ie)
    } catch (I) {
      if (I instanceof DOMException && I.name === 'DataCloneError') throw I
      m.location.assign(ie)
    }
    y && v && v({ action: R, location: L.location, delta: 1 })
  }
  function k(X, G) {
    R = 'REPLACE'
    let V = Jc(L.location, X, G)
    h = w()
    let ee = pm(V, h),
      ie = L.createHref(V)
    x.replaceState(ee, '', ie), y && v && v({ action: R, location: L.location, delta: 0 })
  }
  function D(X) {
    return Vp(X)
  }
  let L = {
    get action() {
      return R
    },
    get location() {
      return i(m, x)
    },
    listen(X) {
      if (v) throw new Error('A history only accepts one active listener')
      return (
        m.addEventListener(ym, H),
        (v = X),
        () => {
          m.removeEventListener(ym, H), (v = null)
        }
      )
    },
    createHref(X) {
      return o(m, X)
    },
    createURL: D,
    encodeLocation(X) {
      let G = D(X)
      return { pathname: G.pathname, search: G.search, hash: G.hash }
    },
    push: O,
    replace: k,
    go(X) {
      return x.go(X)
    },
  }
  return L
}
function Vp(i, o = !1) {
  let f = 'http://localhost'
  typeof window < 'u' &&
    (f = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    De(f, 'No window.location.(origin|href) available to create URL')
  let c = typeof i == 'string' ? i : Pn(i)
  return (c = c.replace(/ $/, '%20')), !o && c.startsWith('//') && (c = f + c), new URL(c, f)
}
function Rm(i, o, f = '/') {
  return Zp(i, o, f, !1)
}
function Zp(i, o, f, c) {
  let m = typeof o == 'string' ? Xa(o) : o,
    y = il(m.pathname || '/', f)
  if (y == null) return null
  let x = jm(i)
  Kp(x)
  let R = null
  for (let v = 0; R == null && v < x.length; ++v) {
    let h = nv(y)
    R = lv(x[v], h, c)
  }
  return R
}
function jm(i, o = [], f = [], c = '') {
  let m = (y, x, R) => {
    let v = {
      relativePath: R === void 0 ? y.path || '' : R,
      caseSensitive: y.caseSensitive === !0,
      childrenIndex: x,
      route: y,
    }
    v.relativePath.startsWith('/') &&
      (De(
        v.relativePath.startsWith(c),
        `Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(c.length)))
    let h = ul([c, v.relativePath]),
      w = f.concat(v)
    y.children &&
      y.children.length > 0 &&
      (De(
        y.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      jm(y.children, o, w, h)),
      !(y.path == null && !y.index) && o.push({ path: h, score: ev(h, y.index), routesMeta: w })
  }
  return (
    i.forEach((y, x) => {
      var R
      if (y.path === '' || !((R = y.path) != null && R.includes('?'))) m(y, x)
      else for (let v of Nm(y.path)) m(y, x, v)
    }),
    o
  )
}
function Nm(i) {
  let o = i.split('/')
  if (o.length === 0) return []
  let [f, ...c] = o,
    m = f.endsWith('?'),
    y = f.replace(/\?$/, '')
  if (c.length === 0) return m ? [y, ''] : [y]
  let x = Nm(c.join('/')),
    R = []
  return (
    R.push(...x.map((v) => (v === '' ? y : [y, v].join('/')))),
    m && R.push(...x),
    R.map((v) => (i.startsWith('/') && v === '' ? '/' : v))
  )
}
function Kp(i) {
  i.sort((o, f) =>
    o.score !== f.score
      ? f.score - o.score
      : tv(
          o.routesMeta.map((c) => c.childrenIndex),
          f.routesMeta.map((c) => c.childrenIndex)
        )
  )
}
var Jp = /^:[\w-]+$/,
  $p = 3,
  Wp = 2,
  Fp = 1,
  Pp = 10,
  Ip = -2,
  vm = (i) => i === '*'
function ev(i, o) {
  let f = i.split('/'),
    c = f.length
  return (
    f.some(vm) && (c += Ip),
    o && (c += Wp),
    f.filter((m) => !vm(m)).reduce((m, y) => m + (Jp.test(y) ? $p : y === '' ? Fp : Pp), c)
  )
}
function tv(i, o) {
  return i.length === o.length && i.slice(0, -1).every((c, m) => c === o[m])
    ? i[i.length - 1] - o[o.length - 1]
    : 0
}
function lv(i, o, f = !1) {
  let { routesMeta: c } = i,
    m = {},
    y = '/',
    x = []
  for (let R = 0; R < c.length; ++R) {
    let v = c[R],
      h = R === c.length - 1,
      w = y === '/' ? o : o.slice(y.length) || '/',
      H = Ei({ path: v.relativePath, caseSensitive: v.caseSensitive, end: h }, w),
      O = v.route
    if (
      (!H &&
        h &&
        f &&
        !c[c.length - 1].route.index &&
        (H = Ei({ path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 }, w)),
      !H)
    )
      return null
    Object.assign(m, H.params),
      x.push({
        params: m,
        pathname: ul([y, H.pathname]),
        pathnameBase: cv(ul([y, H.pathnameBase])),
        route: O,
      }),
      H.pathnameBase !== '/' && (y = ul([y, H.pathnameBase]))
  }
  return x
}
function Ei(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [f, c] = av(i.path, i.caseSensitive, i.end),
    m = o.match(f)
  if (!m) return null
  let y = m[0],
    x = y.replace(/(.)\/+$/, '$1'),
    R = m.slice(1)
  return {
    params: c.reduce((h, { paramName: w, isOptional: H }, O) => {
      if (w === '*') {
        let D = R[O] || ''
        x = y.slice(0, y.length - D.length).replace(/(.)\/+$/, '$1')
      }
      const k = R[O]
      return H && !k ? (h[w] = void 0) : (h[w] = (k || '').replace(/%2F/g, '/')), h
    }, {}),
    pathname: y,
    pathnameBase: x,
    pattern: i,
  }
}
function av(i, o = !1, f = !0) {
  Lt(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`
  )
  let c = [],
    m =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, R, v) => (
            c.push({ paramName: R, isOptional: v != null }), v ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    i.endsWith('*')
      ? (c.push({ paramName: '*' }), (m += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : f
        ? (m += '\\/*$')
        : i !== '' && i !== '/' && (m += '(?:(?=\\/|$))'),
    [new RegExp(m, o ? void 0 : 'i'), c]
  )
}
function nv(i) {
  try {
    return i
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/')
  } catch (o) {
    return (
      Lt(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      i
    )
  }
}
function il(i, o) {
  if (o === '/') return i
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null
  let f = o.endsWith('/') ? o.length - 1 : o.length,
    c = i.charAt(f)
  return c && c !== '/' ? null : i.slice(f) || '/'
}
function uv(i, o = '/') {
  let { pathname: f, search: c = '', hash: m = '' } = typeof i == 'string' ? Xa(i) : i
  return { pathname: f ? (f.startsWith('/') ? f : iv(f, o)) : o, search: ov(c), hash: sv(m) }
}
function iv(i, o) {
  let f = o.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach((m) => {
      m === '..' ? f.length > 1 && f.pop() : m !== '.' && f.push(m)
    }),
    f.length > 1 ? f.join('/') : '/'
  )
}
function Qc(i, o, f, c) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function rv(i) {
  return i.filter((o, f) => f === 0 || (o.route.path && o.route.path.length > 0))
}
function Mm(i) {
  let o = rv(i)
  return o.map((f, c) => (c === o.length - 1 ? f.pathname : f.pathnameBase))
}
function Om(i, o, f, c = !1) {
  let m
  typeof i == 'string'
    ? (m = Xa(i))
    : ((m = { ...i }),
      De(!m.pathname || !m.pathname.includes('?'), Qc('?', 'pathname', 'search', m)),
      De(!m.pathname || !m.pathname.includes('#'), Qc('#', 'pathname', 'hash', m)),
      De(!m.search || !m.search.includes('#'), Qc('#', 'search', 'hash', m)))
  let y = i === '' || m.pathname === '',
    x = y ? '/' : m.pathname,
    R
  if (x == null) R = f
  else {
    let H = o.length - 1
    if (!c && x.startsWith('..')) {
      let O = x.split('/')
      for (; O[0] === '..'; ) O.shift(), (H -= 1)
      m.pathname = O.join('/')
    }
    R = H >= 0 ? o[H] : '/'
  }
  let v = uv(m, R),
    h = x && x !== '/' && x.endsWith('/'),
    w = (y || x === '.') && f.endsWith('/')
  return !v.pathname.endsWith('/') && (h || w) && (v.pathname += '/'), v
}
var ul = (i) => i.join('/').replace(/\/\/+/g, '/'),
  cv = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ov = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  sv = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i)
function fv(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  )
}
var _m = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(_m)
var dv = ['GET', ..._m]
new Set(dv)
var Qa = N.createContext(null)
Qa.displayName = 'DataRouter'
var Ti = N.createContext(null)
Ti.displayName = 'DataRouterState'
var Dm = N.createContext({ isTransitioning: !1 })
Dm.displayName = 'ViewTransition'
var mv = N.createContext(new Map())
mv.displayName = 'Fetchers'
var hv = N.createContext(null)
hv.displayName = 'Await'
var Yt = N.createContext(null)
Yt.displayName = 'Navigation'
var In = N.createContext(null)
In.displayName = 'Location'
var kt = N.createContext({ outlet: null, matches: [], isDataRoute: !1 })
kt.displayName = 'Route'
var ao = N.createContext(null)
ao.displayName = 'RouteError'
function yv(i, { relative: o } = {}) {
  De(eu(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: f, navigator: c } = N.useContext(Yt),
    { hash: m, pathname: y, search: x } = tu(i, { relative: o }),
    R = y
  return (
    f !== '/' && (R = y === '/' ? f : ul([f, y])), c.createHref({ pathname: R, search: x, hash: m })
  )
}
function eu() {
  return N.useContext(In) != null
}
function Hl() {
  return (
    De(eu(), 'useLocation() may be used only in the context of a <Router> component.'),
    N.useContext(In).location
  )
}
var Cm =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Um(i) {
  N.useContext(Yt).static || N.useLayoutEffect(i)
}
function pv() {
  let { isDataRoute: i } = N.useContext(kt)
  return i ? Ov() : vv()
}
function vv() {
  De(eu(), 'useNavigate() may be used only in the context of a <Router> component.')
  let i = N.useContext(Qa),
    { basename: o, navigator: f } = N.useContext(Yt),
    { matches: c } = N.useContext(kt),
    { pathname: m } = Hl(),
    y = JSON.stringify(Mm(c)),
    x = N.useRef(!1)
  return (
    Um(() => {
      x.current = !0
    }),
    N.useCallback(
      (v, h = {}) => {
        if ((Lt(x.current, Cm), !x.current)) return
        if (typeof v == 'number') {
          f.go(v)
          return
        }
        let w = Om(v, JSON.parse(y), m, h.relative === 'path')
        i == null && o !== '/' && (w.pathname = w.pathname === '/' ? o : ul([o, w.pathname])),
          (h.replace ? f.replace : f.push)(w, h.state, h)
      },
      [o, f, y, m, i]
    )
  )
}
var gv = N.createContext(null)
function bv(i) {
  let o = N.useContext(kt).outlet
  return o && N.createElement(gv.Provider, { value: i }, o)
}
function tu(i, { relative: o } = {}) {
  let { matches: f } = N.useContext(kt),
    { pathname: c } = Hl(),
    m = JSON.stringify(Mm(f))
  return N.useMemo(() => Om(i, JSON.parse(m), c, o === 'path'), [i, m, c, o])
}
function xv(i, o) {
  return Hm(i, o)
}
function Hm(i, o, f, c) {
  var G
  De(eu(), 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: m } = N.useContext(Yt),
    { matches: y } = N.useContext(kt),
    x = y[y.length - 1],
    R = x ? x.params : {},
    v = x ? x.pathname : '/',
    h = x ? x.pathnameBase : '/',
    w = x && x.route
  {
    let V = (w && w.path) || ''
    Bm(
      v,
      !w || V.endsWith('*') || V.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === '/' ? '*' : `${V}/*`}">.`
    )
  }
  let H = Hl(),
    O
  if (o) {
    let V = typeof o == 'string' ? Xa(o) : o
    De(
      h === '/' || ((G = V.pathname) == null ? void 0 : G.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (O = V)
  } else O = H
  let k = O.pathname || '/',
    D = k
  if (h !== '/') {
    let V = h.replace(/^\//, '').split('/')
    D = '/' + k.replace(/^\//, '').split('/').slice(V.length).join('/')
  }
  let L = Rm(i, { pathname: D })
  Lt(w || L != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `),
    Lt(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    )
  let X = wv(
    L &&
      L.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, R, V.params),
          pathname: ul([h, m.encodeLocation ? m.encodeLocation(V.pathname).pathname : V.pathname]),
          pathnameBase:
            V.pathnameBase === '/'
              ? h
              : ul([
                  h,
                  m.encodeLocation ? m.encodeLocation(V.pathnameBase).pathname : V.pathnameBase,
                ]),
        })
      ),
    y,
    f,
    c
  )
  return o && X
    ? N.createElement(
        In.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...O },
            navigationType: 'POP',
          },
        },
        X
      )
    : X
}
function Sv() {
  let i = Mv(),
    o = fv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
    f = i instanceof Error ? i.stack : null,
    c = 'rgba(200,200,200, 0.5)',
    m = { padding: '0.5rem', backgroundColor: c },
    y = { padding: '2px 4px', backgroundColor: c },
    x = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (x = N.createElement(
      N.Fragment,
      null,
      N.createElement('p', null, '💿 Hey developer 👋'),
      N.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        N.createElement('code', { style: y }, 'ErrorBoundary'),
        ' or',
        ' ',
        N.createElement('code', { style: y }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement('h2', null, 'Unexpected Application Error!'),
      N.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      f ? N.createElement('pre', { style: m }, f) : null,
      x
    )
  )
}
var Ev = N.createElement(Sv, null),
  Tv = class extends N.Component {
    constructor(i) {
      super(i),
        (this.state = { location: i.location, revalidation: i.revalidation, error: i.error })
    }
    static getDerivedStateFromError(i) {
      return { error: i }
    }
    static getDerivedStateFromProps(i, o) {
      return o.location !== i.location || (o.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          }
    }
    componentDidCatch(i, o) {
      console.error('React Router caught the following error during render', i, o)
    }
    render() {
      return this.state.error !== void 0
        ? N.createElement(
            kt.Provider,
            { value: this.props.routeContext },
            N.createElement(ao.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children
    }
  }
function Av({ routeContext: i, match: o, children: f }) {
  let c = N.useContext(Qa)
  return (
    c &&
      c.static &&
      c.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    N.createElement(kt.Provider, { value: i }, f)
  )
}
function wv(i, o = [], f = null, c = null) {
  if (i == null) {
    if (!f) return null
    if (f.errors) i = f.matches
    else if (o.length === 0 && !f.initialized && f.matches.length > 0) i = f.matches
    else return null
  }
  let m = i,
    y = f == null ? void 0 : f.errors
  if (y != null) {
    let v = m.findIndex((h) => h.route.id && (y == null ? void 0 : y[h.route.id]) !== void 0)
    De(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(y).join(',')}`
    ),
      (m = m.slice(0, Math.min(m.length, v + 1)))
  }
  let x = !1,
    R = -1
  if (f)
    for (let v = 0; v < m.length; v++) {
      let h = m[v]
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (R = v), h.route.id)) {
        let { loaderData: w, errors: H } = f,
          O = h.route.loader && !w.hasOwnProperty(h.route.id) && (!H || H[h.route.id] === void 0)
        if (h.route.lazy || O) {
          ;(x = !0), R >= 0 ? (m = m.slice(0, R + 1)) : (m = [m[0]])
          break
        }
      }
    }
  return m.reduceRight((v, h, w) => {
    let H,
      O = !1,
      k = null,
      D = null
    f &&
      ((H = y && h.route.id ? y[h.route.id] : void 0),
      (k = h.route.errorElement || Ev),
      x &&
        (R < 0 && w === 0
          ? (Bm(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (O = !0),
            (D = null))
          : R === w && ((O = !0), (D = h.route.hydrateFallbackElement || null))))
    let L = o.concat(m.slice(0, w + 1)),
      X = () => {
        let G
        return (
          H
            ? (G = k)
            : O
              ? (G = D)
              : h.route.Component
                ? (G = N.createElement(h.route.Component, null))
                : h.route.element
                  ? (G = h.route.element)
                  : (G = v),
          N.createElement(Av, {
            match: h,
            routeContext: { outlet: v, matches: L, isDataRoute: f != null },
            children: G,
          })
        )
      }
    return f && (h.route.ErrorBoundary || h.route.errorElement || w === 0)
      ? N.createElement(Tv, {
          location: f.location,
          revalidation: f.revalidation,
          component: k,
          error: H,
          children: X(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : X()
  }, null)
}
function no(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function zv(i) {
  let o = N.useContext(Qa)
  return De(o, no(i)), o
}
function Rv(i) {
  let o = N.useContext(Ti)
  return De(o, no(i)), o
}
function jv(i) {
  let o = N.useContext(kt)
  return De(o, no(i)), o
}
function uo(i) {
  let o = jv(i),
    f = o.matches[o.matches.length - 1]
  return De(f.route.id, `${i} can only be used on routes that contain a unique "id"`), f.route.id
}
function Nv() {
  return uo('useRouteId')
}
function Mv() {
  var c
  let i = N.useContext(ao),
    o = Rv('useRouteError'),
    f = uo('useRouteError')
  return i !== void 0 ? i : (c = o.errors) == null ? void 0 : c[f]
}
function Ov() {
  let { router: i } = zv('useNavigate'),
    o = uo('useNavigate'),
    f = N.useRef(!1)
  return (
    Um(() => {
      f.current = !0
    }),
    N.useCallback(
      async (m, y = {}) => {
        Lt(f.current, Cm),
          f.current &&
            (typeof m == 'number' ? i.navigate(m) : await i.navigate(m, { fromRouteId: o, ...y }))
      },
      [i, o]
    )
  )
}
var gm = {}
function Bm(i, o, f) {
  !o && !gm[i] && ((gm[i] = !0), Lt(!1, f))
}
N.memo(_v)
function _v({ routes: i, future: o, state: f }) {
  return Hm(i, void 0, f, o)
}
function Dv(i) {
  return bv(i.context)
}
function gt(i) {
  De(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function Cv({
  basename: i = '/',
  children: o = null,
  location: f,
  navigationType: c = 'POP',
  navigator: m,
  static: y = !1,
}) {
  De(
    !eu(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  )
  let x = i.replace(/^\/*/, '/'),
    R = N.useMemo(() => ({ basename: x, navigator: m, static: y, future: {} }), [x, m, y])
  typeof f == 'string' && (f = Xa(f))
  let { pathname: v = '/', search: h = '', hash: w = '', state: H = null, key: O = 'default' } = f,
    k = N.useMemo(() => {
      let D = il(v, x)
      return D == null
        ? null
        : { location: { pathname: D, search: h, hash: w, state: H, key: O }, navigationType: c }
    }, [x, v, h, w, H, O, c])
  return (
    Lt(
      k != null,
      `<Router basename="${x}"> is not able to match the URL "${v}${h}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    k == null
      ? null
      : N.createElement(
          Yt.Provider,
          { value: R },
          N.createElement(In.Provider, { children: o, value: k })
        )
  )
}
function Uv({ children: i, location: o }) {
  return xv($c(i), o)
}
function $c(i, o = []) {
  let f = []
  return (
    N.Children.forEach(i, (c, m) => {
      if (!N.isValidElement(c)) return
      let y = [...o, m]
      if (c.type === N.Fragment) {
        f.push.apply(f, $c(c.props.children, y))
        return
      }
      De(
        c.type === gt,
        `[${typeof c.type == 'string' ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        De(!c.props.index || !c.props.children, 'An index route cannot have child routes.')
      let x = {
        id: c.props.id || y.join('-'),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      }
      c.props.children && (x.children = $c(c.props.children, y)), f.push(x)
    }),
    f
  )
}
var xi = 'get',
  Si = 'application/x-www-form-urlencoded'
function Ai(i) {
  return i != null && typeof i.tagName == 'string'
}
function Hv(i) {
  return Ai(i) && i.tagName.toLowerCase() === 'button'
}
function Bv(i) {
  return Ai(i) && i.tagName.toLowerCase() === 'form'
}
function qv(i) {
  return Ai(i) && i.tagName.toLowerCase() === 'input'
}
function Gv(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Lv(i, o) {
  return i.button === 0 && (!o || o === '_self') && !Gv(i)
}
var vi = null
function Yv() {
  if (vi === null)
    try {
      new FormData(document.createElement('form'), 0), (vi = !1)
    } catch {
      vi = !0
    }
  return vi
}
var kv = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function Vc(i) {
  return i != null && !kv.has(i)
    ? (Lt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Si}"`
      ),
      null)
    : i
}
function Xv(i, o) {
  let f, c, m, y, x
  if (Bv(i)) {
    let R = i.getAttribute('action')
    ;(c = R ? il(R, o) : null),
      (f = i.getAttribute('method') || xi),
      (m = Vc(i.getAttribute('enctype')) || Si),
      (y = new FormData(i))
  } else if (Hv(i) || (qv(i) && (i.type === 'submit' || i.type === 'image'))) {
    let R = i.form
    if (R == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let v = i.getAttribute('formaction') || R.getAttribute('action')
    if (
      ((c = v ? il(v, o) : null),
      (f = i.getAttribute('formmethod') || R.getAttribute('method') || xi),
      (m = Vc(i.getAttribute('formenctype')) || Vc(R.getAttribute('enctype')) || Si),
      (y = new FormData(R, i)),
      !Yv())
    ) {
      let { name: h, type: w, value: H } = i
      if (w === 'image') {
        let O = h ? `${h}.` : ''
        y.append(`${O}x`, '0'), y.append(`${O}y`, '0')
      } else h && y.append(h, H)
    }
  } else {
    if (Ai(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;(f = xi), (c = null), (m = Si), (x = i)
  }
  return (
    y && m === 'text/plain' && ((x = y), (y = void 0)),
    { action: c, method: f.toLowerCase(), encType: m, formData: y, body: x }
  )
}
function io(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o)
}
async function Qv(i, o) {
  if (i.id in o) return o[i.id]
  try {
    let f = await import(i.module)
    return (o[i.id] = f), f
  } catch (f) {
    return (
      console.error(`Error loading route module \`${i.module}\`, reloading page...`),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function Vv(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === 'preload' && typeof i.imageSrcSet == 'string' && typeof i.imageSizes == 'string'
      : typeof i.rel == 'string' && typeof i.href == 'string'
}
async function Zv(i, o, f) {
  let c = await Promise.all(
    i.map(async (m) => {
      let y = o.routes[m.route.id]
      if (y) {
        let x = await Qv(y, f)
        return x.links ? x.links() : []
      }
      return []
    })
  )
  return Wv(
    c
      .flat(1)
      .filter(Vv)
      .filter((m) => m.rel === 'stylesheet' || m.rel === 'preload')
      .map((m) =>
        m.rel === 'stylesheet' ? { ...m, rel: 'prefetch', as: 'style' } : { ...m, rel: 'prefetch' }
      )
  )
}
function bm(i, o, f, c, m, y) {
  let x = (v, h) => (f[h] ? v.route.id !== f[h].route.id : !0),
    R = (v, h) => {
      var w
      return (
        f[h].pathname !== v.pathname ||
        (((w = f[h].route.path) == null ? void 0 : w.endsWith('*')) &&
          f[h].params['*'] !== v.params['*'])
      )
    }
  return y === 'assets'
    ? o.filter((v, h) => x(v, h) || R(v, h))
    : y === 'data'
      ? o.filter((v, h) => {
          var H
          let w = c.routes[v.route.id]
          if (!w || !w.hasLoader) return !1
          if (x(v, h) || R(v, h)) return !0
          if (v.route.shouldRevalidate) {
            let O = v.route.shouldRevalidate({
              currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
              currentParams: ((H = f[0]) == null ? void 0 : H.params) || {},
              nextUrl: new URL(i, window.origin),
              nextParams: v.params,
              defaultShouldRevalidate: !0,
            })
            if (typeof O == 'boolean') return O
          }
          return !0
        })
      : []
}
function Kv(i, o, { includeHydrateFallback: f } = {}) {
  return Jv(
    i
      .map((c) => {
        let m = o.routes[c.route.id]
        if (!m) return []
        let y = [m.module]
        return (
          m.clientActionModule && (y = y.concat(m.clientActionModule)),
          m.clientLoaderModule && (y = y.concat(m.clientLoaderModule)),
          f && m.hydrateFallbackModule && (y = y.concat(m.hydrateFallbackModule)),
          m.imports && (y = y.concat(m.imports)),
          y
        )
      })
      .flat(1)
  )
}
function Jv(i) {
  return [...new Set(i)]
}
function $v(i) {
  let o = {},
    f = Object.keys(i).sort()
  for (let c of f) o[c] = i[c]
  return o
}
function Wv(i, o) {
  let f = new Set()
  return (
    new Set(o),
    i.reduce((c, m) => {
      let y = JSON.stringify($v(m))
      return f.has(y) || (f.add(y), c.push({ key: y, link: m })), c
    }, [])
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
var Fv = new Set([100, 101, 204, 205])
function Pv(i, o) {
  let f =
    typeof i == 'string'
      ? new URL(i, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : i
  return (
    f.pathname === '/'
      ? (f.pathname = '_root.data')
      : o && il(f.pathname, o) === '/'
        ? (f.pathname = `${o.replace(/\/$/, '')}/_root.data`)
        : (f.pathname = `${f.pathname.replace(/\/$/, '')}.data`),
    f
  )
}
function qm() {
  let i = N.useContext(Qa)
  return io(i, 'You must render this element inside a <DataRouterContext.Provider> element'), i
}
function Iv() {
  let i = N.useContext(Ti)
  return io(i, 'You must render this element inside a <DataRouterStateContext.Provider> element'), i
}
var ro = N.createContext(void 0)
ro.displayName = 'FrameworkContext'
function Gm() {
  let i = N.useContext(ro)
  return io(i, 'You must render this element inside a <HydratedRouter> element'), i
}
function eg(i, o) {
  let f = N.useContext(ro),
    [c, m] = N.useState(!1),
    [y, x] = N.useState(!1),
    { onFocus: R, onBlur: v, onMouseEnter: h, onMouseLeave: w, onTouchStart: H } = o,
    O = N.useRef(null)
  N.useEffect(() => {
    if ((i === 'render' && x(!0), i === 'viewport')) {
      let L = (G) => {
          G.forEach((V) => {
            x(V.isIntersecting)
          })
        },
        X = new IntersectionObserver(L, { threshold: 0.5 })
      return (
        O.current && X.observe(O.current),
        () => {
          X.disconnect()
        }
      )
    }
  }, [i]),
    N.useEffect(() => {
      if (c) {
        let L = setTimeout(() => {
          x(!0)
        }, 100)
        return () => {
          clearTimeout(L)
        }
      }
    }, [c])
  let k = () => {
      m(!0)
    },
    D = () => {
      m(!1), x(!1)
    }
  return f
    ? i !== 'intent'
      ? [y, O, {}]
      : [
          y,
          O,
          {
            onFocus: Wn(R, k),
            onBlur: Wn(v, D),
            onMouseEnter: Wn(h, k),
            onMouseLeave: Wn(w, D),
            onTouchStart: Wn(H, k),
          },
        ]
    : [!1, O, {}]
}
function Wn(i, o) {
  return (f) => {
    i && i(f), f.defaultPrevented || o(f)
  }
}
function tg({ page: i, ...o }) {
  let { router: f } = qm(),
    c = N.useMemo(() => Rm(f.routes, i, f.basename), [f.routes, i, f.basename])
  return c ? N.createElement(ag, { page: i, matches: c, ...o }) : null
}
function lg(i) {
  let { manifest: o, routeModules: f } = Gm(),
    [c, m] = N.useState([])
  return (
    N.useEffect(() => {
      let y = !1
      return (
        Zv(i, o, f).then((x) => {
          y || m(x)
        }),
        () => {
          y = !0
        }
      )
    }, [i, o, f]),
    c
  )
}
function ag({ page: i, matches: o, ...f }) {
  let c = Hl(),
    { manifest: m, routeModules: y } = Gm(),
    { basename: x } = qm(),
    { loaderData: R, matches: v } = Iv(),
    h = N.useMemo(() => bm(i, o, v, m, c, 'data'), [i, o, v, m, c]),
    w = N.useMemo(() => bm(i, o, v, m, c, 'assets'), [i, o, v, m, c]),
    H = N.useMemo(() => {
      if (i === c.pathname + c.search + c.hash) return []
      let D = new Set(),
        L = !1
      if (
        (o.forEach((G) => {
          var ee
          let V = m.routes[G.route.id]
          !V ||
            !V.hasLoader ||
            ((!h.some((ie) => ie.route.id === G.route.id) &&
              G.route.id in R &&
              (ee = y[G.route.id]) != null &&
              ee.shouldRevalidate) ||
            V.hasClientLoader
              ? (L = !0)
              : D.add(G.route.id))
        }),
        D.size === 0)
      )
        return []
      let X = Pv(i, x)
      return (
        L &&
          D.size > 0 &&
          X.searchParams.set(
            '_routes',
            o
              .filter((G) => D.has(G.route.id))
              .map((G) => G.route.id)
              .join(',')
          ),
        [X.pathname + X.search]
      )
    }, [x, R, c, m, h, o, i, y]),
    O = N.useMemo(() => Kv(w, m), [w, m]),
    k = lg(w)
  return N.createElement(
    N.Fragment,
    null,
    H.map((D) => N.createElement('link', { key: D, rel: 'prefetch', as: 'fetch', href: D, ...f })),
    O.map((D) => N.createElement('link', { key: D, rel: 'modulepreload', href: D, ...f })),
    k.map(({ key: D, link: L }) => N.createElement('link', { key: D, ...L }))
  )
}
function ng(...i) {
  return (o) => {
    i.forEach((f) => {
      typeof f == 'function' ? f(o) : f != null && (f.current = o)
    })
  }
}
var Lm =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
try {
  Lm && (window.__reactRouterVersion = '7.6.2')
} catch {}
function ug({ basename: i, children: o, window: f }) {
  let c = N.useRef()
  c.current == null && (c.current = kp({ window: f, v5Compat: !0 }))
  let m = c.current,
    [y, x] = N.useState({ action: m.action, location: m.location }),
    R = N.useCallback(
      (v) => {
        N.startTransition(() => x(v))
      },
      [x]
    )
  return (
    N.useLayoutEffect(() => m.listen(R), [m, R]),
    N.createElement(Cv, {
      basename: i,
      children: o,
      location: y.location,
      navigationType: y.action,
      navigator: m,
    })
  )
}
var Ym = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  km = N.forwardRef(function (
    {
      onClick: o,
      discover: f = 'render',
      prefetch: c = 'none',
      relative: m,
      reloadDocument: y,
      replace: x,
      state: R,
      target: v,
      to: h,
      preventScrollReset: w,
      viewTransition: H,
      ...O
    },
    k
  ) {
    let { basename: D } = N.useContext(Yt),
      L = typeof h == 'string' && Ym.test(h),
      X,
      G = !1
    if (typeof h == 'string' && L && ((X = h), Lm))
      try {
        let me = new URL(window.location.href),
          Qe = h.startsWith('//') ? new URL(me.protocol + h) : new URL(h),
          tt = il(Qe.pathname, D)
        Qe.origin === me.origin && tt != null ? (h = tt + Qe.search + Qe.hash) : (G = !0)
      } catch {
        Lt(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        )
      }
    let V = yv(h, { relative: m }),
      [ee, ie, I] = eg(c, O),
      Se = cg(h, {
        replace: x,
        state: R,
        target: v,
        preventScrollReset: w,
        relative: m,
        viewTransition: H,
      })
    function Ee(me) {
      o && o(me), me.defaultPrevented || Se(me)
    }
    let K = N.createElement('a', {
      ...O,
      ...I,
      href: X || V,
      onClick: G || y ? o : Ee,
      ref: ng(k, ie),
      target: v,
      'data-discover': !L && f === 'render' ? 'true' : void 0,
    })
    return ee && !L ? N.createElement(N.Fragment, null, K, N.createElement(tg, { page: V })) : K
  })
km.displayName = 'Link'
var lu = N.forwardRef(function (
  {
    'aria-current': o = 'page',
    caseSensitive: f = !1,
    className: c = '',
    end: m = !1,
    style: y,
    to: x,
    viewTransition: R,
    children: v,
    ...h
  },
  w
) {
  let H = tu(x, { relative: h.relative }),
    O = Hl(),
    k = N.useContext(Ti),
    { navigator: D, basename: L } = N.useContext(Yt),
    X = k != null && mg(H) && R === !0,
    G = D.encodeLocation ? D.encodeLocation(H).pathname : H.pathname,
    V = O.pathname,
    ee = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null
  f || ((V = V.toLowerCase()), (ee = ee ? ee.toLowerCase() : null), (G = G.toLowerCase())),
    ee && L && (ee = il(ee, L) || ee)
  const ie = G !== '/' && G.endsWith('/') ? G.length - 1 : G.length
  let I = V === G || (!m && V.startsWith(G) && V.charAt(ie) === '/'),
    Se = ee != null && (ee === G || (!m && ee.startsWith(G) && ee.charAt(G.length) === '/')),
    Ee = { isActive: I, isPending: Se, isTransitioning: X },
    K = I ? o : void 0,
    me
  typeof c == 'function'
    ? (me = c(Ee))
    : (me = [c, I ? 'active' : null, Se ? 'pending' : null, X ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '))
  let Qe = typeof y == 'function' ? y(Ee) : y
  return N.createElement(
    km,
    { ...h, 'aria-current': K, className: me, ref: w, style: Qe, to: x, viewTransition: R },
    typeof v == 'function' ? v(Ee) : v
  )
})
lu.displayName = 'NavLink'
var ig = N.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: o,
      navigate: f,
      reloadDocument: c,
      replace: m,
      state: y,
      method: x = xi,
      action: R,
      onSubmit: v,
      relative: h,
      preventScrollReset: w,
      viewTransition: H,
      ...O
    },
    k
  ) => {
    let D = fg(),
      L = dg(R, { relative: h }),
      X = x.toLowerCase() === 'get' ? 'get' : 'post',
      G = typeof R == 'string' && Ym.test(R),
      V = (ee) => {
        if ((v && v(ee), ee.defaultPrevented)) return
        ee.preventDefault()
        let ie = ee.nativeEvent.submitter,
          I = (ie == null ? void 0 : ie.getAttribute('formmethod')) || x
        D(ie || ee.currentTarget, {
          fetcherKey: o,
          method: I,
          navigate: f,
          replace: m,
          state: y,
          relative: h,
          preventScrollReset: w,
          viewTransition: H,
        })
      }
    return N.createElement('form', {
      ref: k,
      method: X,
      action: L,
      onSubmit: c ? v : V,
      ...O,
      'data-discover': !G && i === 'render' ? 'true' : void 0,
    })
  }
)
ig.displayName = 'Form'
function rg(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Xm(i) {
  let o = N.useContext(Qa)
  return De(o, rg(i)), o
}
function cg(
  i,
  { target: o, replace: f, state: c, preventScrollReset: m, relative: y, viewTransition: x } = {}
) {
  let R = pv(),
    v = Hl(),
    h = tu(i, { relative: y })
  return N.useCallback(
    (w) => {
      if (Lv(w, o)) {
        w.preventDefault()
        let H = f !== void 0 ? f : Pn(v) === Pn(h)
        R(i, { replace: H, state: c, preventScrollReset: m, relative: y, viewTransition: x })
      }
    },
    [v, R, h, f, c, o, i, m, y, x]
  )
}
var og = 0,
  sg = () => `__${String(++og)}__`
function fg() {
  let { router: i } = Xm('useSubmit'),
    { basename: o } = N.useContext(Yt),
    f = Nv()
  return N.useCallback(
    async (c, m = {}) => {
      let { action: y, method: x, encType: R, formData: v, body: h } = Xv(c, o)
      if (m.navigate === !1) {
        let w = m.fetcherKey || sg()
        await i.fetch(w, f, m.action || y, {
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: h,
          formMethod: m.method || x,
          formEncType: m.encType || R,
          flushSync: m.flushSync,
        })
      } else
        await i.navigate(m.action || y, {
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: h,
          formMethod: m.method || x,
          formEncType: m.encType || R,
          replace: m.replace,
          state: m.state,
          fromRouteId: f,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition,
        })
    },
    [i, o, f]
  )
}
function dg(i, { relative: o } = {}) {
  let { basename: f } = N.useContext(Yt),
    c = N.useContext(kt)
  De(c, 'useFormAction must be used inside a RouteContext')
  let [m] = c.matches.slice(-1),
    y = { ...tu(i || '.', { relative: o }) },
    x = Hl()
  if (i == null) {
    y.search = x.search
    let R = new URLSearchParams(y.search),
      v = R.getAll('index')
    if (v.some((w) => w === '')) {
      R.delete('index'), v.filter((H) => H).forEach((H) => R.append('index', H))
      let w = R.toString()
      y.search = w ? `?${w}` : ''
    }
  }
  return (
    (!i || i === '.') &&
      m.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, '?index&') : '?index'),
    f !== '/' && (y.pathname = y.pathname === '/' ? f : ul([f, y.pathname])),
    Pn(y)
  )
}
function mg(i, o = {}) {
  let f = N.useContext(Dm)
  De(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: c } = Xm('useViewTransitionState'),
    m = tu(i, { relative: o.relative })
  if (!f.isTransitioning) return !1
  let y = il(f.currentLocation.pathname, c) || f.currentLocation.pathname,
    x = il(f.nextLocation.pathname, c) || f.nextLocation.pathname
  return Ei(m.pathname, x) != null || Ei(m.pathname, y) != null
}
;[...Fv]
const Qm = '/vectors/logo.svg',
  hg = [
    { content: 'Home', href: '/' },
    { content: 'About', href: '/about' },
    { content: 'Gallery', href: '/gallery' },
    { content: 'Archive', href: '/archive' },
  ]
function Vm(i) {
  var o,
    f,
    c = ''
  if (typeof i == 'string' || typeof i == 'number') c += i
  else if (typeof i == 'object')
    if (Array.isArray(i)) {
      var m = i.length
      for (o = 0; o < m; o++) i[o] && (f = Vm(i[o])) && (c && (c += ' '), (c += f))
    } else for (f in i) i[f] && (c && (c += ' '), (c += f))
  return c
}
function Zm() {
  for (var i, o, f = 0, c = '', m = arguments.length; f < m; f++)
    (i = arguments[f]) && (o = Vm(i)) && (c && (c += ' '), (c += o))
  return c
}
const xm = (i) => (typeof i == 'boolean' ? `${i}` : i === 0 ? '0' : i),
  Sm = Zm,
  yg = (i, o) => (f) => {
    var c
    if ((o == null ? void 0 : o.variants) == null)
      return Sm(i, f == null ? void 0 : f.class, f == null ? void 0 : f.className)
    const { variants: m, defaultVariants: y } = o,
      x = Object.keys(m).map((h) => {
        const w = f == null ? void 0 : f[h],
          H = y == null ? void 0 : y[h]
        if (w === null) return null
        const O = xm(w) || xm(H)
        return m[h][O]
      }),
      R =
        f &&
        Object.entries(f).reduce((h, w) => {
          let [H, O] = w
          return O === void 0 || (h[H] = O), h
        }, {}),
      v =
        o == null || (c = o.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((h, w) => {
              let { class: H, className: O, ...k } = w
              return Object.entries(k).every((D) => {
                let [L, X] = D
                return Array.isArray(X) ? X.includes({ ...y, ...R }[L]) : { ...y, ...R }[L] === X
              })
                ? [...h, H, O]
                : h
            }, [])
    return Sm(i, x, v, f == null ? void 0 : f.class, f == null ? void 0 : f.className)
  },
  co = '-',
  pg = (i) => {
    const o = gg(i),
      { conflictingClassGroups: f, conflictingClassGroupModifiers: c } = i
    return {
      getClassGroupId: (x) => {
        const R = x.split(co)
        return R[0] === '' && R.length !== 1 && R.shift(), Km(R, o) || vg(x)
      },
      getConflictingClassGroupIds: (x, R) => {
        const v = f[x] || []
        return R && c[x] ? [...v, ...c[x]] : v
      },
    }
  },
  Km = (i, o) => {
    var x
    if (i.length === 0) return o.classGroupId
    const f = i[0],
      c = o.nextPart.get(f),
      m = c ? Km(i.slice(1), c) : void 0
    if (m) return m
    if (o.validators.length === 0) return
    const y = i.join(co)
    return (x = o.validators.find(({ validator: R }) => R(y))) == null ? void 0 : x.classGroupId
  },
  Em = /^\[(.+)\]$/,
  vg = (i) => {
    if (Em.test(i)) {
      const o = Em.exec(i)[1],
        f = o == null ? void 0 : o.substring(0, o.indexOf(':'))
      if (f) return 'arbitrary..' + f
    }
  },
  gg = (i) => {
    const { theme: o, classGroups: f } = i,
      c = { nextPart: new Map(), validators: [] }
    for (const m in f) Wc(f[m], c, m, o)
    return c
  },
  Wc = (i, o, f, c) => {
    i.forEach((m) => {
      if (typeof m == 'string') {
        const y = m === '' ? o : Tm(o, m)
        y.classGroupId = f
        return
      }
      if (typeof m == 'function') {
        if (bg(m)) {
          Wc(m(c), o, f, c)
          return
        }
        o.validators.push({ validator: m, classGroupId: f })
        return
      }
      Object.entries(m).forEach(([y, x]) => {
        Wc(x, Tm(o, y), f, c)
      })
    })
  },
  Tm = (i, o) => {
    let f = i
    return (
      o.split(co).forEach((c) => {
        f.nextPart.has(c) || f.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (f = f.nextPart.get(c))
      }),
      f
    )
  },
  bg = (i) => i.isThemeGetter,
  xg = (i) => {
    if (i < 1) return { get: () => {}, set: () => {} }
    let o = 0,
      f = new Map(),
      c = new Map()
    const m = (y, x) => {
      f.set(y, x), o++, o > i && ((o = 0), (c = f), (f = new Map()))
    }
    return {
      get(y) {
        let x = f.get(y)
        if (x !== void 0) return x
        if ((x = c.get(y)) !== void 0) return m(y, x), x
      },
      set(y, x) {
        f.has(y) ? f.set(y, x) : m(y, x)
      },
    }
  },
  Fc = '!',
  Pc = ':',
  Sg = Pc.length,
  Eg = (i) => {
    const { prefix: o, experimentalParseClassName: f } = i
    let c = (m) => {
      const y = []
      let x = 0,
        R = 0,
        v = 0,
        h
      for (let D = 0; D < m.length; D++) {
        let L = m[D]
        if (x === 0 && R === 0) {
          if (L === Pc) {
            y.push(m.slice(v, D)), (v = D + Sg)
            continue
          }
          if (L === '/') {
            h = D
            continue
          }
        }
        L === '[' ? x++ : L === ']' ? x-- : L === '(' ? R++ : L === ')' && R--
      }
      const w = y.length === 0 ? m : m.substring(v),
        H = Tg(w),
        O = H !== w,
        k = h && h > v ? h - v : void 0
      return {
        modifiers: y,
        hasImportantModifier: O,
        baseClassName: H,
        maybePostfixModifierPosition: k,
      }
    }
    if (o) {
      const m = o + Pc,
        y = c
      c = (x) =>
        x.startsWith(m)
          ? y(x.substring(m.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: x,
              maybePostfixModifierPosition: void 0,
            }
    }
    if (f) {
      const m = c
      c = (y) => f({ className: y, parseClassName: m })
    }
    return c
  },
  Tg = (i) =>
    i.endsWith(Fc) ? i.substring(0, i.length - 1) : i.startsWith(Fc) ? i.substring(1) : i,
  Ag = (i) => {
    const o = Object.fromEntries(i.orderSensitiveModifiers.map((c) => [c, !0]))
    return (c) => {
      if (c.length <= 1) return c
      const m = []
      let y = []
      return (
        c.forEach((x) => {
          x[0] === '[' || o[x] ? (m.push(...y.sort(), x), (y = [])) : y.push(x)
        }),
        m.push(...y.sort()),
        m
      )
    }
  },
  wg = (i) => ({ cache: xg(i.cacheSize), parseClassName: Eg(i), sortModifiers: Ag(i), ...pg(i) }),
  zg = /\s+/,
  Rg = (i, o) => {
    const {
        parseClassName: f,
        getClassGroupId: c,
        getConflictingClassGroupIds: m,
        sortModifiers: y,
      } = o,
      x = [],
      R = i.trim().split(zg)
    let v = ''
    for (let h = R.length - 1; h >= 0; h -= 1) {
      const w = R[h],
        {
          isExternal: H,
          modifiers: O,
          hasImportantModifier: k,
          baseClassName: D,
          maybePostfixModifierPosition: L,
        } = f(w)
      if (H) {
        v = w + (v.length > 0 ? ' ' + v : v)
        continue
      }
      let X = !!L,
        G = c(X ? D.substring(0, L) : D)
      if (!G) {
        if (!X) {
          v = w + (v.length > 0 ? ' ' + v : v)
          continue
        }
        if (((G = c(D)), !G)) {
          v = w + (v.length > 0 ? ' ' + v : v)
          continue
        }
        X = !1
      }
      const V = y(O).join(':'),
        ee = k ? V + Fc : V,
        ie = ee + G
      if (x.includes(ie)) continue
      x.push(ie)
      const I = m(G, X)
      for (let Se = 0; Se < I.length; ++Se) {
        const Ee = I[Se]
        x.push(ee + Ee)
      }
      v = w + (v.length > 0 ? ' ' + v : v)
    }
    return v
  }
function jg() {
  let i = 0,
    o,
    f,
    c = ''
  for (; i < arguments.length; ) (o = arguments[i++]) && (f = Jm(o)) && (c && (c += ' '), (c += f))
  return c
}
const Jm = (i) => {
  if (typeof i == 'string') return i
  let o,
    f = ''
  for (let c = 0; c < i.length; c++) i[c] && (o = Jm(i[c])) && (f && (f += ' '), (f += o))
  return f
}
function Ng(i, ...o) {
  let f,
    c,
    m,
    y = x
  function x(v) {
    const h = o.reduce((w, H) => H(w), i())
    return (f = wg(h)), (c = f.cache.get), (m = f.cache.set), (y = R), R(v)
  }
  function R(v) {
    const h = c(v)
    if (h) return h
    const w = Rg(v, f)
    return m(v, w), w
  }
  return function () {
    return y(jg.apply(null, arguments))
  }
}
const Xe = (i) => {
    const o = (f) => f[i] || []
    return (o.isThemeGetter = !0), o
  },
  $m = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Wm = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Mg = /^\d+\/\d+$/,
  Og = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _g =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Cg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ug =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ka = (i) => Mg.test(i),
  ce = (i) => !!i && !Number.isNaN(Number(i)),
  Ul = (i) => !!i && Number.isInteger(Number(i)),
  Zc = (i) => i.endsWith('%') && ce(i.slice(0, -1)),
  nl = (i) => Og.test(i),
  Hg = () => !0,
  Bg = (i) => _g.test(i) && !Dg.test(i),
  Fm = () => !1,
  qg = (i) => Cg.test(i),
  Gg = (i) => Ug.test(i),
  Lg = (i) => !$(i) && !W(i),
  Yg = (i) => Va(i, eh, Fm),
  $ = (i) => $m.test(i),
  ta = (i) => Va(i, th, Bg),
  Kc = (i) => Va(i, Zg, ce),
  Am = (i) => Va(i, Pm, Fm),
  kg = (i) => Va(i, Im, Gg),
  gi = (i) => Va(i, lh, qg),
  W = (i) => Wm.test(i),
  Fn = (i) => Za(i, th),
  Xg = (i) => Za(i, Kg),
  wm = (i) => Za(i, Pm),
  Qg = (i) => Za(i, eh),
  Vg = (i) => Za(i, Im),
  bi = (i) => Za(i, lh, !0),
  Va = (i, o, f) => {
    const c = $m.exec(i)
    return c ? (c[1] ? o(c[1]) : f(c[2])) : !1
  },
  Za = (i, o, f = !1) => {
    const c = Wm.exec(i)
    return c ? (c[1] ? o(c[1]) : f) : !1
  },
  Pm = (i) => i === 'position' || i === 'percentage',
  Im = (i) => i === 'image' || i === 'url',
  eh = (i) => i === 'length' || i === 'size' || i === 'bg-size',
  th = (i) => i === 'length',
  Zg = (i) => i === 'number',
  Kg = (i) => i === 'family-name',
  lh = (i) => i === 'shadow',
  Jg = () => {
    const i = Xe('color'),
      o = Xe('font'),
      f = Xe('text'),
      c = Xe('font-weight'),
      m = Xe('tracking'),
      y = Xe('leading'),
      x = Xe('breakpoint'),
      R = Xe('container'),
      v = Xe('spacing'),
      h = Xe('radius'),
      w = Xe('shadow'),
      H = Xe('inset-shadow'),
      O = Xe('text-shadow'),
      k = Xe('drop-shadow'),
      D = Xe('blur'),
      L = Xe('perspective'),
      X = Xe('aspect'),
      G = Xe('ease'),
      V = Xe('animate'),
      ee = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      ie = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      I = () => [...ie(), W, $],
      Se = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Ee = () => ['auto', 'contain', 'none'],
      K = () => [W, $, v],
      me = () => [ka, 'full', 'auto', ...K()],
      Qe = () => [Ul, 'none', 'subgrid', W, $],
      tt = () => ['auto', { span: ['full', Ul, W, $] }, Ul, W, $],
      He = () => [Ul, 'auto', W, $],
      Dt = () => ['auto', 'min', 'max', 'fr', W, $],
      jt = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      Oe = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      j = () => ['auto', ...K()],
      Y = () => [
        ka,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...K(),
      ],
      B = () => [i, W, $],
      ge = () => [...ie(), wm, Am, { position: [W, $] }],
      g = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      U = () => ['auto', 'cover', 'contain', Qg, Yg, { size: [W, $] }],
      Q = () => [Zc, Fn, ta],
      q = () => ['', 'none', 'full', h, W, $],
      Z = () => ['', ce, Fn, ta],
      se = () => ['solid', 'dashed', 'dotted', 'double'],
      ne = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      ye = () => [ce, Zc, wm, Am],
      ze = () => ['', 'none', D, W, $],
      ct = () => ['none', ce, W, $],
      cl = () => ['none', ce, W, $],
      ol = () => [ce, W, $],
      sl = () => [ka, 'full', ...K()]
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [nl],
        breakpoint: [nl],
        color: [Hg],
        container: [nl],
        'drop-shadow': [nl],
        ease: ['in', 'out', 'in-out'],
        font: [Lg],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [nl],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [nl],
        shadow: [nl],
        spacing: ['px', ce],
        text: [nl],
        'text-shadow': [nl],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', ka, $, W, X] }],
        container: ['container'],
        columns: [{ columns: [ce, $, W, R] }],
        'break-after': [{ 'break-after': ee() }],
        'break-before': [{ 'break-before': ee() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: I() }],
        overflow: [{ overflow: Se() }],
        'overflow-x': [{ 'overflow-x': Se() }],
        'overflow-y': [{ 'overflow-y': Se() }],
        overscroll: [{ overscroll: Ee() }],
        'overscroll-x': [{ 'overscroll-x': Ee() }],
        'overscroll-y': [{ 'overscroll-y': Ee() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: me() }],
        'inset-x': [{ 'inset-x': me() }],
        'inset-y': [{ 'inset-y': me() }],
        start: [{ start: me() }],
        end: [{ end: me() }],
        top: [{ top: me() }],
        right: [{ right: me() }],
        bottom: [{ bottom: me() }],
        left: [{ left: me() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Ul, 'auto', W, $] }],
        basis: [{ basis: [ka, 'full', 'auto', R, ...K()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [ce, ka, 'auto', 'initial', 'none', $] }],
        grow: [{ grow: ['', ce, W, $] }],
        shrink: [{ shrink: ['', ce, W, $] }],
        order: [{ order: [Ul, 'first', 'last', 'none', W, $] }],
        'grid-cols': [{ 'grid-cols': Qe() }],
        'col-start-end': [{ col: tt() }],
        'col-start': [{ 'col-start': He() }],
        'col-end': [{ 'col-end': He() }],
        'grid-rows': [{ 'grid-rows': Qe() }],
        'row-start-end': [{ row: tt() }],
        'row-start': [{ 'row-start': He() }],
        'row-end': [{ 'row-end': He() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': Dt() }],
        'auto-rows': [{ 'auto-rows': Dt() }],
        gap: [{ gap: K() }],
        'gap-x': [{ 'gap-x': K() }],
        'gap-y': [{ 'gap-y': K() }],
        'justify-content': [{ justify: [...jt(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...Oe(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...Oe()] }],
        'align-content': [{ content: ['normal', ...jt()] }],
        'align-items': [{ items: [...Oe(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...Oe(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': jt() }],
        'place-items': [{ 'place-items': [...Oe(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...Oe()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        'space-x': [{ 'space-x': K() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': K() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: Y() }],
        w: [{ w: [R, 'screen', ...Y()] }],
        'min-w': [{ 'min-w': [R, 'screen', 'none', ...Y()] }],
        'max-w': [{ 'max-w': [R, 'screen', 'none', 'prose', { screen: [x] }, ...Y()] }],
        h: [{ h: ['screen', 'lh', ...Y()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...Y()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...Y()] }],
        'font-size': [{ text: ['base', f, Fn, ta] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [c, W, Kc] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Zc,
              $,
            ],
          },
        ],
        'font-family': [{ font: [Xg, $, o] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [m, W, $] }],
        'line-clamp': [{ 'line-clamp': [ce, 'none', W, Kc] }],
        leading: [{ leading: [y, ...K()] }],
        'list-image': [{ 'list-image': ['none', W, $] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', W, $] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: B() }],
        'text-color': [{ text: B() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...se(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [ce, 'from-font', 'auto', W, ta] }],
        'text-decoration-color': [{ decoration: B() }],
        'underline-offset': [{ 'underline-offset': [ce, 'auto', W, $] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: K() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              W,
              $,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', W, $] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: ge() }],
        'bg-repeat': [{ bg: g() }],
        'bg-size': [{ bg: U() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Ul, W, $],
                radial: ['', W, $],
                conic: [Ul, W, $],
              },
              Vg,
              kg,
            ],
          },
        ],
        'bg-color': [{ bg: B() }],
        'gradient-from-pos': [{ from: Q() }],
        'gradient-via-pos': [{ via: Q() }],
        'gradient-to-pos': [{ to: Q() }],
        'gradient-from': [{ from: B() }],
        'gradient-via': [{ via: B() }],
        'gradient-to': [{ to: B() }],
        rounded: [{ rounded: q() }],
        'rounded-s': [{ 'rounded-s': q() }],
        'rounded-e': [{ 'rounded-e': q() }],
        'rounded-t': [{ 'rounded-t': q() }],
        'rounded-r': [{ 'rounded-r': q() }],
        'rounded-b': [{ 'rounded-b': q() }],
        'rounded-l': [{ 'rounded-l': q() }],
        'rounded-ss': [{ 'rounded-ss': q() }],
        'rounded-se': [{ 'rounded-se': q() }],
        'rounded-ee': [{ 'rounded-ee': q() }],
        'rounded-es': [{ 'rounded-es': q() }],
        'rounded-tl': [{ 'rounded-tl': q() }],
        'rounded-tr': [{ 'rounded-tr': q() }],
        'rounded-br': [{ 'rounded-br': q() }],
        'rounded-bl': [{ 'rounded-bl': q() }],
        'border-w': [{ border: Z() }],
        'border-w-x': [{ 'border-x': Z() }],
        'border-w-y': [{ 'border-y': Z() }],
        'border-w-s': [{ 'border-s': Z() }],
        'border-w-e': [{ 'border-e': Z() }],
        'border-w-t': [{ 'border-t': Z() }],
        'border-w-r': [{ 'border-r': Z() }],
        'border-w-b': [{ 'border-b': Z() }],
        'border-w-l': [{ 'border-l': Z() }],
        'divide-x': [{ 'divide-x': Z() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': Z() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...se(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...se(), 'hidden', 'none'] }],
        'border-color': [{ border: B() }],
        'border-color-x': [{ 'border-x': B() }],
        'border-color-y': [{ 'border-y': B() }],
        'border-color-s': [{ 'border-s': B() }],
        'border-color-e': [{ 'border-e': B() }],
        'border-color-t': [{ 'border-t': B() }],
        'border-color-r': [{ 'border-r': B() }],
        'border-color-b': [{ 'border-b': B() }],
        'border-color-l': [{ 'border-l': B() }],
        'divide-color': [{ divide: B() }],
        'outline-style': [{ outline: [...se(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [ce, W, $] }],
        'outline-w': [{ outline: ['', ce, Fn, ta] }],
        'outline-color': [{ outline: B() }],
        shadow: [{ shadow: ['', 'none', w, bi, gi] }],
        'shadow-color': [{ shadow: B() }],
        'inset-shadow': [{ 'inset-shadow': ['none', H, bi, gi] }],
        'inset-shadow-color': [{ 'inset-shadow': B() }],
        'ring-w': [{ ring: Z() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: B() }],
        'ring-offset-w': [{ 'ring-offset': [ce, ta] }],
        'ring-offset-color': [{ 'ring-offset': B() }],
        'inset-ring-w': [{ 'inset-ring': Z() }],
        'inset-ring-color': [{ 'inset-ring': B() }],
        'text-shadow': [{ 'text-shadow': ['none', O, bi, gi] }],
        'text-shadow-color': [{ 'text-shadow': B() }],
        opacity: [{ opacity: [ce, W, $] }],
        'mix-blend': [{ 'mix-blend': [...ne(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': ne() }],
        'mask-clip': [
          { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
          'mask-no-clip',
        ],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [ce] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': ye() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': ye() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': B() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': B() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': ye() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': ye() }],
        'mask-image-t-from-color': [{ 'mask-t-from': B() }],
        'mask-image-t-to-color': [{ 'mask-t-to': B() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': ye() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': ye() }],
        'mask-image-r-from-color': [{ 'mask-r-from': B() }],
        'mask-image-r-to-color': [{ 'mask-r-to': B() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': ye() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': ye() }],
        'mask-image-b-from-color': [{ 'mask-b-from': B() }],
        'mask-image-b-to-color': [{ 'mask-b-to': B() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': ye() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': ye() }],
        'mask-image-l-from-color': [{ 'mask-l-from': B() }],
        'mask-image-l-to-color': [{ 'mask-l-to': B() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': ye() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': ye() }],
        'mask-image-x-from-color': [{ 'mask-x-from': B() }],
        'mask-image-x-to-color': [{ 'mask-x-to': B() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': ye() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': ye() }],
        'mask-image-y-from-color': [{ 'mask-y-from': B() }],
        'mask-image-y-to-color': [{ 'mask-y-to': B() }],
        'mask-image-radial': [{ 'mask-radial': [W, $] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': ye() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': ye() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': B() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': B() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': ie() }],
        'mask-image-conic-pos': [{ 'mask-conic': [ce] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': ye() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': ye() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': B() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': B() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
        ],
        'mask-position': [{ mask: ge() }],
        'mask-repeat': [{ mask: g() }],
        'mask-size': [{ mask: U() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', W, $] }],
        filter: [{ filter: ['', 'none', W, $] }],
        blur: [{ blur: ze() }],
        brightness: [{ brightness: [ce, W, $] }],
        contrast: [{ contrast: [ce, W, $] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', k, bi, gi] }],
        'drop-shadow-color': [{ 'drop-shadow': B() }],
        grayscale: [{ grayscale: ['', ce, W, $] }],
        'hue-rotate': [{ 'hue-rotate': [ce, W, $] }],
        invert: [{ invert: ['', ce, W, $] }],
        saturate: [{ saturate: [ce, W, $] }],
        sepia: [{ sepia: ['', ce, W, $] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', W, $] }],
        'backdrop-blur': [{ 'backdrop-blur': ze() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [ce, W, $] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [ce, W, $] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', ce, W, $] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [ce, W, $] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', ce, W, $] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [ce, W, $] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [ce, W, $] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', ce, W, $] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': K() }],
        'border-spacing-x': [{ 'border-spacing-x': K() }],
        'border-spacing-y': [{ 'border-spacing-y': K() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', W, $] },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [ce, 'initial', W, $] }],
        ease: [{ ease: ['linear', 'initial', G, W, $] }],
        delay: [{ delay: [ce, W, $] }],
        animate: [{ animate: ['none', V, W, $] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [L, W, $] }],
        'perspective-origin': [{ 'perspective-origin': I() }],
        rotate: [{ rotate: ct() }],
        'rotate-x': [{ 'rotate-x': ct() }],
        'rotate-y': [{ 'rotate-y': ct() }],
        'rotate-z': [{ 'rotate-z': ct() }],
        scale: [{ scale: cl() }],
        'scale-x': [{ 'scale-x': cl() }],
        'scale-y': [{ 'scale-y': cl() }],
        'scale-z': [{ 'scale-z': cl() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: ol() }],
        'skew-x': [{ 'skew-x': ol() }],
        'skew-y': [{ 'skew-y': ol() }],
        transform: [{ transform: [W, $, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: I() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: sl() }],
        'translate-x': [{ 'translate-x': sl() }],
        'translate-y': [{ 'translate-y': sl() }],
        'translate-z': [{ 'translate-z': sl() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: B() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: B() }],
        'color-scheme': [
          { scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              W,
              $,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': K() }],
        'scroll-mx': [{ 'scroll-mx': K() }],
        'scroll-my': [{ 'scroll-my': K() }],
        'scroll-ms': [{ 'scroll-ms': K() }],
        'scroll-me': [{ 'scroll-me': K() }],
        'scroll-mt': [{ 'scroll-mt': K() }],
        'scroll-mr': [{ 'scroll-mr': K() }],
        'scroll-mb': [{ 'scroll-mb': K() }],
        'scroll-ml': [{ 'scroll-ml': K() }],
        'scroll-p': [{ 'scroll-p': K() }],
        'scroll-px': [{ 'scroll-px': K() }],
        'scroll-py': [{ 'scroll-py': K() }],
        'scroll-ps': [{ 'scroll-ps': K() }],
        'scroll-pe': [{ 'scroll-pe': K() }],
        'scroll-pt': [{ 'scroll-pt': K() }],
        'scroll-pr': [{ 'scroll-pr': K() }],
        'scroll-pb': [{ 'scroll-pb': K() }],
        'scroll-pl': [{ 'scroll-pl': K() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', W, $] }],
        fill: [{ fill: ['none', ...B()] }],
        'stroke-w': [{ stroke: [ce, Fn, ta, Kc] }],
        stroke: [{ stroke: ['none', ...B()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    }
  },
  $g = Ng(Jg)
function rl(...i) {
  return $g(Zm(i))
}
function Ic({ className: i, variant: o, ...f }) {
  return d.jsx('button', { className: rl(Wg({ variant: o, className: i })), ...f })
}
const Wg = yg('rounded-lg shadow-md inline-flex gap-2 transition-color duration-150', {
  variants: {
    variant: {
      default: 'bg-primary-700 px-3 py-1.5 hover:bg-primary-700/50',
      icon: 'rounded-full bg-primary-700 p-2 hover:bg-primary-700/50 disabled:opacity-50',
    },
  },
  defaultVariants: { variant: 'default' },
})
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = (i) => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Pg = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, f, c) => (c ? c.toUpperCase() : f.toLowerCase())),
  zm = (i) => {
    const o = Pg(i)
    return o.charAt(0).toUpperCase() + o.slice(1)
  },
  ah = (...i) =>
    i
      .filter((o, f, c) => !!o && o.trim() !== '' && c.indexOf(o) === f)
      .join(' ')
      .trim(),
  Ig = (i) => {
    for (const o in i) if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0
  }
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var e0 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t0 = N.forwardRef(
  (
    {
      color: i = 'currentColor',
      size: o = 24,
      strokeWidth: f = 2,
      absoluteStrokeWidth: c,
      className: m = '',
      children: y,
      iconNode: x,
      ...R
    },
    v
  ) =>
    N.createElement(
      'svg',
      {
        ref: v,
        ...e0,
        width: o,
        height: o,
        stroke: i,
        strokeWidth: c ? (Number(f) * 24) / Number(o) : f,
        className: ah('lucide', m),
        ...(!y && !Ig(R) && { 'aria-hidden': 'true' }),
        ...R,
      },
      [...x.map(([h, w]) => N.createElement(h, w)), ...(Array.isArray(y) ? y : [y])]
    )
)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ka = (i, o) => {
  const f = N.forwardRef(({ className: c, ...m }, y) =>
    N.createElement(t0, {
      ref: y,
      iconNode: o,
      className: ah(`lucide-${Fg(zm(i))}`, `lucide-${i}`, c),
      ...m,
    })
  )
  return (f.displayName = zm(i)), f
}
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l0 = [
    ['path', { d: 'M3 12h18', key: '1i2n21' }],
    ['path', { d: 'M3 18h18', key: '1h113x' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
  ],
  a0 = Ka('align-justify', l0)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n0 = [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]],
  u0 = Ka('chevron-left', n0)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i0 = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  nh = Ka('chevron-right', i0)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r0 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
    ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
  ],
  c0 = Ka('ellipsis', r0)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o0 = [
    ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
    [
      'path',
      {
        d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
        key: '1d0kgt',
      },
    ],
  ],
  Ja = Ka('house', o0)
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s0 = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  f0 = Ka('x', s0)
function d0() {
  const [i, o] = N.useState(!1),
    f = () => {
      const m = document.getElementById('navigationItems')
      m && (m.classList.toggle('hidden'), o(!i))
    },
    c = () => {
      const m = document.getElementById('navigationItems')
      m && window.innerWidth < 768 && (m.classList.add('hidden'), o(!1))
    }
  return (
    window.addEventListener('resize', c),
    window.addEventListener('scroll', c),
    d.jsxs('nav', {
      className:
        'card border-effect fixed top-2 z-20 inline-flex min-h-14 w-[calc(100%-1rem)] items-center md:sticky md:w-full',
      children: [
        d.jsx('img', {
          src: Qm,
          height: 48,
          width: 192,
          alt: 'FurGroove logo',
          className: 'absolute max-md:top-1 md:relative',
        }),
        d.jsx('ul', {
          id: 'navigationItems',
          className:
            'ml-4 hidden w-full max-w-lg flex-col place-content-around max-md:mt-14 max-md:pb-4 md:mx-auto md:flex md:flex-row',
          children: hg.map((m) =>
            d.jsx(m0, { onClick: c, href: m.href, content: m.content }, m.href)
          ),
        }),
        d.jsx(Ic, {
          variant: 'icon',
          className:
            'text-primary-50 mt-2 mr-2 mb-auto ml-auto aspect-square h-10 bg-transparent shadow-none md:hidden',
          onClick: f,
          children: i ? d.jsx(f0, {}) : d.jsx(a0, {}),
        }),
      ],
    })
  )
}
function m0({ content: i, href: o, onClick: f }) {
  return d.jsx(
    'li',
    {
      onClick: f,
      className: 'hover:bg-primary-700/50 w-fit rounded-lg px-4 py-2 transition-colors',
      children: d.jsx(lu, { to: o, className: 'text-xl', children: i }),
    },
    o
  )
}
function h0() {
  return d.jsxs('footer', {
    className: 'card border-effect mb-4 flex flex-col gap-2 p-4',
    children: [
      d.jsx('img', {
        src: Qm,
        height: 48,
        width: 192,
        alt: 'FurGroove logo',
        className: '-mt-2 -ml-3',
      }),
      d.jsxs('ul', {
        children: [
          d.jsx('li', {
            children: d.jsx('a', {
              href: 'https://t.me/furgroove',
              target: '_blank',
              rel: 'noreferrer',
              children: 'Telegram Group',
            }),
          }),
          d.jsx('li', {
            children: d.jsx('a', {
              href: 'https://t.me/furgrooveinfo',
              target: '_blank',
              rel: 'noreferrer',
              children: 'Telegram Channel',
            }),
          }),
          d.jsx('p', { className: 'mt-4 opacity-50', children: 'kvk.no: 95840346' }),
        ],
      }),
    ],
  })
}
function y0() {
  const i = Hl()
  return (
    N.useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, [i.pathname]),
    d.jsxs(d.Fragment, { children: [d.jsx(d0, {}), d.jsx(Dv, {}), d.jsx(h0, {})] })
  )
}
var _t = ((i) => (
  (i.Pink = '#ff369b'), (i.Blue = '#16ffec'), (i.Yellow = '#fceb72'), (i.Default = '#E8DCF9'), i
))(_t || {})
function Me({ className: i, ...o }) {
  return d.jsx('section', { className: rl('card border-effect p-4', i), ...o })
}
function p0({ color: i = _t.Default, className: o, ...f }) {
  return d.jsx('h2', { style: { color: i }, className: rl('text-2xl uppercase', o), ...f })
}
Me.Title = p0
function v0({ ...i }) {
  return d.jsx('div', { ...i })
}
Me.Content = v0
function eo({ children: i }) {
  return d.jsxs('section', {
    className: 'flex flex-col gap-4 md:gap-12 md:p-4',
    children: [
      d.jsx('h2', {
        className: 'text-accent-blue text-2xl uppercase max-md:pl-4',
        children: 'Events',
      }),
      i,
    ],
  })
}
function g0(i) {
  return d.jsxs('div', {
    className: 'relative flex gap-10 md:pl-8',
    children: [
      d.jsxs('div', {
        className: 'relative my-auto min-w-48 text-nowrap max-md:hidden',
        children: [
          d.jsx('div', {
            style: { backgroundColor: i.color },
            className: 'absolute top-1/2 -left-8 h-2 w-2 rounded-full',
            role: 'presentation',
          }),
          d.jsx('h3', { className: 'text-lg uppercase', children: i.title }),
          d.jsx('p', { children: i.date }),
        ],
      }),
      d.jsxs('div', {
        className:
          'max-md:bg-primary-700/25 border-t-primary-100/10 border-l-primary-100/10 ring-primary-700/20 relative flex flex-col gap-4 p-2 pl-8 max-md:rounded-lg max-md:border-t max-md:border-l max-md:p-4 max-md:shadow-md max-md:ring',
        children: [
          d.jsx('div', {
            style: { backgroundColor: i.color },
            className: 'absolute left-0 h-full w-1.5 rounded-full max-md:hidden',
            role: 'presentation',
          }),
          d.jsxs('section', {
            className: 'md:hidden',
            children: [
              d.jsx('h3', { className: 'text-xl uppercase', children: i.title }),
              d.jsx('p', { className: 'text-lg opacity-80', children: i.date }),
            ],
          }),
          d.jsx('p', { className: `${i.teaser && 'blur-sm'}`, children: i.content }),
          !i.teaser &&
            d.jsx(lu, {
              style: { backgroundColor: i.color },
              title: i.title,
              to: i.link,
              className:
                'text-primary-950 w-max rounded-lg px-8 py-1.5 font-semibold transition-colors duration-150 hover:opacity-80',
              children: 'Go to event',
            }),
        ],
      }),
    ],
  })
}
eo.Content = g0
function oo() {
  return d.jsxs('div', {
    className: 'relative h-screen w-full md:h-fit',
    children: [
      d.jsx('img', {
        src: '/images/backdrop.webp',
        height: 640,
        width: 1024,
        alt: 'Backdrop',
        role: 'presentation',
        className: 'h-full object-cover',
      }),
      d.jsx('img', {
        src: '/vectors/logo.svg',
        width: 720,
        alt: 'FurGroove logo',
        role: 'presentation',
        className: 'absolute top-1/3 left-1/2 -translate-x-1/2',
      }),
    ],
  })
}
const b0 = [
    {
      title: 'FurGroove: Summer',
      date: 'July 5th 2025',
      content:
        'Get ready for the ultimate summer party! The fun kicks off at 20:00 and keeps the energy high for six unforgettable hours. Our resident and new DJs, known from FurGroove, Eurofurence and several cons across Europe, will be spinning the hottest summer tunes—all styles, all vibes, all night long! Need a breather? Step outside, feel the warm summer breeze, and cool down with a refreshing drink and tasty snacks.',
      link: '/event/summer-edition-2025',
      color: _t.Pink,
    },
    {
      title: 'FurGroove 3',
      date: 'January 2026',
      content:
        'Get ready for the ultimate summer party! The fun kicks off at 20:00 and keeps the energy high for six unforgettable hours. Our resident and new DJs, known from FurGroove, Eurofurence and several cons across Europe, will be spinning the hottest summer tunes—all styles, all vibes, all night long! Need a breather? Step outside, feel the warm summer breeze, and cool down with a refreshing drink and tasty snacks.',
      link: '',
      color: _t.Blue,
      teaser: !0,
    },
    {
      title: 'FurGroove',
      date: 'TBD',
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: '',
      color: _t.Yellow,
      teaser: !0,
    },
  ],
  x0 = '/images/preview/preview-1.webp',
  S0 = '/images/preview/preview-2.webp',
  E0 = '/images/preview/preview-3.webp',
  T0 = '/images/preview/preview-4.webp'
function A0() {
  return d.jsxs('div', {
    children: [
      d.jsxs('section', {
        className: 'flex items-center pb-6 md:p-4',
        children: [
          d.jsx('h2', {
            className: 'text-accent-yellow text-2xl uppercase max-md:pl-4',
            children: 'Impressions',
          }),
          d.jsx('p', { className: 'ml-auto opacity-50', children: 'Photos by ' }),
          d.jsx('a', {
            className: 'opacity-50 transition-opacity duration-200 hover:opacity-100',
            href: 'https://gorgophotos.nl',
            rel: 'noreferrer',
            target: '_blank',
            children: 'gorgophotos.nl',
          }),
        ],
      }),
      d.jsxs('div', {
        className: 'grid gap-2 md:gap-4 md:pr-4',
        children: [
          d.jsxs('div', {
            className: 'flex gap-2 max-md:flex-col md:gap-4',
            children: [
              d.jsx('img', {
                src: x0,
                alt: 'Preview 1',
                width: 672,
                height: 520,
                className: 'w-full rounded-xl md:w-2/3 md:rounded-2xl',
              }),
              d.jsx('img', {
                src: S0,
                alt: 'Preview 1',
                width: 336,
                height: 520,
                className: 'w-full rounded-xl md:w-1/3 md:rounded-2xl',
              }),
            ],
          }),
          d.jsxs('div', {
            className: 'flex gap-2 max-md:flex-col md:gap-4',
            children: [
              d.jsx('img', {
                src: E0,
                alt: 'Preview 1',
                width: 336,
                height: 520,
                className: 'w-full rounded-xl md:w-1/3 md:rounded-2xl',
              }),
              d.jsx('img', {
                src: T0,
                alt: 'Preview 1',
                width: 672,
                height: 520,
                className: 'w-full rounded-xl md:w-2/3 md:rounded-2xl',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function w0() {
  return d.jsxs('main', {
    className: 'flex flex-col gap-16 pb-2 max-md:pt-14 md:pb-4',
    children: [
      d.jsx(oo, {}),
      d.jsxs(Me, {
        className: 'flex flex-col gap-2 p-4',
        children: [
          d.jsx(Me.Title, { color: _t.Pink, children: 'FurGroove' }),
          d.jsx(Me.Content, {
            children: d.jsx('p', {
              children:
                'Welcome to FurGroove. Events made by furries for furries. We host different events throughout the year ranging from regular dance parties to 18+ events. Whether you wanna dance along to our DJs, have a drink with your friends or strut around in your fursuit FurGroove has something for everyone to enjoy!',
            }),
          }),
        ],
      }),
      d.jsx(eo, { children: b0.map((i) => N.createElement(eo.Content, { ...i, key: i.link })) }),
      d.jsx(A0, {}),
    ],
  })
}
function P({ className: i, ...o }) {
  return d.jsx('nav', {
    'aria-label': 'breadcrumb',
    ...o,
    className: rl('pt-20 pl-2 md:pt-4 md:pl-4', i),
  })
}
function z0({ className: i, ...o }) {
  return d.jsx('ol', {
    className: rl('text-primary-50/80 flex flex-wrap items-center gap-2 text-sm break-words', i),
    ...o,
  })
}
P.List = z0
function R0({ className: i, ...o }) {
  return d.jsx('li', {
    className: rl('hover:text-primary-50 inline-flex items-center gap-2', i),
    ...o,
  })
}
P.Item = R0
function j0({ to: i, className: o, ...f }) {
  return d.jsx(lu, { to: i, className: rl('transition-colors', o), ...f })
}
P.Link = j0
function N0({ className: i, ...o }) {
  return d.jsx('span', {
    role: 'link',
    'aria-disabled': 'true',
    'aria-current': 'page',
    className: rl('hover:text-primary-50/80 font-normal', i),
    ...o,
  })
}
P.Page = N0
function M0({ className: i, ...o }) {
  return d.jsx('li', {
    role: 'presentation',
    'aria-hidden': 'true',
    className: i,
    ...o,
    children: d.jsx(nh, { size: 16 }),
  })
}
P.Separator = M0
function O0({ className: i, ...o }) {
  return d.jsxs('span', {
    role: 'presentation',
    'aria-hidden': 'true',
    className: rl('flex size-5 items-center justify-center', i),
    ...o,
    children: [d.jsx(c0, { size: 16 }), d.jsx('span', { className: 'sr-only', children: 'More' })],
  })
}
P.Ellipsis = O0
function _0() {
  return d.jsx(d.Fragment, {
    children: d.jsx(P, {
      children: d.jsxs(P.List, {
        children: [
          d.jsx(P.Item, {
            children: d.jsxs(P.Link, {
              to: '/',
              children: [
                d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                d.jsx('span', { className: 'sr-only', children: 'Home' }),
              ],
            }),
          }),
          d.jsx(P.Separator, {}),
          d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'Gallery' }) }),
        ],
      }),
    }),
  })
}
function la({ children: i }) {
  const o = N.useRef(null),
    [f, c] = N.useState(!0),
    [m, y] = N.useState(!1),
    x = () => {
      const { scrollLeft: h, scrollWidth: w, clientWidth: H } = o.current
      y(h > 0), c(h < w - H)
    },
    R = () => {
      o.current && o.current.scrollBy({ left: -336, behavior: 'smooth' })
    },
    v = () => {
      o.current && o.current.scrollBy({ left: 336, behavior: 'smooth' })
    }
  return d.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      d.jsx('div', {
        ref: o,
        onScroll: x,
        className: 'flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none]',
        children: d.jsx('div', { className: 'inline-flex justify-start gap-4 pt-2', children: i }),
      }),
      d.jsxs('div', {
        className: 'flex justify-end gap-2',
        children: [
          d.jsx(Ic, { variant: 'icon', onClick: R, disabled: !m, children: d.jsx(u0, {}) }),
          d.jsx(Ic, { variant: 'icon', onClick: v, disabled: !f, children: d.jsx(nh, {}) }),
        ],
      }),
    ],
  })
}
function D0(i) {
  return d.jsxs('div', {
    className:
      'group relative flex h-[30rem] w-xs flex-col gap-4 overflow-hidden rounded-2xl shadow-md transition-transform duration-150 hover:-translate-y-2',
    children: [
      d.jsxs('div', {
        className:
          'bg-primary-800/50 absolute inset-0 h-fit p-8 backdrop-blur-md transition-opacity duration-150 group-hover:opacity-0',
        children: [
          d.jsx('h3', { className: 'uppercase', children: i.title }),
          d.jsx('h4', { className: 'mt-2 text-2xl font-semibold', children: i.description }),
        ],
      }),
      d.jsx('img', {
        src: i.src,
        alt: i.title,
        height: 480,
        width: 320,
        className: 'h-full object-cover',
      }),
    ],
  })
}
la.Slide = D0
const C0 = [
  { title: 'Hunter', description: 'Founder', src: '/images/people/hunter.webp' },
  { title: 'Mai Tai', description: 'Developer', src: '/images/people/mai.webp' },
  { title: 'Mayk', description: 'Artist Relations', src: '/images/people/mayk.webp' },
  { title: 'Doroki', description: 'Treasurer', src: '/images/people/doroki.webp' },
  { title: 'Menos', description: 'Security', src: '/images/people/menos.webp' },
  { title: 'Vaelken', description: 'Coordinator', src: '/images/people/vaelken.webp' },
  { title: 'Ryan', description: 'Fursuit Lounge', src: '/images/people/ryan.webp' },
]
function U0() {
  return d.jsxs('section', {
    className: 'flex flex-col gap-2',
    children: [
      d.jsx('h2', {
        className: 'text-accent-blue p-2 text-2xl uppercase md:p-4',
        children: 'Team',
      }),
      d.jsx(la, { children: C0.map((i) => N.createElement(la.Slide, { ...i, key: i.title })) }),
    ],
  })
}
function H0() {
  return d.jsxs('section', {
    className: 'flex flex-col gap-2 p-2 max-md:pt-6 md:p-4',
    children: [
      d.jsx('h2', { className: 'text-accent-pink text-2xl uppercase', children: 'General' }),
      d.jsxs('p', {
        children: [
          'We wish to create the best atmosphere possible for everyone attending FurGroove, we therefore encourage you to read our ',
          d.jsx(lu, {
            title: 'Code of conduct',
            to: '/about/code-of-conduct',
            className: 'decoration-accent-pink none underline underline-offset-4',
            children: 'Code of Conduct',
          }),
          ' before attending the party. Here you may also find general rulesets for the event, in addition to our dress code. If you have any further questions not listed, you can contact us though our ',
          d.jsx('a', {
            title: 'Telegram Group Chat',
            href: 'https://t.me/furgroove',
            target: '_blank',
            rel: 'noreferrer',
            className: 'decoration-accent-pink none underline underline-offset-4',
            children: 'Telegram Group Chat',
          }),
          ', or by E-mail at ',
          d.jsx('a', { href: 'mailto:info@furgroove.club', children: 'info@furgroove.club' }),
          '.',
        ],
      }),
    ],
  })
}
function B0() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(P, {
        children: d.jsxs(P.List, {
          children: [
            d.jsx(P.Item, {
              children: d.jsxs(P.Link, {
                to: '/',
                children: [
                  d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                  d.jsx('span', { className: 'sr-only', children: 'Home' }),
                ],
              }),
            }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'About' }) }),
          ],
        }),
      }),
      d.jsxs('main', {
        className: 'flex flex-col gap-12 pb-4',
        children: [d.jsx(H0, {}), d.jsx(U0, {})],
      }),
    ],
  })
}
function q0() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(P, {
        children: d.jsxs(P.List, {
          children: [
            d.jsx(P.Item, {
              children: d.jsxs(P.Link, {
                to: '/',
                children: [
                  d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                  d.jsx('span', { className: 'sr-only', children: 'Home' }),
                ],
              }),
            }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Link, { to: '/about', children: 'About' }) }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'Code of Conduct' }) }),
          ],
        }),
      }),
      d.jsxs('main', {
        className: 'flex flex-col gap-2.5 p-2 pb-12 md:p-4',
        children: [
          d.jsx('h2', {
            className: 'text-accent-pink pt-4 text-2xl uppercase',
            children: 'Code of Conduct',
          }),
          d.jsx('p', {
            className: 'pt-4',
            children:
              'We want to build the best party ever for you. To make sure that everything runs smoothly and fun we have a few rules for everyone. Please make yourself familiar with them. Most are common sense but we still want to be sure you know what to expect. The rules will be enforced by the Party Crew. Please listen to them at all times and follow their requests. If you have any problem with one of the crew members, please let one of the party staff members know.',
          }),
          d.jsxs('ul', {
            className: 'list-paw relative py-4 pl-12',
            children: [
              d.jsx('li', { children: 'Always treat each other with respect.' }),
              d.jsx('li', { children: 'Always follow the directions by the Party Crew.' }),
              d.jsx('li', { children: 'You are liable for any damage you might cause.' }),
              d.jsx('li', { children: 'We do not accept any kind of harassment, period.' }),
              d.jsx('li', {
                children:
                  'While we are inside a location we are still visible for the other public. Please behave like that and give the best impression.',
              }),
            ],
          }),
          d.jsx('h3', { className: 'text-xl', children: 'Registration' }),
          d.jsxs('ul', {
            className: 'list-paw relative py-4 pl-12',
            children: [
              d.jsx('li', {
                children: 'You have to be at least 18 on the day of the party to attend.',
              }),
              d.jsx('li', {
                children: 'Only staff and registered attendees are allowed inside the location.',
              }),
              d.jsx('li', {
                children:
                  'Attendees are required to wear their badge and lanyard at all times during the party.',
              }),
              d.jsx('li', { children: 'Badges need to be shown upon request by staff.' }),
            ],
          }),
          d.jsx('h3', { className: 'text-xl', children: 'Venue Rules' }),
          d.jsxs('ul', {
            className: 'list-paw relative py-4 pl-12',
            children: [
              d.jsx('li', {
                children:
                  'It is not allowed to climb over any railings or walk on parts that are off limits for attendees.',
              }),
              d.jsx('li', {
                children: 'It is not allowed to bring your own beverages or food to the party.',
              }),
              d.jsx('li', {
                children: 'It is not allowed to smoke outside of the designated smoke area.',
              }),
              d.jsx('li', {
                children:
                  'Please do not use personal music players while at the location. We have music for a reason.',
              }),
            ],
          }),
          d.jsx('h3', { className: 'text-xl', children: 'Clothing & Decency' }),
          d.jsxs('ul', {
            className: 'list-paw relative py-4 pl-12',
            children: [
              d.jsx('li', {
                children: 'Nudity exceeding the equivalent of bathing suits is not allowed.',
              }),
              d.jsx('li', {
                children:
                  'Sexual behavior that goes beyond a mere display of affection is not allowed in public.',
              }),
              d.jsx('li', {
                children:
                  'Display of fetish gear is not permitted in public, even if it is part of a costume.',
              }),
            ],
          }),
          d.jsx('h3', { className: 'pt-2 pb-4 text-xl', children: 'Drugs & Alcohol' }),
          d.jsx('p', {
            children:
              'It is forbidden to bring or use drugs to the party. If we find you in the possession of or distributing illegal or controlled substances we will notify the local authorities and the venue. Smoking and vaping is only allowed in the designated smoking areas.',
          }),
          d.jsx('h3', { className: 'pt-6 pb-4 text-xl', children: 'Photography & Video' }),
          d.jsx('p', {
            children:
              'Everyone is welcome to take pictures and capture memories for private use. Selling or using the videos and pictures for profitable companies is not allowed.',
          }),
        ],
      }),
    ],
  })
}
function to({ children: i }) {
  return d.jsxs('section', {
    className: 'flex flex-col gap-4 max-md:pt-6',
    children: [
      d.jsx('h2', {
        className: 'text-accent-pink p-2 text-2xl uppercase md:p-4',
        children: 'Archive',
      }),
      i,
    ],
  })
}
function G0(i) {
  return d.jsxs(Me, {
    className: 'flex flex-col gap-2',
    children: [
      d.jsx(Me.Title, { color: i.color, children: i.title }),
      d.jsx(Me.Content, { children: d.jsx('p', { children: i.content }) }),
    ],
  })
}
to.Event = G0
const L0 = [
  {
    color: _t.Blue,
    title: 'FurGroove 2',
    content:
      'This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!',
  },
  {
    color: _t.Yellow,
    title: 'FurGroove: Sets Sail',
    content:
      'This event was hosted cruising through the canals of Rotterdam on a boat from BOOT10, the trip lasted for four hours exploring the canals as fluffy as possible. With over 200 attendees, many in fursuits, this was the place to be!',
  },
  {
    color: _t.Pink,
    title: 'FurGroove 1',
    content:
      'This first edition of FurGroove was hosted at the iconic Fort33 venue, lasting from 20:00 to 02:00. With over 150 attendees, this was a great beginning to the FurGroove series.',
  },
]
function Y0() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(P, {
        children: d.jsxs(P.List, {
          children: [
            d.jsx(P.Item, {
              children: d.jsxs(P.Link, {
                to: '/',
                children: [
                  d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                  d.jsx('span', { className: 'sr-only', children: 'Home' }),
                ],
              }),
            }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'Archive' }) }),
          ],
        }),
      }),
      d.jsx('main', {
        className: 'flex flex-col gap-12 pb-4',
        children: d.jsx(to, {
          children: L0.map((i) => N.createElement(to.Event, { ...i, key: i.title })),
        }),
      }),
    ],
  })
}
function k0() {
  return d.jsx(d.Fragment, { children: d.jsx('h1', { children: '404' }) })
}
const X0 = [
  { title: 'Bar', description: 'Get a drink', src: '/images/event/venue/venue_1.webp' },
  {
    title: 'Lounge area',
    description: 'Recharge and relax',
    src: '/images/event/venue/venue_2.webp',
  },
  {
    title: 'Meet new furries',
    description: 'An unforgettable night',
    src: '/images/event/venue/venue_3.webp',
  },
  { title: 'Dance floor', description: 'Own the night', src: '/images/event/venue/venue_4.webp' },
]
function uh() {
  return d.jsxs('section', {
    className: 'flex flex-col gap-2',
    children: [
      d.jsx('h2', { className: 'text-accent-blue p-4 text-2xl uppercase', children: 'Venue' }),
      d.jsx(la, { children: X0.map((i) => N.createElement(la.Slide, { ...i, key: i.title })) }),
    ],
  })
}
function ih() {
  return d.jsxs('section', {
    className: 'mt-12 flex flex-col gap-4',
    children: [
      d.jsx('h2', { className: 'text-accent-yellow p-4 text-2xl uppercase', children: 'Travel' }),
      d.jsxs('div', {
        className: 'grid grid-cols-1 gap-4 md:grid-cols-3',
        children: [
          d.jsx(Me, {
            className: 'aspect-square p-0 max-md:order-2 max-md:w-[calc(100vw-1rem)]',
            children: d.jsx('img', {
              src: '/images/event/map.webp',
              alt: 'Map of venue location',
              className: 'w-full object-cover',
            }),
          }),
          d.jsxs(Me, {
            className: 'col-span-2 flex flex-col max-md:order-1 max-md:gap-4',
            children: [
              d.jsx(Me.Title, { children: 'Four Seasons Leusden' }),
              d.jsxs(Me.Content, {
                className: 'my-auto flex flex-col gap-6',
                children: [
                  d.jsx('p', {
                    children:
                      'Join us in our new location at the Four Seasons Leusden. With a spectacular indoor bar, plenty of room to dance and a cozy outdoor section we are sure to level up the Furgroove experience.',
                  }),
                  d.jsx('p', {
                    children:
                      'ALocated at Kastanjelaan 1 in Leusden only a short distance from the A28 highway. Find more information about parking, public transport and hotels down below.',
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(Me, {
            className: 'col-span-2 flex flex-col max-md:order-3 max-md:gap-4',
            children: [
              d.jsx(Me.Title, { children: 'Parking & Public Transport' }),
              d.jsxs(Me.Content, {
                className: 'my-auto flex flex-col gap-6',
                children: [
                  d.jsx('p', {
                    children:
                      'At the event location we have space for 60 vehicles, in the surrounding area you are sure to find more available parking nearby!',
                  }),
                  d.jsx('p', {
                    children:
                      'From Amerfoort Centraal you can take bus no. 17 to Plesmanstraat, from here the event location is a short ~7min walk away. If you are staying at the VanderValk hotel it is a ~10min walk to FurGroove.',
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(Me, {
            className: 'max-md:order-4 max-md:w-[calc(100vw-1rem)]',
            children: [
              d.jsx(Me.Title, { children: 'Nearby Hotels' }),
              d.jsxs(Me.Content, {
                className: 'flex flex-col gap-2',
                children: [
                  d.jsx('h3', { className: 'text-xl opacity-50', children: 'Van Der Valk Hotel' }),
                  d.jsx('img', {
                    src: '/images/event/vanderwalk.webp',
                    className: 'aspect-square rounded-md',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function rh() {
  const i = (o) =>
    d.jsxs('div', {
      className: 'flex w-full flex-col gap-1 sm:max-w-32 sm:first-of-type:ml-auto',
      children: [
        d.jsxs('div', {
          className: 'bg-primary-700/25 relative aspect-square rounded-md shadow-md',
          children: [
            d.jsx('img', { src: o.src, alt: '', className: 'mx-auto mt-2 w-2/3' }),
            d.jsx('span', {
              className: 'absolute bottom-2 w-full text-center text-lg uppercase',
              children: o.title,
            }),
          ],
        }),
        d.jsx('div', {
          className: 'bg-primary-700/25 flex h-10 items-center justify-center rounded-md shadow-md',
          children: d.jsxs('span', { className: 'text-xl', children: [o.price, '€'] }),
        }),
      ],
    })
  return d.jsxs('section', {
    children: [
      d.jsx('h2', { className: 'text-accent-pink pb-4 text-2xl uppercase', children: 'Tickets' }),
      d.jsxs('div', {
        className: 'grid grid-cols-1 gap-4 sm:grid-cols-2',
        children: [
          d.jsxs('div', {
            className: 'flex flex-col gap-4',
            children: [
              d.jsxs('div', {
                className: 'my-auto flex flex-col gap-1',
                children: [
                  d.jsx('h3', { className: 'text-xl', children: 'Your ticket to FurGroove' }),
                  d.jsx('h4', {
                    className: 'text-lg opacity-75',
                    children: 'Tickets for this event come in three tiers',
                  }),
                ],
              }),
              d.jsx('a', {
                target: '_blank',
                href: 'https://eventix.shop/83fg7sdc',
                rel: 'noreferrer',
                className:
                  'bg-accent-pink text-primary-900 hidden max-w-96 rounded-md px-2.5 py-2 text-center sm:block',
                children: 'Purchase ticket',
              }),
            ],
          }),
          d.jsx('div', { className: 'flex gap-2 sm:gap-4', children: Q0.map((o) => i(o)) }),
          d.jsx('a', {
            target: '_blank',
            href: 'https://eventix.shop/83fg7sdc',
            rel: 'noreferrer',
            className:
              'bg-accent-pink text-primary-900 block rounded-md px-2.5 py-2 text-center sm:hidden',
            children: 'Purchase ticket',
          }),
        ],
      }),
    ],
  })
}
const Q0 = [
    { title: 'Early bird', price: 15, src: '/branding/icon_pink.webp' },
    { title: 'Regular', price: 25, src: '/branding/icon_blue.webp' },
    { title: 'Late bird', price: 50, src: '/branding/icon_yellow.webp' },
  ],
  V0 = [
    { title: '15:00 - 20:00', description: 'Mixed Music', src: '/branding/temp.jpg' },
    {
      title: '20:00 - 22:00',
      description: 'Beatbird (Tropical House)',
      src: '/images/people/mayk.webp',
    },
    {
      title: '22:00 - 23:20',
      description: 'YellowStreak (House)',
      src: '/images/people/yellowstreak.webp',
    },
    { title: '23:20 - 00:40', description: 'Kim (Bass House)', src: '/images/people/kim.webp' },
    { title: '00:40 - 02:00', description: 'Menos (Hardstyle)', src: '/images/people/menos.webp' },
  ]
function ch() {
  return d.jsxs('section', {
    className: 'flex flex-col gap-4',
    children: [
      d.jsx('h2', { className: 'text-accent-blue p-4 text-2xl uppercase', children: 'Artists' }),
      d.jsx(la, { children: V0.map((i) => N.createElement(la.Slide, { ...i, key: i.title })) }),
    ],
  })
}
function Z0() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(P, {
        className: 'absolute z-10',
        children: d.jsxs(P.List, {
          children: [
            d.jsx(P.Item, {
              children: d.jsxs(P.Link, {
                to: '/',
                children: [
                  d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                  d.jsx('span', { className: 'sr-only', children: 'Home' }),
                ],
              }),
            }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Ellipsis, {}),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'Summer Edition 2025' }) }),
          ],
        }),
      }),
      d.jsxs('main', {
        className: 'relative mb-4 flex flex-col gap-16 max-md:pt-14',
        children: [
          d.jsx(oo, {}),
          d.jsxs(Me, {
            className: 'flex flex-col gap-2 p-4',
            children: [
              d.jsx(Me.Title, { color: _t.Pink, children: 'FurGroove: Summer Edition' }),
              d.jsxs(Me.Content, {
                children: [
                  d.jsx('h3', {
                    className: 'text-primary-50/80 -mt-2 mb-4 text-xl',
                    children: '12th of July 2025',
                  }),
                  d.jsx('p', {
                    children:
                      'After the smashing success of FurGroove earlier this year, it’s time to soak up the sun and feel the summer magic at FurGroove Summer! Get ready to dance the night away on our vibrant and spacious dance floor as our amazing DJs spin the hottest summer beats at the stunning Four Seasons Leusden. Need to cool off? Take a dip in our outdoor dipping pool or sip on refreshing cocktails while enjoying the warm summer breeze. This is the ultimate summer party—you don’t want to miss it!',
                  }),
                ],
              }),
            ],
          }),
          d.jsx(uh, {}),
          d.jsx(ih, {}),
          d.jsx(rh, {}),
          d.jsx(ch, {}),
        ],
      }),
    ],
  })
}
function K0() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(P, {
        className: 'absolute z-10',
        children: d.jsxs(P.List, {
          children: [
            d.jsx(P.Item, {
              children: d.jsxs(P.Link, {
                to: '/',
                children: [
                  d.jsx(Ja, { size: 16, 'aria-hidden': 'true' }),
                  d.jsx('span', { className: 'sr-only', children: 'Home' }),
                ],
              }),
            }),
            d.jsx(P.Separator, {}),
            d.jsx(P.Ellipsis, {}),
            d.jsx(P.Separator, {}),
            d.jsx(P.Item, { children: d.jsx(P.Page, { children: 'Summer Edition 2025' }) }),
          ],
        }),
      }),
      d.jsxs('main', {
        className: 'relative mb-4 flex flex-col gap-16 max-md:pt-14',
        children: [
          d.jsx(oo, {}),
          d.jsxs(Me, {
            className: 'flex flex-col gap-2 p-4',
            children: [
              d.jsx(Me.Title, { color: _t.Pink, children: 'FurGroove: Summer Edition' }),
              d.jsxs(Me.Content, {
                children: [
                  d.jsx('h3', {
                    className: 'text-primary-50/80 -mt-2 mb-4 text-xl',
                    children: '12th of July 2025',
                  }),
                  d.jsx('p', {
                    children:
                      'After the smashing success of FurGroove earlier this year, it’s time to soak up the sun and feel the summer magic at FurGroove Summer! Get ready to dance the night away on our vibrant and spacious dance floor as our amazing DJs spin the hottest summer beats at the stunning Four Seasons Leusden. Need to cool off? Take a dip in our outdoor dipping pool or sip on refreshing cocktails while enjoying the warm summer breeze. This is the ultimate summer party—you don’t want to miss it!',
                  }),
                ],
              }),
            ],
          }),
          d.jsx(uh, {}),
          d.jsx(ih, {}),
          d.jsx(rh, {}),
          d.jsx(ch, {}),
        ],
      }),
    ],
  })
}
Lp.createRoot(document.getElementById('root')).render(
  d.jsx(N.StrictMode, {
    children: d.jsx(ug, {
      children: d.jsx(Uv, {
        children: d.jsxs(gt, {
          element: d.jsx(y0, {}),
          children: [
            d.jsx(gt, { index: !0, element: d.jsx(w0, {}) }),
            d.jsx(gt, { path: 'gallery', element: d.jsx(_0, {}) }),
            d.jsx(gt, { path: '*', element: d.jsx(k0, {}) }),
            d.jsxs(gt, {
              path: 'about',
              children: [
                d.jsx(gt, { index: !0, element: d.jsx(B0, {}) }),
                d.jsx(gt, { path: 'code-of-conduct', element: d.jsx(q0, {}) }),
              ],
            }),
            d.jsxs(gt, {
              path: 'event',
              children: [
                d.jsx(gt, { path: 'summer-edition-2025', element: d.jsx(K0, {}) }),
                d.jsx(gt, { path: 'january-edition-2026', element: d.jsx(Z0, {}) }),
              ],
            }),
            d.jsx(gt, {
              path: 'archive',
              children: d.jsx(gt, { index: !0, element: d.jsx(Y0, {}) }),
            }),
          ],
        }),
      }),
    }),
  })
)
