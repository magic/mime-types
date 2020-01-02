"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _ref = function () {
  var RECYCLED_NODE = 1;
  var LAZY_NODE = 2;
  var TEXT_NODE = 3;
  var EMPTY_OBJ = {};
  var EMPTY_ARR = [];
  var map = EMPTY_ARR.map;
  var isArray = Array.isArray;
  var defer = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;

  var createClass = function createClass(obj) {
    var out = "";
    if (typeof obj === "string") return obj;

    if (isArray(obj) && obj.length > 0) {
      for (var k = 0, tmp; k < obj.length; k++) {
        if ((tmp = createClass(obj[k])) !== "") {
          out += (out && " ") + tmp;
        }
      }
    } else {
      for (var k in obj) {
        if (obj[k]) {
          out += (out && " ") + k;
        }
      }
    }

    return out;
  };

  var merge = function merge(a, b) {
    var out = {};

    for (var k in a) {
      out[k] = a[k];
    }

    for (var k in b) {
      out[k] = b[k];
    }

    return out;
  };

  var batch = function batch(list) {
    return list.reduce(function (out, item) {
      return out.concat(!item || item === true ? 0 : typeof item[0] === "function" ? [item] : batch(item));
    }, EMPTY_ARR);
  };

  var isSameAction = function isSameAction(a, b) {
    return isArray(a) && isArray(b) && a[0] === b[0] && typeof a[0] === "function";
  };

  var shouldRestart = function shouldRestart(a, b) {
    if (a !== b) {
      for (var k in merge(a, b)) {
        if (a[k] !== b[k] && !isSameAction(a[k], b[k])) return true;
        b[k] = a[k];
      }
    }
  };

  var patchSubs = function patchSubs(oldSubs, newSubs, dispatch) {
    for (var i = 0, oldSub, newSub, subs = []; i < oldSubs.length || i < newSubs.length; i++) {
      oldSub = oldSubs[i];
      newSub = newSubs[i];
      subs.push(newSub ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [newSub[0], newSub[1], newSub[0](dispatch, newSub[1]), oldSub && oldSub[2]()] : oldSub : oldSub && oldSub[2]());
    }

    return subs;
  };

  var patchProperty = function patchProperty(node, key, oldValue, newValue, listener, isSvg) {
    if (key === "key") {} else if (key === "style") {
      for (var k in merge(oldValue, newValue)) {
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];

        if (k[0] === "-") {
          node[key].setProperty(k, oldValue);
        } else {
          node[key][k] = oldValue;
        }
      }
    } else if (key[0] === "o" && key[1] === "n") {
      if (!((node.actions || (node.actions = {}))[key = key.slice(2).toLowerCase()] = newValue)) {
        node.removeEventListener(key, listener);
      } else if (!oldValue) {
        node.addEventListener(key, listener);
      }
    } else if (!isSvg && key !== "list" && key in node) {
      node[key] = newValue == null ? "" : newValue;
    } else if (newValue == null || newValue === false || key === "class" && !(newValue = createClass(newValue))) {
      node.removeAttribute(key);
    } else {
      node.setAttribute(key, newValue);
    }
  };

  var createNode = function createNode(vdom, listener, isSvg) {
    var ns = "http://www.w3.org/2000/svg";
    var props = vdom.props;
    var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.name) : (isSvg = isSvg || vdom.name === "svg") ? document.createElementNS(ns, vdom.name, {
      is: props.is
    }) : document.createElement(vdom.name, {
      is: props.is
    });

    for (var k in props) {
      patchProperty(node, k, null, props[k], listener, isSvg);
    }

    for (var i = 0, len = vdom.children.length; i < len; i++) {
      node.appendChild(createNode(vdom.children[i] = getVNode(vdom.children[i]), listener, isSvg));
    }

    return vdom.node = node;
  };

  var getKey = function getKey(vdom) {
    return vdom == null ? null : vdom.key;
  };

  var patch = function patch(parent, node, oldVNode, newVNode, listener, isSvg) {
    if (oldVNode === newVNode) {} else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
      if (oldVNode.name !== newVNode.name) node.nodeValue = newVNode.name;
    } else if (oldVNode == null || oldVNode.name !== newVNode.name) {
      node = parent.insertBefore(createNode(newVNode = getVNode(newVNode), listener, isSvg), node);

      if (oldVNode != null) {
        parent.removeChild(oldVNode.node);
      }
    } else {
      var tmpVKid;
      var oldVKid;
      var oldKey;
      var newKey;
      var oldVProps = oldVNode.props;
      var newVProps = newVNode.props;
      var oldVKids = oldVNode.children;
      var newVKids = newVNode.children;
      var oldHead = 0;
      var newHead = 0;
      var oldTail = oldVKids.length - 1;
      var newTail = newVKids.length - 1;
      isSvg = isSvg || newVNode.name === "svg";

      for (var i in merge(oldVProps, newVProps)) {
        if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldVProps[i]) !== newVProps[i]) {
          patchProperty(node, i, oldVProps[i], newVProps[i], listener, isSvg);
        }
      }

      while (newHead <= newTail && oldHead <= oldTail) {
        if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) {
          break;
        }

        patch(node, oldVKids[oldHead].node, oldVKids[oldHead], newVKids[newHead] = getVNode(newVKids[newHead++], oldVKids[oldHead++]), listener, isSvg);
      }

      while (newHead <= newTail && oldHead <= oldTail) {
        if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) {
          break;
        }

        patch(node, oldVKids[oldTail].node, oldVKids[oldTail], newVKids[newTail] = getVNode(newVKids[newTail--], oldVKids[oldTail--]), listener, isSvg);
      }

      if (oldHead > oldTail) {
        while (newHead <= newTail) {
          node.insertBefore(createNode(newVKids[newHead] = getVNode(newVKids[newHead++]), listener, isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
        }
      } else if (newHead > newTail) {
        while (oldHead <= oldTail) {
          node.removeChild(oldVKids[oldHead++].node);
        }
      } else {
        for (var i = oldHead, keyed = {}, newKeyed = {}; i <= oldTail; i++) {
          if ((oldKey = oldVKids[i].key) != null) {
            keyed[oldKey] = oldVKids[i];
          }
        }

        while (newHead <= newTail) {
          oldKey = getKey(oldVKid = oldVKids[oldHead]);
          newKey = getKey(newVKids[newHead] = getVNode(newVKids[newHead], oldVKid));

          if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
            if (oldKey == null) {
              node.removeChild(oldVKid.node);
            }

            oldHead++;
            continue;
          }

          if (newKey == null || oldVNode.type === RECYCLED_NODE) {
            if (oldKey == null) {
              patch(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
              newHead++;
            }

            oldHead++;
          } else {
            if (oldKey === newKey) {
              patch(node, oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
              newKeyed[newKey] = true;
              oldHead++;
            } else {
              if ((tmpVKid = keyed[newKey]) != null) {
                patch(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], listener, isSvg);
                newKeyed[newKey] = true;
              } else {
                patch(node, oldVKid && oldVKid.node, null, newVKids[newHead], listener, isSvg);
              }
            }

            newHead++;
          }
        }

        while (oldHead <= oldTail) {
          if (getKey(oldVKid = oldVKids[oldHead++]) == null) {
            node.removeChild(oldVKid.node);
          }
        }

        for (var i in keyed) {
          if (newKeyed[i] == null) {
            node.removeChild(keyed[i].node);
          }
        }
      }
    }

    return newVNode.node = node;
  };

  var propsChanged = function propsChanged(a, b) {
    for (var k in a) {
      if (a[k] !== b[k]) return true;
    }

    for (var k in b) {
      if (a[k] !== b[k]) return true;
    }
  };

  var getTextVNode = function getTextVNode(node) {
    return _typeof(node) === "object" ? node : createTextVNode(node);
  };

  var getVNode = function getVNode(newVNode, oldVNode) {
    return newVNode.type === LAZY_NODE ? ((!oldVNode || oldVNode.type !== LAZY_NODE || propsChanged(oldVNode.lazy, newVNode.lazy)) && ((oldVNode = getTextVNode(newVNode.lazy.view(newVNode.lazy))).lazy = newVNode.lazy), oldVNode) : newVNode;
  };

  var createVNode = function createVNode(name, props, children, node, key, type) {
    return {
      name: name,
      props: props,
      children: children,
      node: node,
      type: type,
      key: key
    };
  };

  var createTextVNode = function createTextVNode(value, node) {
    return createVNode(value, EMPTY_OBJ, EMPTY_ARR, node, undefined, TEXT_NODE);
  };

  var recycleNode = function recycleNode(node) {
    return node.nodeType === TEXT_NODE ? createTextVNode(node.nodeValue, node) : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ, map.call(node.childNodes, recycleNode), node, undefined, RECYCLED_NODE);
  };

  var Lazy = function Lazy(props) {
    return {
      lazy: props,
      type: LAZY_NODE
    };
  };

  var h = function h(name, props) {
    for (var vdom, rest = [], children = [], i = arguments.length; i-- > 2;) {
      rest.push(arguments[i]);
    }

    while (rest.length > 0) {
      if (isArray(vdom = rest.pop())) {
        for (var i = vdom.length; i-- > 0;) {
          rest.push(vdom[i]);
        }
      } else if (vdom === false || vdom === true || vdom == null) {} else {
        children.push(getTextVNode(vdom));
      }
    }

    props = props || EMPTY_OBJ;
    return typeof name === "function" ? name(props, children) : createVNode(name, props, children, undefined, props.key);
  };

  var app = function app(props) {
    var state = {};
    var lock = false;
    var view = props.view;
    var node = props.node;
    var vdom = node && recycleNode(node);
    var subscriptions = props.subscriptions;
    var subs = [];

    var listener = function listener(event) {
      dispatch(this.actions[event.type], event);
    };

    var setState = function setState(newState) {
      if (state !== newState) {
        state = newState;

        if (subscriptions) {
          subs = patchSubs(subs, batch([subscriptions(state)]), dispatch);
        }

        if (view && !lock) defer(render, lock = true);
      }

      return state;
    };

    var dispatch = (props.middleware || function (obj) {
      return obj;
    })(function (action, props) {
      return typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" || isArray(action[0]) ? dispatch(action[0], typeof action[1] === "function" ? action[1](props) : action[1]) : (batch(action.slice(1)).map(function (fx) {
        fx && fx[0](dispatch, fx[1]);
      }, setState(action[0])), state) : setState(action);
    });

    var render = function render() {
      lock = false;
      node = patch(node.parentNode, node, vdom, vdom = getTextVNode(view(state)), listener);
    };

    dispatch(props.init);
  };

  return {
    h: h,
    app: app
  };
}(),
    h = _ref.h,
    app = _ref.app;

var C = function C(n) {
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var is = function is(ele) {
      for (var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        types[_key - 1] = arguments[_key];
      }

      return types.some(function (type) {
        return type === _typeof(ele);
      });
    };

    if (!c) {
      if (is(props, 'string', 'number', 'function') || Array.isArray(props)) {
        c = props;
        props = {};
      } else if (is(props.View, 'function')) {
        c = props.View;
        props = {};
      } else if (props.props || props.c) {
        return h(n, {}, props);
      }
    }

    return h(n, props, c);
  };
};

var a = C('a');
var button = C('button');
var circle = C('circle');
var code = C('code');
var div = C('div');
var footer = C('footer');
var g = C('g');
var h1 = C('h1');
var h2 = C('h2');
var h3 = C('h3');
var h4 = C('h4');
var h5 = C('h5');
var header = C('header');
var img = C('img');
var input = C('input');
var label = C('label');
var li = C('li');
var link = C('link');
var main = C('main');
var meta = C('meta');
var nav = C('nav');
var p = C('p');
var path = C('path');
var pre = C('pre');
var script = C('script');
var span = C('span');
var svg = C('svg');
var title = C('title');
var ul = C('ul');
var view = C('view');
var initialState = {
  'description': ['mime-db mimetypes that have file extensions.', 'exports a key => value store, where key = extension and value = mime/type'],
  'gdpr': {
    'allowed': [],
    'show': true
  },
  'logotext': '@magic/log',
  'menu': [{
    'text': 'getting started',
    'to': '/#getting-started'
  }, {
    'text': 'install',
    'to': '/#install'
  }, {
    'text': 'import',
    'to': '/#import'
  }, {
    'text': 'usage',
    'to': '/#usage'
  }, {
    'items': [{
      'text': 'v0.0.1',
      'to': '-0.0.1'
    }],
    'text': 'changelog',
    'to': '/#changelog'
  }, {
    'text': 'source',
    'to': '/#source'
  }],
  'pageClass': {},
  'root': '/mime-types/',
  'theme': 'dark',
  'title': '@magic/mime-types',
  'url': '/mime-types/'
};
var helpers = {
  'listenPopState': function listenPopState(dispatch, action) {
    var listener = function listener(e) {
      return dispatch(action, e);
    };

    addEventListener('popstate', listener);
    return function () {
      return removeEventListener('popstate', listener);
    };
  }
};

var BlogMonth = function BlogMonth(state) {
  var blog = state.blog,
      link = state.link,
      month = state.month,
      url = state.url,
      year = state.year;
  var months = Object.entries(blog[year][month]);
  var to;
  var title = [month];

  if (link) {
    to = "".concat(link).concat(month, "/");
  } else {
    title.push(' - ', year);
  }

  return [h3(to ? Link({
    to: to
  }, title) : title), months.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        day = _ref5[0],
        posts = _ref5[1];

    return posts.map(function (post) {
      return BlogTeaser(_objectSpread({}, state, {}, post.state, {
        name: post.name,
        link: to,
        day: day
      }));
    });
  })];
};

var BlogTeaser = function BlogTeaser(state) {
  return div([h4([state.day, '-', state.month, '-', state.year, ' - ', Link({
    to: state.name
  }, state.title)]), p(state.description)]);
};

var BlogYear = function BlogYear(state) {
  var link = state.link,
      year = state.year,
      blog = state.blog,
      url = state.url;
  var to;

  if (link) {
    to = "".concat(link).concat(year, "/");
  } else if (url.endsWith("".concat(year, "/"))) {
    to = url;
  }

  return div([h2(link ? Link({
    to: to
  }, year) : year), Object.entries(blog[year]).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        month = _ref7[0],
        days = _ref7[1];

    return BlogMonth(_objectSpread({}, state, {
      month: month,
      days: days,
      link: to
    }));
  })]);
};

var Footer = function Footer(state) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return footer({
    "class": 'Footer'
  }, [div({
    "class": 'Container'
  }, [children, div({
    "class": 'Credits'
  }, ['made with a few bits of ', Link({
    to: 'https://github.com/magic/core',
    target: '_blank',
    rel: 'noopener'
  }, 'magic')])])]);
};

var Gdpr = function Gdpr(_ref8) {
  var _ref8$gdpr = _ref8.gdpr,
      gdpr = _ref8$gdpr === void 0 ? {} : _ref8$gdpr,
      _ref8$cookies = _ref8.cookies,
      cookies = _ref8$cookies === void 0 ? [] : _ref8$cookies;
  var show = gdpr.show,
      _gdpr$title = gdpr.title,
      title = _gdpr$title === void 0 ? 'Privacy Information' : _gdpr$title,
      _gdpr$content = gdpr.content,
      content = _gdpr$content === void 0 ? 'This app neither saves, collects, nor shares any data about you.' : _gdpr$content,
      _gdpr$noDataText = gdpr.noDataText,
      noDataText = _gdpr$noDataText === void 0 ? 'Awesome.' : _gdpr$noDataText,
      _gdpr$allowTitle = gdpr.allowTitle,
      allowTitle = _gdpr$allowTitle === void 0 ? 'Allow:' : _gdpr$allowTitle,
      _gdpr$allowAllText = gdpr.allowAllText,
      allowAllText = _gdpr$allowAllText === void 0 ? 'All' : _gdpr$allowAllText,
      _gdpr$allowText = gdpr.allowText,
      allowText = _gdpr$allowText === void 0 ? 'Selected' : _gdpr$allowText,
      _gdpr$denyText = gdpr.denyText,
      denyText = _gdpr$denyText === void 0 ? 'None' : _gdpr$denyText;

  if (!show) {
    return div({
      "class": 'Gdpr'
    }, svg({
      "class": 'ShowHide',
      onclick: [actions.gdpr.show, {
        show: true
      }],
      viewBox: '0 0 512 512'
    }, [g([path({
      d: "\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"
    }), circle({
      cx: '192',
      cy: '128',
      r: '32'
    }), circle({
      cx: '128',
      cy: '256',
      r: '32'
    }), circle({
      cx: '288',
      cy: '384',
      r: '32'
    }), circle({
      cx: '272',
      cy: '272',
      r: '16'
    }), circle({
      cx: '400',
      cy: '336',
      r: '16'
    }), circle({
      cx: '176',
      cy: '368',
      r: '16'
    })])]));
  }

  var hasCookies = !!cookies.length;
  return div({
    "class": 'Gdpr'
  }, [input({
    type: 'checkbox',
    name: 'show-hide',
    id: 'show-hide',
    checked: !show
  }), div({
    "class": 'Container'
  }, [title && h3(title), content && p(content), hasCookies && [ul(cookies.map(function (_ref9) {
    var name = _ref9.name,
        title = _ref9.title,
        content = _ref9.content,
        _ref9$allowed = _ref9.allowed,
        allowed = _ref9$allowed === void 0 ? false : _ref9$allowed;
    return li({
      "class": 'Cookie'
    }, [input({
      type: 'checkbox',
      title: "allow ".concat(name, " data"),
      id: name,
      checked: gdpr.allowed.includes(name),
      onchange: [actions.gdpr.toggleAllow, {
        name: name
      }]
    }), (title || content) && label({
      "for": name
    }, [title && h4(title), content && p(content)])]);
  }))], hasCookies ? [h5(allowTitle), label({
    "class": 'button allow all',
    "for": 'show-hide',
    onclick: actions.gdpr.allow
  }, allowAllText), label({
    "class": 'button allow',
    "for": 'show-hide',
    onclick: actions.gdpr.close
  }, allowText), label({
    "class": 'button allow none',
    "for": 'show-hide',
    onclick: actions.gdpr.deny
  }, denyText)] : label({
    "class": 'button',
    "for": 'show-hide',
    onclick: actions.gdpr.close
  }, noDataText)])]);
};

var GitBadges = function GitBadges(props) {
  if (typeof props === 'string') {
    props = {
      project: props
    };
  } else if (!props.project) {
    return;
  }

  var _props = props,
      _props$project = _props.project,
      project = _props$project === void 0 ? false : _props$project,
      _props$branch = _props.branch,
      branch = _props$branch === void 0 ? 'master' : _props$branch,
      _props$host = _props.host,
      host = _props$host === void 0 ? 'github' : _props$host;
  var urls = [['npm', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;
    return v && {
      to: "https://www.npmjs.com/package/@".concat(v),
      src: "https://img.shields.io/npm/v/@".concat(v, ".svg")
    };
  }], ['travis', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;
    return v && {
      to: "https://travis-ci.com/".concat(v),
      src: "https://img.shields.io/travis/com/".concat(v, "/").concat(branch)
    };
  }], ['appveyor', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;

    if (v) {
      var _v$split = v.split('/'),
          _v$split2 = _slicedToArray(_v$split, 2),
          org = _v$split2[0],
          repo = _v$split2[1];

      org = org.replace(/-/g, '');
      return {
        to: "https://ci.appveyor.com/project/".concat(org, "/").concat(repo, "/branch/").concat(branch),
        src: "https://img.shields.io/appveyor/ci/".concat(org, "/").concat(repo, "/").concat(branch, ".svg")
      };
    }
  }], ['coveralls', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;
    return {
      to: "https://coveralls.io/".concat(host, "/").concat(v),
      src: "https://img.shields.io/coveralls/".concat(host, "/").concat(v, "/").concat(branch, ".svg")
    };
  }], ['greenkeeper', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;
    return v && {
      to: "https://greenkeeper.io",
      src: "https://badges.greenkeeper.io/".concat(v, ".svg")
    };
  }], ['snyk', function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : project;
    return v && {
      to: "https://snyk.io/test/".concat(host, "/").concat(v),
      src: "https://img.shields.io/snyk/vulnerabilities/github/".concat(v, ".svg")
    };
  }]].map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        name = _ref11[0],
        fn = _ref11[1];

    return fn(props[name]);
  }).filter(function (a) {
    return a.to && a.src;
  });

  if (!urls.length) {
    return;
  }

  return ul({
    "class": 'GitBadges'
  }, urls.map(function (_ref12) {
    var to = _ref12.to,
        src = _ref12.src;
    return li([Link({
      to: to
    }, Img({
      src: src
    }))]);
  }));
};

var Header = function Header() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var logo = props.logo,
      menu = props.menu,
      logotext = props.logotext,
      state = _objectWithoutProperties(props, ["logo", "menu", "logotext"]);

  if (!logo && !menu && !logotext) {
    return;
  }

  return header({
    "class": 'Header'
  }, [(logo || logotext) && Link({
    to: state.root,
    "class": 'Logo'
  }, [logo && Img(logo), logotext && span(logotext)]), menu && Menu({
    state: state,
    items: menu
  }), children]);
};

var Img = function Img(props) {
  if (typeof props === 'string') {
    props = {
      src: props
    };
  }

  if (!props.src) {
    return;
  }

  if (!props.alt) {
    if (props.title) {
      props.alt = props.title;
    } else {
      props.role = 'presentation';
      props.alt = '';
    }
  }

  return img(props);
};

var LightSwitch = function LightSwitch() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return button({
    "class": 'LightSwitch',
    onclick: actions.changeTheme
  });
};

var Link = function Link(_ref13, children) {
  var to = _ref13.to,
      p = _objectWithoutProperties(_ref13, ["to"]);

  var href = p.href,
      text = p.text,
      nofollow = p.nofollow,
      noreferrer = p.noreferrer,
      props = _objectWithoutProperties(p, ["href", "text", "nofollow", "noreferrer"]);

  to = to || href || '';
  props.href = to;
  var isLocal = to[0] === '/' || to[0] === '#';

  if (isLocal) {
    props.onclick = [actions.go, lib.preventDefault];
  } else {
    props.target = '_blank';
    props.rel = 'noopener';

    if (nofollow) {
      props.rel += ' nofollow';
    }

    if (noreferrer) {
      props.rel += ' noreferrer';
    }
  }

  return a(props, [text, children]);
};

var Menu = function Menu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$class = props["class"],
      className = _props$class === void 0 ? 'Menu' : _props$class,
      _props$collapse = props.collapse,
      collapse = _props$collapse === void 0 ? true : _props$collapse,
      items = props.items,
      state = props.state;
  var url = state.url,
      hash = state.hash,
      root = state.root;

  if (hash && !url.endsWith(hash)) {
    url += "#".concat(hash);
  }

  return nav({
    className: className
  }, ul(items.map(function (item) {
    return MenuItem(_objectSpread({}, item, {
      url: url,
      root: root,
      collapse: collapse
    }));
  })));
};

var MenuItem = function MenuItem(props) {
  var text = props.text,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      url = props.url,
      root = props.root,
      _props$parentTo = props.parentTo,
      parentTo = _props$parentTo === void 0 ? undefined : _props$parentTo,
      collapse = props.collapse,
      item = _objectWithoutProperties(props, ["text", "items", "url", "root", "parentTo", "collapse"]);

  var p = {
    "class": {}
  };
  var to = item.to;

  if (to.startsWith('/#')) {
    to = to.substr(1);
  }

  var first = item.to[0];
  var isLocal = first === '/' || first === '-' || first === '#';

  if (parentTo && isLocal) {
    if (first === '-' || first === '#') {
      to = parentTo + to;
    } else {
      var start = to.split('/')[1];

      if (start) {
        var startsLikeParentEnds = parentTo.endsWith("/".concat(start, "/"));

        if (!startsLikeParentEnds && isLocal) {
          to = parentTo + to;
        }
      }
    }
  }

  var isRooted = to.startsWith(root);

  if (root && isLocal && !isRooted) {
    to = root + to;
  }

  item.to = to.replace(/\/\//g, '/');

  if (item.to === url) {
    p["class"].active = true;
  }

  var children = [];
  var active = url.startsWith(item.to) || !collapse;

  if (active) {
    children = ul(items.map(function (i) {
      return MenuItem(_objectSpread({
        parentTo: item.to,
        url: url,
        root: root,
        collapse: collapse
      }, i));
    }));
  }

  return li(p, [item.to ? Link(item, text) : span(item, text), children]);
};

var Page = function Page(_ref14, children) {
  var page = _ref14.page,
      state = _ref14.state;
  page = page ? page(state) : '404 - not found';
  var magicProps = {
    id: 'Magic',
    "class": state.pageClass
  };
  var wrapperProps = {
    "class": {
      Wrapper: true
    }
  };
  return main(magicProps, div(wrapperProps, [Route({
    state: state,
    page: page
  }), children]));
};

var Pre = function Pre(props, str) {
  if (typeof props === 'string') {
    props = {
      content: props
    };
  } else if (str) {
    props = _objectSpread({
      content: str
    }, props);
  }

  var _props2 = props,
      content = _props2.content,
      _props2$lines = _props2.lines,
      lines = _props2$lines === void 0 ? true : _props2$lines;
  var classes = {
    Pre: true,
    lines: lines
  };
  return div({
    "class": classes
  }, [div({
    "class": 'menu'
  }, [button({
    onclick: [actions.pre.clip, function (e) {
      return {
        e: e,
        content: content
      };
    }]
  }, 'copy')]), pre(lib.pre.format(content))]);
};

var Route = function Route(_ref15) {
  var page = _ref15.page,
      state = _ref15.state;
  return [Header(state), div({
    "class": 'Page',
    id: 'page'
  }, page), Footer(state)];
};

var lib = {
  db: function () {
    var init = function init() {
      return typeof window !== 'undefined' && window.localStorage || {};
    };

    var set = function set(dispatch, _ref16) {
      var action = _ref16.action,
          key = _ref16.key,
          value = _ref16.value;
      var store = lib.db.init();
      var res = lib.json.stringify(value);

      if (typeof res === 'Error') {
        dispatch(action, new Error("db:write ".concat(key)));
        return;
      }

      store[key] = res;
      dispatch(action, {
        key: key,
        value: value
      });
    };

    var get = function get(dispatch, _ref17) {
      var action = _ref17.action,
          key = _ref17.key;
      var store = lib.db.init();
      var value = undefined;

      if (key && store[key]) {
        value = lib.json.parse(store[key]);

        if (typeof res === 'Error') {
          dispatch(action, new Error("db:read ".concat(key)));
          return;
        }
      }

      dispatch(action, {
        key: key,
        value: value
      });
    };

    var del = function del(dispatch, _ref18) {
      var action = _ref18.action,
          key = _ref18.key;
      var store = lib.db.init();

      if (key && store[key]) {
        store.removeItem(key);
      }

      dispatch(action, {
        key: key,
        value: undefined
      });
    };

    return {
      set: set,
      get: get,
      del: del,
      init: init
    };
  }(),
  json: function () {
    var tryCatch = function tryCatch(fn) {
      return function () {
        try {
          return fn.apply(void 0, arguments);
        } catch (e) {
          return e;
        }
      };
    };

    var parse = tryCatch(JSON.parse);
    var stringify = tryCatch(JSON.stringify);
    return {
      parse: parse,
      stringify: stringify
    };
  }(),
  pre: function () {
    var keywords = "\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function (w) {
      return w.trim();
    });
    var builtins = "\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function (w) {
      return w.trim();
    });
    var booleans = ['true', 'false'];

    var wrapWords = function wrapWords(string) {
      if (typeof string !== 'string') {
        return string;
      }

      var matched = string.split(/\b/);
      string = matched.map(function (word, i) {
        if (word === '') {
          return;
        }

        var cl = '';

        if (word === 'state') {
          cl = 'state';
        } else if (word === 'actions') {
          cl = 'actions';
        } else if (matched[i + 1] && matched[i + 1].includes(':')) {
          cl = 'colon';
        } else if (keywords.includes(word)) {
          cl = 'keyword';
        } else if (builtins.includes(word)) {
          cl = 'builtin';
        } else if (booleans.includes(word)) {
          cl = 'boolean';
        } else if (matched[i - 1] === '.') {
          cl = 'property';
        } else if (matched[i + 1] === '.') {
          cl = 'object';
        }

        if (cl) {
          word = span({
            "class": cl
          }, word);
        }

        return word;
      });
      return string;
    };

    var mailRegex = /([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;

    var wrapEmails = function wrapEmails(line) {
      return line.split(mailRegex).map(function (part) {
        if (mailRegex.test(part)) {
          var to = part.startsWith('mailto:') ? part : "mailto:".concat(part);

          var _text = part.replace('mailto:', '');

          return Link({
            "class": 'email',
            to: to
          }, _text);
        }

        return wrapWords(part);
      });
    };

    var wrapComments = function wrapComments(line, i) {
      return [wordsByLine(line.substring(0, i)), wordsByLine(line.substring(i))];
    };

    var wrapLinks = function wrapLinks(line) {
      return line.split(/(?= )/).map(function (word) {
        if (!word.includes('://')) {
          return wordsByLine(word);
        }

        var _word$split = word.split('://'),
            _word$split2 = _slicedToArray(_word$split, 2),
            protocol = _word$split2[0],
            url = _word$split2[1];

        if (protocol.match(/[a-z]/g)) {
          return word;
        }

        return Link({
          to: word
        }, word);
      });
    };

    var wrapUrls = function wrapUrls(line) {
      if (line.includes('://') && !line.includes('@')) {
        return wrapLinks(line);
      } else {
        return wrapEmails(line);
      }
    };

    var wrapStrings = function wrapStrings(line) {
      var cleaned = line.replace(/"/g, "'");

      var _cleaned$split = cleaned.split("'"),
          _cleaned$split2 = _toArray(_cleaned$split),
          start = _cleaned$split2[0],
          str = _cleaned$split2[1],
          rest = _cleaned$split2.slice(2);

      var end = rest;

      if (end.length === 1) {
        end = wordsByLine(end[0]);
      } else if (end.length > 1) {
        end = wordsByLine(end.join("'"));
      }

      var words = [];

      if (typeof str !== 'undefined') {
        words = [wrapWords(start), span({
          "class": 'string'
        }, ["'", wrapUrls(str), "'"]), end];
      } else {
        words = wrapWords(line);
      }

      return words;
    };

    var wordsByLine = function wordsByLine(line) {
      var idx = line.indexOf('//');
      var trimmed = line.trim();

      if (trimmed.startsWith('//')) {
        var indentIdx = line.search(/\S|$/);
        var indent = '';

        for (var _i2 = 0; _i2 < indentIdx; _i2++) {
          indent += ' ';
        }

        if (!trimmed.startsWith('// ')) {
          line = "".concat(indent, "// ").concat(trimmed.substr(2));
        }

        return span({
          "class": 'comment'
        }, [indent, '// ', wordsByLine(trimmed.substring(3))]);
      } else if (idx > -1 && line[idx - 1] !== ':') {
        return wrapComments(line, idx);
      } else if (line.indexOf('://') > 2) {
        return wrapLinks(line);
      } else if (line.indexOf('@') && line.includes('.') && !line.trim().includes(' ')) {
        return wrapEmails(line);
      }

      return wrapStrings(line);
    };

    var wrapLine = function wrapLine(line) {
      return code({
        "class": 'line'
      }, wordsByLine(line));
    };

    var format = function format(content) {
      return content.trim().split('\n').map(wrapLine);
    };

    return {
      format: format
    };
  }(),
  preventDefault: function () {
    var preventDefault = function preventDefault(e) {
      e.preventDefault();
      return e;
    };

    return preventDefault;
  }()
};
var actions = {
  'changeTheme': function changeTheme(state) {
    return _objectSpread({}, state, {
      pageClass: _objectSpread({}, state.pageClass, {
        light: state.theme === 'dark'
      }),
      theme: state.theme === 'dark' ? 'light' : 'dark'
    });
  },
  'gdpr': {
    'allow': function allow(state) {
      return [_objectSpread({}, state, {
        gdpr: _objectSpread({}, state.gdpr, {
          allowed: state.cookies.map(function (c) {
            return c.name;
          }),
          show: false
        })
      }), [lib.db.set, {
        key: 'magic-gdpr',
        value: {
          allowed: state.cookies.map(function (c) {
            return c.name;
          }),
          show: false
        },
        action: [actions.gdpr.show, {
          show: false
        }]
      }]];
    },
    'close': function close(state) {
      return [_objectSpread({}, state, {
        gdpr: _objectSpread({}, state.gdpr, {
          show: false
        })
      }), [lib.db.set, {
        key: 'magic-gdpr',
        value: {
          allowed: state.gdpr.allowed,
          show: false
        },
        action: [actions.gdpr.show, {
          show: false
        }]
      }]];
    },
    'deny': function deny(state) {
      return [_objectSpread({}, state, {
        gdpr: _objectSpread({}, state.gdpr, {
          allowed: []
        })
      }), [lib.db.set, {
        key: 'magic-gdpr',
        value: {
          allowed: [],
          show: false
        },
        action: [actions.gdpr.show, {
          show: false
        }]
      }]];
    },
    'show': function show(state, props) {
      var show = props.show;

      if (props.value) {
        show = props.value.show;
      }

      if (typeof show === 'boolean') {
        state.gdpr.show = show;
        return _objectSpread({}, state);
      }

      return state;
    },
    'toggleAllow': function toggleAllow(state, _ref19) {
      var name = _ref19.name;
      var gdpr = state.gdpr;
      var active = gdpr.allowed.includes(name);

      if (!active) {
        gdpr.allowed.push(name);
      } else {
        gdpr.allowed = gdpr.allowed.filter(function (c) {
          return c !== name;
        });
      }

      return _objectSpread({}, state, {
        gdpr: gdpr
      });
    }
  },
  'go': function go(state, e) {
    var to = e.currentTarget.href.replace(window.location.origin, '');

    var _to$split = to.split('#'),
        _to$split2 = _slicedToArray(_to$split, 2),
        url = _to$split2[0],
        _to$split2$ = _to$split2[1],
        hash = _to$split2$ === void 0 ? '' : _to$split2$;

    if (url === state.url && hash === state.hash) {
      return state;
    }

    window.history.pushState({
      url: url,
      hash: hash
    }, '', to);

    if (!hash) {
      window.scroll(0, 0);
    } else {
      window.location.hash = hash;
    }

    return _objectSpread({}, state, {
      url: url,
      hash: hash,
      prev: state.url
    });
  },
  'pop': function pop(state, e) {
    var _window$location = window.location,
        url = _window$location.pathname,
        hash = _window$location.hash;
    hash = hash.substring(1);

    if (e.state) {
      url = e.state.url;
      hash = e.state.hash;
    }

    if (hash) {
      window.location.hash = hash;
    } else {
      window.scroll(0, 0);
    }

    return _objectSpread({}, state, {
      url: url,
      hash: hash
    });
  },
  'pre': {
    'clip': function clip(state, _ref20) {
      var content = _ref20.content;

      if (typeof document !== 'undefined' && typeof document.execCommand === 'function') {
        var copy = document.createElement('textarea');
        copy.id = 'copy';
        copy.innerHTML = content;
        document.body.appendChild(copy);
        var child = document.getElementById('copy');
        child.select();
        document.execCommand('copy');
        document.body.removeChild(child);
      }

      return state;
    }
  }
};
var pages = {
  '/mime-types/': function mimeTypes(state) {
    return [h1(state.title), state.description.map(function (d) {
      return p(d);
    }), GitBadges('magic/mime-types'), h3({
      id: 'install'
    }, 'installation'), p('be in a nodejs project'), Pre("\nnpm install @magic/mime-types\n"), h3({
      id: 'usage'
    }, 'import / usage'), Pre("\nimport mimes from '@magic/mime-types'\n\n\nconsole.log(mimes.ez)\n// logs application/andrew-inset\n\nconsole.log(mimes.aw)\n// logs application/applixware\n\nconsole.log(mimes.atom)\n// logs application/atom+xml\n\nconsole.log(mimes.atomcat)\n// logs application/atomcat+xml\n\nconsole.log(mimes.atomsvc)\n// logs application/atomsvc+xml\n\nconsole.log(mimes.bdoc)\n// logs application/bdoc\n\nconsole.log(mimes.ccxml)\n// logs application/ccxml+xml\n\nconsole.log(mimes.cdmia)\n// logs application/cdmi-capability\n\nconsole.log(mimes.cdmic)\n// logs application/cdmi-container\n\nconsole.log(mimes.cdmid)\n// logs application/cdmi-domain\n\nconsole.log(mimes.cdmio)\n// logs application/cdmi-object\n\nconsole.log(mimes.cdmiq)\n// logs application/cdmi-queue\n\nconsole.log(mimes.cu)\n// logs application/cu-seeme\n\nconsole.log(mimes.mpd)\n// logs application/dash+xml\n\nconsole.log(mimes.davmount)\n// logs application/davmount+xml\n\nconsole.log(mimes.dbk)\n// logs application/docbook+xml\n\nconsole.log(mimes.dssc)\n// logs application/dssc+der\n\nconsole.log(mimes.xdssc)\n// logs application/dssc+xml\n\nconsole.log(mimes.ecma)\n// logs application/ecmascript\n\nconsole.log(mimes.es)\n// logs application/ecmascript\n\nconsole.log(mimes.emma)\n// logs application/emma+xml\n\nconsole.log(mimes.epub)\n// logs application/epub+zip\n\nconsole.log(mimes.exi)\n// logs application/exi\n\nconsole.log(mimes.pfr)\n// logs application/font-tdpfr\n\nconsole.log(mimes.geojson)\n// logs application/geo+json\n\nconsole.log(mimes.gml)\n// logs application/gml+xml\n\nconsole.log(mimes.gpx)\n// logs application/gpx+xml\n\nconsole.log(mimes.gxf)\n// logs application/gxf\n\nconsole.log(mimes.gz)\n// logs application/gzip\n\nconsole.log(mimes.hjson)\n// logs application/hjson\n\nconsole.log(mimes.stk)\n// logs application/hyperstudio\n\nconsole.log(mimes.ink)\n// logs application/inkml+xml\n\nconsole.log(mimes.inkml)\n// logs application/inkml+xml\n\nconsole.log(mimes.ipfix)\n// logs application/ipfix\n\nconsole.log(mimes.jar)\n// logs application/java-archive\n\nconsole.log(mimes.war)\n// logs application/java-archive\n\nconsole.log(mimes.ear)\n// logs application/java-archive\n\nconsole.log(mimes.ser)\n// logs application/java-serialized-object\n\nconsole.log(mimes.class)\n// logs application/java-vm\n\nconsole.log(mimes.js)\n// logs application/javascript\n\nconsole.log(mimes.mjs)\n// logs application/javascript\n\nconsole.log(mimes.json)\n// logs application/json\n\nconsole.log(mimes.map)\n// logs application/json\n\nconsole.log(mimes.json5)\n// logs application/json5\n\nconsole.log(mimes.jsonml)\n// logs application/jsonml+json\n\nconsole.log(mimes.jsonld)\n// logs application/ld+json\n\nconsole.log(mimes.lostxml)\n// logs application/lost+xml\n\nconsole.log(mimes.hqx)\n// logs application/mac-binhex40\n\nconsole.log(mimes.cpt)\n// logs application/mac-compactpro\n\nconsole.log(mimes.mads)\n// logs application/mads+xml\n\nconsole.log(mimes.webmanifest)\n// logs application/manifest+json\n\nconsole.log(mimes.mrc)\n// logs application/marc\n\nconsole.log(mimes.mrcx)\n// logs application/marcxml+xml\n\nconsole.log(mimes.ma)\n// logs application/mathematica\n\nconsole.log(mimes.nb)\n// logs application/mathematica\n\nconsole.log(mimes.mb)\n// logs application/mathematica\n\nconsole.log(mimes.mathml)\n// logs application/mathml+xml\n\nconsole.log(mimes.mbox)\n// logs application/mbox\n\nconsole.log(mimes.mscml)\n// logs application/mediaservercontrol+xml\n\nconsole.log(mimes.metalink)\n// logs application/metalink+xml\n\nconsole.log(mimes.meta4)\n// logs application/metalink4+xml\n\nconsole.log(mimes.mets)\n// logs application/mets+xml\n\nconsole.log(mimes.mods)\n// logs application/mods+xml\n\nconsole.log(mimes.m21)\n// logs application/mp21\n\nconsole.log(mimes.mp21)\n// logs application/mp21\n\nconsole.log(mimes.mp4s)\n// logs application/mp4\n\nconsole.log(mimes.m4p)\n// logs application/mp4\n\nconsole.log(mimes.doc)\n// logs application/msword\n\nconsole.log(mimes.dot)\n// logs application/msword\n\nconsole.log(mimes.mxf)\n// logs application/mxf\n\nconsole.log(mimes.nq)\n// logs application/n-quads\n\nconsole.log(mimes.nt)\n// logs application/n-triples\n\nconsole.log(mimes.bin)\n// logs application/octet-stream\n\nconsole.log(mimes.dms)\n// logs application/octet-stream\n\nconsole.log(mimes.lrf)\n// logs application/octet-stream\n\nconsole.log(mimes.mar)\n// logs application/octet-stream\n\nconsole.log(mimes.so)\n// logs application/octet-stream\n\nconsole.log(mimes.dist)\n// logs application/octet-stream\n\nconsole.log(mimes.distz)\n// logs application/octet-stream\n\nconsole.log(mimes.pkg)\n// logs application/octet-stream\n\nconsole.log(mimes.bpk)\n// logs application/octet-stream\n\nconsole.log(mimes.dump)\n// logs application/octet-stream\n\nconsole.log(mimes.elc)\n// logs application/octet-stream\n\nconsole.log(mimes.deploy)\n// logs application/octet-stream\n\nconsole.log(mimes.exe)\n// logs application/x-msdos-program\n\nconsole.log(mimes.dll)\n// logs application/octet-stream\n\nconsole.log(mimes.deb)\n// logs application/x-debian-package\n\nconsole.log(mimes.dmg)\n// logs application/octet-stream\n\nconsole.log(mimes.iso)\n// logs application/octet-stream\n\nconsole.log(mimes.img)\n// logs application/octet-stream\n\nconsole.log(mimes.msi)\n// logs application/octet-stream\n\nconsole.log(mimes.msp)\n// logs application/octet-stream\n\nconsole.log(mimes.msm)\n// logs application/octet-stream\n\nconsole.log(mimes.buffer)\n// logs application/octet-stream\n\nconsole.log(mimes.oda)\n// logs application/oda\n\nconsole.log(mimes.opf)\n// logs application/oebps-package+xml\n\nconsole.log(mimes.ogx)\n// logs application/ogg\n\nconsole.log(mimes.omdoc)\n// logs application/omdoc+xml\n\nconsole.log(mimes.onetoc)\n// logs application/onenote\n\nconsole.log(mimes.onetoc2)\n// logs application/onenote\n\nconsole.log(mimes.onetmp)\n// logs application/onenote\n\nconsole.log(mimes.onepkg)\n// logs application/onenote\n\nconsole.log(mimes.oxps)\n// logs application/oxps\n\nconsole.log(mimes.xer)\n// logs application/patch-ops-error+xml\n\nconsole.log(mimes.pdf)\n// logs application/pdf\n\nconsole.log(mimes.pgp)\n// logs application/pgp-encrypted\n\nconsole.log(mimes.asc)\n// logs application/pgp-signature\n\nconsole.log(mimes.sig)\n// logs application/pgp-signature\n\nconsole.log(mimes.prf)\n// logs application/pics-rules\n\nconsole.log(mimes.p10)\n// logs application/pkcs10\n\nconsole.log(mimes.p7m)\n// logs application/pkcs7-mime\n\nconsole.log(mimes.p7c)\n// logs application/pkcs7-mime\n\nconsole.log(mimes.p7s)\n// logs application/pkcs7-signature\n\nconsole.log(mimes.p8)\n// logs application/pkcs8\n\nconsole.log(mimes.ac)\n// logs application/pkix-attr-cert\n\nconsole.log(mimes.cer)\n// logs application/pkix-cert\n\nconsole.log(mimes.crl)\n// logs application/pkix-crl\n\nconsole.log(mimes.pkipath)\n// logs application/pkix-pkipath\n\nconsole.log(mimes.pki)\n// logs application/pkixcmp\n\nconsole.log(mimes.pls)\n// logs application/pls+xml\n\nconsole.log(mimes.ai)\n// logs application/postscript\n\nconsole.log(mimes.eps)\n// logs application/postscript\n\nconsole.log(mimes.ps)\n// logs application/postscript\n\nconsole.log(mimes.cww)\n// logs application/prs.cww\n\nconsole.log(mimes.pskcxml)\n// logs application/pskc+xml\n\nconsole.log(mimes.raml)\n// logs application/raml+yaml\n\nconsole.log(mimes.rdf)\n// logs application/rdf+xml\n\nconsole.log(mimes.owl)\n// logs application/rdf+xml\n\nconsole.log(mimes.rif)\n// logs application/reginfo+xml\n\nconsole.log(mimes.rnc)\n// logs application/relax-ng-compact-syntax\n\nconsole.log(mimes.rl)\n// logs application/resource-lists+xml\n\nconsole.log(mimes.rld)\n// logs application/resource-lists-diff+xml\n\nconsole.log(mimes.rs)\n// logs application/rls-services+xml\n\nconsole.log(mimes.gbr)\n// logs application/rpki-ghostbusters\n\nconsole.log(mimes.mft)\n// logs application/rpki-manifest\n\nconsole.log(mimes.roa)\n// logs application/rpki-roa\n\nconsole.log(mimes.rsd)\n// logs application/rsd+xml\n\nconsole.log(mimes.rss)\n// logs application/rss+xml\n\nconsole.log(mimes.rtf)\n// logs text/rtf\n\nconsole.log(mimes.sbml)\n// logs application/sbml+xml\n\nconsole.log(mimes.scq)\n// logs application/scvp-cv-request\n\nconsole.log(mimes.scs)\n// logs application/scvp-cv-response\n\nconsole.log(mimes.spq)\n// logs application/scvp-vp-request\n\nconsole.log(mimes.spp)\n// logs application/scvp-vp-response\n\nconsole.log(mimes.sdp)\n// logs application/sdp\n\nconsole.log(mimes.setpay)\n// logs application/set-payment-initiation\n\nconsole.log(mimes.setreg)\n// logs application/set-registration-initiation\n\nconsole.log(mimes.shf)\n// logs application/shf+xml\n\nconsole.log(mimes.siv)\n// logs application/sieve\n\nconsole.log(mimes.sieve)\n// logs application/sieve\n\nconsole.log(mimes.smi)\n// logs application/smil+xml\n\nconsole.log(mimes.smil)\n// logs application/smil+xml\n\nconsole.log(mimes.rq)\n// logs application/sparql-query\n\nconsole.log(mimes.srx)\n// logs application/sparql-results+xml\n\nconsole.log(mimes.gram)\n// logs application/srgs\n\nconsole.log(mimes.grxml)\n// logs application/srgs+xml\n\nconsole.log(mimes.sru)\n// logs application/sru+xml\n\nconsole.log(mimes.ssdl)\n// logs application/ssdl+xml\n\nconsole.log(mimes.ssml)\n// logs application/ssml+xml\n\nconsole.log(mimes.tei)\n// logs application/tei+xml\n\nconsole.log(mimes.teicorpus)\n// logs application/tei+xml\n\nconsole.log(mimes.tfi)\n// logs application/thraud+xml\n\nconsole.log(mimes.tsd)\n// logs application/timestamped-data\n\nconsole.log(mimes.toml)\n// logs application/toml\n\nconsole.log(mimes.plb)\n// logs application/vnd.3gpp.pic-bw-large\n\nconsole.log(mimes.psb)\n// logs application/vnd.3gpp.pic-bw-small\n\nconsole.log(mimes.pvb)\n// logs application/vnd.3gpp.pic-bw-var\n\nconsole.log(mimes.tcap)\n// logs application/vnd.3gpp2.tcap\n\nconsole.log(mimes.pwn)\n// logs application/vnd.3m.post-it-notes\n\nconsole.log(mimes.aso)\n// logs application/vnd.accpac.simply.aso\n\nconsole.log(mimes.imp)\n// logs application/vnd.accpac.simply.imp\n\nconsole.log(mimes.acu)\n// logs application/vnd.acucobol\n\nconsole.log(mimes.atc)\n// logs application/vnd.acucorp\n\nconsole.log(mimes.acutc)\n// logs application/vnd.acucorp\n\nconsole.log(mimes.air)\n// logs application/vnd.adobe.air-application-installer-package+zip\n\nconsole.log(mimes.fcdt)\n// logs application/vnd.adobe.formscentral.fcdt\n\nconsole.log(mimes.fxp)\n// logs application/vnd.adobe.fxp\n\nconsole.log(mimes.fxpl)\n// logs application/vnd.adobe.fxp\n\nconsole.log(mimes.xdp)\n// logs application/vnd.adobe.xdp+xml\n\nconsole.log(mimes.xfdf)\n// logs application/vnd.adobe.xfdf\n\nconsole.log(mimes.ahead)\n// logs application/vnd.ahead.space\n\nconsole.log(mimes.azf)\n// logs application/vnd.airzip.filesecure.azf\n\nconsole.log(mimes.azs)\n// logs application/vnd.airzip.filesecure.azs\n\nconsole.log(mimes.azw)\n// logs application/vnd.amazon.ebook\n\nconsole.log(mimes.acc)\n// logs application/vnd.americandynamics.acc\n\nconsole.log(mimes.ami)\n// logs application/vnd.amiga.ami\n\nconsole.log(mimes.apk)\n// logs application/vnd.android.package-archive\n\nconsole.log(mimes.cii)\n// logs application/vnd.anser-web-certificate-issue-initiation\n\nconsole.log(mimes.fti)\n// logs application/vnd.anser-web-funds-transfer-initiation\n\nconsole.log(mimes.atx)\n// logs application/vnd.antix.game-component\n\nconsole.log(mimes.mpkg)\n// logs application/vnd.apple.installer+xml\n\nconsole.log(mimes.keynote)\n// logs application/vnd.apple.keynote\n\nconsole.log(mimes.m3u8)\n// logs application/vnd.apple.mpegurl\n\nconsole.log(mimes.numbers)\n// logs application/vnd.apple.numbers\n\nconsole.log(mimes.pages)\n// logs application/vnd.apple.pages\n\nconsole.log(mimes.pkpass)\n// logs application/vnd.apple.pkpass\n\nconsole.log(mimes.swi)\n// logs application/vnd.aristanetworks.swi\n\nconsole.log(mimes.iota)\n// logs application/vnd.astraea-software.iota\n\nconsole.log(mimes.aep)\n// logs application/vnd.audiograph\n\nconsole.log(mimes.mpm)\n// logs application/vnd.blueice.multipass\n\nconsole.log(mimes.bmi)\n// logs application/vnd.bmi\n\nconsole.log(mimes.rep)\n// logs application/vnd.businessobjects\n\nconsole.log(mimes.cdxml)\n// logs application/vnd.chemdraw+xml\n\nconsole.log(mimes.mmd)\n// logs application/vnd.chipnuts.karaoke-mmd\n\nconsole.log(mimes.cdy)\n// logs application/vnd.cinderella\n\nconsole.log(mimes.csl)\n// logs application/vnd.citationstyles.style+xml\n\nconsole.log(mimes.cla)\n// logs application/vnd.claymore\n\nconsole.log(mimes.rp9)\n// logs application/vnd.cloanto.rp9\n\nconsole.log(mimes.c4g)\n// logs application/vnd.clonk.c4group\n\nconsole.log(mimes.c4d)\n// logs application/vnd.clonk.c4group\n\nconsole.log(mimes.c4f)\n// logs application/vnd.clonk.c4group\n\nconsole.log(mimes.c4p)\n// logs application/vnd.clonk.c4group\n\nconsole.log(mimes.c4u)\n// logs application/vnd.clonk.c4group\n\nconsole.log(mimes.c11amc)\n// logs application/vnd.cluetrust.cartomobile-config\n\nconsole.log(mimes.c11amz)\n// logs application/vnd.cluetrust.cartomobile-config-pkg\n\nconsole.log(mimes.csp)\n// logs application/vnd.commonspace\n\nconsole.log(mimes.cdbcmsg)\n// logs application/vnd.contact.cmsg\n\nconsole.log(mimes.cmc)\n// logs application/vnd.cosmocaller\n\nconsole.log(mimes.clkx)\n// logs application/vnd.crick.clicker\n\nconsole.log(mimes.clkk)\n// logs application/vnd.crick.clicker.keyboard\n\nconsole.log(mimes.clkp)\n// logs application/vnd.crick.clicker.palette\n\nconsole.log(mimes.clkt)\n// logs application/vnd.crick.clicker.template\n\nconsole.log(mimes.clkw)\n// logs application/vnd.crick.clicker.wordbank\n\nconsole.log(mimes.wbs)\n// logs application/vnd.criticaltools.wbs+xml\n\nconsole.log(mimes.pml)\n// logs application/vnd.ctc-posml\n\nconsole.log(mimes.ppd)\n// logs application/vnd.cups-ppd\n\nconsole.log(mimes.car)\n// logs application/vnd.curl.car\n\nconsole.log(mimes.pcurl)\n// logs application/vnd.curl.pcurl\n\nconsole.log(mimes.dart)\n// logs application/vnd.dart\n\nconsole.log(mimes.rdz)\n// logs application/vnd.data-vision.rdz\n\nconsole.log(mimes.uvf)\n// logs application/vnd.dece.data\n\nconsole.log(mimes.uvvf)\n// logs application/vnd.dece.data\n\nconsole.log(mimes.uvd)\n// logs application/vnd.dece.data\n\nconsole.log(mimes.uvvd)\n// logs application/vnd.dece.data\n\nconsole.log(mimes.uvt)\n// logs application/vnd.dece.ttml+xml\n\nconsole.log(mimes.uvvt)\n// logs application/vnd.dece.ttml+xml\n\nconsole.log(mimes.uvx)\n// logs application/vnd.dece.unspecified\n\nconsole.log(mimes.uvvx)\n// logs application/vnd.dece.unspecified\n\nconsole.log(mimes.uvz)\n// logs application/vnd.dece.zip\n\nconsole.log(mimes.uvvz)\n// logs application/vnd.dece.zip\n\nconsole.log(mimes.fe_launch)\n// logs application/vnd.denovo.fcselayout-link\n\nconsole.log(mimes.dna)\n// logs application/vnd.dna\n\nconsole.log(mimes.mlp)\n// logs application/vnd.dolby.mlp\n\nconsole.log(mimes.dpg)\n// logs application/vnd.dpgraph\n\nconsole.log(mimes.dfac)\n// logs application/vnd.dreamfactory\n\nconsole.log(mimes.kpxx)\n// logs application/vnd.ds-keypoint\n\nconsole.log(mimes.ait)\n// logs application/vnd.dvb.ait\n\nconsole.log(mimes.svc)\n// logs application/vnd.dvb.service\n\nconsole.log(mimes.geo)\n// logs application/vnd.dynageo\n\nconsole.log(mimes.mag)\n// logs application/vnd.ecowin.chart\n\nconsole.log(mimes.nml)\n// logs application/vnd.enliven\n\nconsole.log(mimes.esf)\n// logs application/vnd.epson.esf\n\nconsole.log(mimes.msf)\n// logs application/vnd.epson.msf\n\nconsole.log(mimes.qam)\n// logs application/vnd.epson.quickanime\n\nconsole.log(mimes.slt)\n// logs application/vnd.epson.salt\n\nconsole.log(mimes.ssf)\n// logs application/vnd.epson.ssf\n\nconsole.log(mimes.es3)\n// logs application/vnd.eszigno3+xml\n\nconsole.log(mimes.et3)\n// logs application/vnd.eszigno3+xml\n\nconsole.log(mimes.ez2)\n// logs application/vnd.ezpix-album\n\nconsole.log(mimes.ez3)\n// logs application/vnd.ezpix-package\n\nconsole.log(mimes.fdf)\n// logs application/vnd.fdf\n\nconsole.log(mimes.mseed)\n// logs application/vnd.fdsn.mseed\n\nconsole.log(mimes.seed)\n// logs application/vnd.fdsn.seed\n\nconsole.log(mimes.dataless)\n// logs application/vnd.fdsn.seed\n\nconsole.log(mimes.gph)\n// logs application/vnd.flographit\n\nconsole.log(mimes.ftc)\n// logs application/vnd.fluxtime.clip\n\nconsole.log(mimes.fm)\n// logs application/vnd.framemaker\n\nconsole.log(mimes.frame)\n// logs application/vnd.framemaker\n\nconsole.log(mimes.maker)\n// logs application/vnd.framemaker\n\nconsole.log(mimes.book)\n// logs application/vnd.framemaker\n\nconsole.log(mimes.fnc)\n// logs application/vnd.frogans.fnc\n\nconsole.log(mimes.ltf)\n// logs application/vnd.frogans.ltf\n\nconsole.log(mimes.fsc)\n// logs application/vnd.fsc.weblaunch\n\nconsole.log(mimes.oas)\n// logs application/vnd.fujitsu.oasys\n\nconsole.log(mimes.oa2)\n// logs application/vnd.fujitsu.oasys2\n\nconsole.log(mimes.oa3)\n// logs application/vnd.fujitsu.oasys3\n\nconsole.log(mimes.fg5)\n// logs application/vnd.fujitsu.oasysgp\n\nconsole.log(mimes.bh2)\n// logs application/vnd.fujitsu.oasysprs\n\nconsole.log(mimes.ddd)\n// logs application/vnd.fujixerox.ddd\n\nconsole.log(mimes.xdw)\n// logs application/vnd.fujixerox.docuworks\n\nconsole.log(mimes.xbd)\n// logs application/vnd.fujixerox.docuworks.binder\n\nconsole.log(mimes.fzs)\n// logs application/vnd.fuzzysheet\n\nconsole.log(mimes.txd)\n// logs application/vnd.genomatix.tuxedo\n\nconsole.log(mimes.ggb)\n// logs application/vnd.geogebra.file\n\nconsole.log(mimes.ggt)\n// logs application/vnd.geogebra.tool\n\nconsole.log(mimes.gex)\n// logs application/vnd.geometry-explorer\n\nconsole.log(mimes.gre)\n// logs application/vnd.geometry-explorer\n\nconsole.log(mimes.gxt)\n// logs application/vnd.geonext\n\nconsole.log(mimes.g2w)\n// logs application/vnd.geoplan\n\nconsole.log(mimes.g3w)\n// logs application/vnd.geospace\n\nconsole.log(mimes.gmx)\n// logs application/vnd.gmx\n\nconsole.log(mimes.gdoc)\n// logs application/vnd.google-apps.document\n\nconsole.log(mimes.gslides)\n// logs application/vnd.google-apps.presentation\n\nconsole.log(mimes.gsheet)\n// logs application/vnd.google-apps.spreadsheet\n\nconsole.log(mimes.kml)\n// logs application/vnd.google-earth.kml+xml\n\nconsole.log(mimes.kmz)\n// logs application/vnd.google-earth.kmz\n\nconsole.log(mimes.gqf)\n// logs application/vnd.grafeq\n\nconsole.log(mimes.gqs)\n// logs application/vnd.grafeq\n\nconsole.log(mimes.gac)\n// logs application/vnd.groove-account\n\nconsole.log(mimes.ghf)\n// logs application/vnd.groove-help\n\nconsole.log(mimes.gim)\n// logs application/vnd.groove-identity-message\n\nconsole.log(mimes.grv)\n// logs application/vnd.groove-injector\n\nconsole.log(mimes.gtm)\n// logs application/vnd.groove-tool-message\n\nconsole.log(mimes.tpl)\n// logs application/vnd.groove-tool-template\n\nconsole.log(mimes.vcg)\n// logs application/vnd.groove-vcard\n\nconsole.log(mimes.hal)\n// logs application/vnd.hal+xml\n\nconsole.log(mimes.zmm)\n// logs application/vnd.handheld-entertainment+xml\n\nconsole.log(mimes.hbci)\n// logs application/vnd.hbci\n\nconsole.log(mimes.les)\n// logs application/vnd.hhe.lesson-player\n\nconsole.log(mimes.hpgl)\n// logs application/vnd.hp-hpgl\n\nconsole.log(mimes.hpid)\n// logs application/vnd.hp-hpid\n\nconsole.log(mimes.hps)\n// logs application/vnd.hp-hps\n\nconsole.log(mimes.jlt)\n// logs application/vnd.hp-jlyt\n\nconsole.log(mimes.pcl)\n// logs application/vnd.hp-pcl\n\nconsole.log(mimes.pclxl)\n// logs application/vnd.hp-pclxl\n\nconsole.log(mimes.sfd-hdstx)\n// logs application/vnd.hydrostatix.sof-data\n\nconsole.log(mimes.mpy)\n// logs application/vnd.ibm.minipay\n\nconsole.log(mimes.afp)\n// logs application/vnd.ibm.modcap\n\nconsole.log(mimes.listafp)\n// logs application/vnd.ibm.modcap\n\nconsole.log(mimes.list3820)\n// logs application/vnd.ibm.modcap\n\nconsole.log(mimes.irm)\n// logs application/vnd.ibm.rights-management\n\nconsole.log(mimes.sc)\n// logs application/vnd.ibm.secure-container\n\nconsole.log(mimes.icc)\n// logs application/vnd.iccprofile\n\nconsole.log(mimes.icm)\n// logs application/vnd.iccprofile\n\nconsole.log(mimes.igl)\n// logs application/vnd.igloader\n\nconsole.log(mimes.ivp)\n// logs application/vnd.immervision-ivp\n\nconsole.log(mimes.ivu)\n// logs application/vnd.immervision-ivu\n\nconsole.log(mimes.igm)\n// logs application/vnd.insors.igm\n\nconsole.log(mimes.xpw)\n// logs application/vnd.intercon.formnet\n\nconsole.log(mimes.xpx)\n// logs application/vnd.intercon.formnet\n\nconsole.log(mimes.i2g)\n// logs application/vnd.intergeo\n\nconsole.log(mimes.qbo)\n// logs application/vnd.intu.qbo\n\nconsole.log(mimes.qfx)\n// logs application/vnd.intu.qfx\n\nconsole.log(mimes.rcprofile)\n// logs application/vnd.ipunplugged.rcprofile\n\nconsole.log(mimes.irp)\n// logs application/vnd.irepository.package+xml\n\nconsole.log(mimes.xpr)\n// logs application/vnd.is-xpr\n\nconsole.log(mimes.fcs)\n// logs application/vnd.isac.fcs\n\nconsole.log(mimes.jam)\n// logs application/vnd.jam\n\nconsole.log(mimes.rms)\n// logs application/vnd.jcp.javame.midlet-rms\n\nconsole.log(mimes.jisp)\n// logs application/vnd.jisp\n\nconsole.log(mimes.joda)\n// logs application/vnd.joost.joda-archive\n\nconsole.log(mimes.ktz)\n// logs application/vnd.kahootz\n\nconsole.log(mimes.ktr)\n// logs application/vnd.kahootz\n\nconsole.log(mimes.karbon)\n// logs application/vnd.kde.karbon\n\nconsole.log(mimes.chrt)\n// logs application/vnd.kde.kchart\n\nconsole.log(mimes.kfo)\n// logs application/vnd.kde.kformula\n\nconsole.log(mimes.flw)\n// logs application/vnd.kde.kivio\n\nconsole.log(mimes.kon)\n// logs application/vnd.kde.kontour\n\nconsole.log(mimes.kpr)\n// logs application/vnd.kde.kpresenter\n\nconsole.log(mimes.kpt)\n// logs application/vnd.kde.kpresenter\n\nconsole.log(mimes.ksp)\n// logs application/vnd.kde.kspread\n\nconsole.log(mimes.kwd)\n// logs application/vnd.kde.kword\n\nconsole.log(mimes.kwt)\n// logs application/vnd.kde.kword\n\nconsole.log(mimes.htke)\n// logs application/vnd.kenameaapp\n\nconsole.log(mimes.kia)\n// logs application/vnd.kidspiration\n\nconsole.log(mimes.kne)\n// logs application/vnd.kinar\n\nconsole.log(mimes.knp)\n// logs application/vnd.kinar\n\nconsole.log(mimes.skp)\n// logs application/vnd.koan\n\nconsole.log(mimes.skd)\n// logs application/vnd.koan\n\nconsole.log(mimes.skt)\n// logs application/vnd.koan\n\nconsole.log(mimes.skm)\n// logs application/vnd.koan\n\nconsole.log(mimes.sse)\n// logs application/vnd.kodak-descriptor\n\nconsole.log(mimes.lasxml)\n// logs application/vnd.las.las+xml\n\nconsole.log(mimes.lbd)\n// logs application/vnd.llamagraphics.life-balance.desktop\n\nconsole.log(mimes.lbe)\n// logs application/vnd.llamagraphics.life-balance.exchange+xml\n\nconsole.log(mimes.123)\n// logs application/vnd.lotus-1-2-3\n\nconsole.log(mimes.apr)\n// logs application/vnd.lotus-approach\n\nconsole.log(mimes.pre)\n// logs application/vnd.lotus-freelance\n\nconsole.log(mimes.nsf)\n// logs application/vnd.lotus-notes\n\nconsole.log(mimes.org)\n// logs text/x-org\n\nconsole.log(mimes.scm)\n// logs application/vnd.lotus-screencam\n\nconsole.log(mimes.lwp)\n// logs application/vnd.lotus-wordpro\n\nconsole.log(mimes.portpkg)\n// logs application/vnd.macports.portpkg\n\nconsole.log(mimes.mcd)\n// logs application/vnd.mcd\n\nconsole.log(mimes.mc1)\n// logs application/vnd.medcalcdata\n\nconsole.log(mimes.cdkey)\n// logs application/vnd.mediastation.cdkey\n\nconsole.log(mimes.mwf)\n// logs application/vnd.mfer\n\nconsole.log(mimes.mfm)\n// logs application/vnd.mfmp\n\nconsole.log(mimes.flo)\n// logs application/vnd.micrografx.flo\n\nconsole.log(mimes.igx)\n// logs application/vnd.micrografx.igx\n\nconsole.log(mimes.mif)\n// logs application/vnd.mif\n\nconsole.log(mimes.daf)\n// logs application/vnd.mobius.daf\n\nconsole.log(mimes.dis)\n// logs application/vnd.mobius.dis\n\nconsole.log(mimes.mbk)\n// logs application/vnd.mobius.mbk\n\nconsole.log(mimes.mqy)\n// logs application/vnd.mobius.mqy\n\nconsole.log(mimes.msl)\n// logs application/vnd.mobius.msl\n\nconsole.log(mimes.plc)\n// logs application/vnd.mobius.plc\n\nconsole.log(mimes.txf)\n// logs application/vnd.mobius.txf\n\nconsole.log(mimes.mpn)\n// logs application/vnd.mophun.application\n\nconsole.log(mimes.mpc)\n// logs application/vnd.mophun.certificate\n\nconsole.log(mimes.xul)\n// logs application/vnd.mozilla.xul+xml\n\nconsole.log(mimes.cil)\n// logs application/vnd.ms-artgalry\n\nconsole.log(mimes.cab)\n// logs application/vnd.ms-cab-compressed\n\nconsole.log(mimes.xls)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xlm)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xla)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xlc)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xlt)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xlw)\n// logs application/vnd.ms-excel\n\nconsole.log(mimes.xlam)\n// logs application/vnd.ms-excel.addin.macroenabled.12\n\nconsole.log(mimes.xlsb)\n// logs application/vnd.ms-excel.sheet.binary.macroenabled.12\n\nconsole.log(mimes.xlsm)\n// logs application/vnd.ms-excel.sheet.macroenabled.12\n\nconsole.log(mimes.xltm)\n// logs application/vnd.ms-excel.template.macroenabled.12\n\nconsole.log(mimes.eot)\n// logs application/vnd.ms-fontobject\n\nconsole.log(mimes.chm)\n// logs application/vnd.ms-htmlhelp\n\nconsole.log(mimes.ims)\n// logs application/vnd.ms-ims\n\nconsole.log(mimes.lrm)\n// logs application/vnd.ms-lrm\n\nconsole.log(mimes.thmx)\n// logs application/vnd.ms-officetheme\n\nconsole.log(mimes.msg)\n// logs application/vnd.ms-outlook\n\nconsole.log(mimes.cat)\n// logs application/vnd.ms-pki.seccat\n\nconsole.log(mimes.stl)\n// logs model/stl\n\nconsole.log(mimes.ppt)\n// logs application/vnd.ms-powerpoint\n\nconsole.log(mimes.pps)\n// logs application/vnd.ms-powerpoint\n\nconsole.log(mimes.pot)\n// logs application/vnd.ms-powerpoint\n\nconsole.log(mimes.ppam)\n// logs application/vnd.ms-powerpoint.addin.macroenabled.12\n\nconsole.log(mimes.pptm)\n// logs application/vnd.ms-powerpoint.presentation.macroenabled.12\n\nconsole.log(mimes.sldm)\n// logs application/vnd.ms-powerpoint.slide.macroenabled.12\n\nconsole.log(mimes.ppsm)\n// logs application/vnd.ms-powerpoint.slideshow.macroenabled.12\n\nconsole.log(mimes.potm)\n// logs application/vnd.ms-powerpoint.template.macroenabled.12\n\nconsole.log(mimes.mpp)\n// logs application/vnd.ms-project\n\nconsole.log(mimes.mpt)\n// logs application/vnd.ms-project\n\nconsole.log(mimes.docm)\n// logs application/vnd.ms-word.document.macroenabled.12\n\nconsole.log(mimes.dotm)\n// logs application/vnd.ms-word.template.macroenabled.12\n\nconsole.log(mimes.wps)\n// logs application/vnd.ms-works\n\nconsole.log(mimes.wks)\n// logs application/vnd.ms-works\n\nconsole.log(mimes.wcm)\n// logs application/vnd.ms-works\n\nconsole.log(mimes.wdb)\n// logs application/vnd.ms-works\n\nconsole.log(mimes.wpl)\n// logs application/vnd.ms-wpl\n\nconsole.log(mimes.xps)\n// logs application/vnd.ms-xpsdocument\n\nconsole.log(mimes.mseq)\n// logs application/vnd.mseq\n\nconsole.log(mimes.mus)\n// logs application/vnd.musician\n\nconsole.log(mimes.msty)\n// logs application/vnd.muvee.style\n\nconsole.log(mimes.taglet)\n// logs application/vnd.mynfc\n\nconsole.log(mimes.nlu)\n// logs application/vnd.neurolanguage.nlu\n\nconsole.log(mimes.ntf)\n// logs application/vnd.nitf\n\nconsole.log(mimes.nitf)\n// logs application/vnd.nitf\n\nconsole.log(mimes.nnd)\n// logs application/vnd.noblenet-directory\n\nconsole.log(mimes.nns)\n// logs application/vnd.noblenet-sealer\n\nconsole.log(mimes.nnw)\n// logs application/vnd.noblenet-web\n\nconsole.log(mimes.ngdat)\n// logs application/vnd.nokia.n-gage.data\n\nconsole.log(mimes.n-gage)\n// logs application/vnd.nokia.n-gage.symbian.install\n\nconsole.log(mimes.rpst)\n// logs application/vnd.nokia.radio-preset\n\nconsole.log(mimes.rpss)\n// logs application/vnd.nokia.radio-presets\n\nconsole.log(mimes.edm)\n// logs application/vnd.novadigm.edm\n\nconsole.log(mimes.edx)\n// logs application/vnd.novadigm.edx\n\nconsole.log(mimes.ext)\n// logs application/vnd.novadigm.ext\n\nconsole.log(mimes.odc)\n// logs application/vnd.oasis.opendocument.chart\n\nconsole.log(mimes.otc)\n// logs application/vnd.oasis.opendocument.chart-template\n\nconsole.log(mimes.odb)\n// logs application/vnd.oasis.opendocument.database\n\nconsole.log(mimes.odf)\n// logs application/vnd.oasis.opendocument.formula\n\nconsole.log(mimes.odft)\n// logs application/vnd.oasis.opendocument.formula-template\n\nconsole.log(mimes.odg)\n// logs application/vnd.oasis.opendocument.graphics\n\nconsole.log(mimes.otg)\n// logs application/vnd.oasis.opendocument.graphics-template\n\nconsole.log(mimes.odi)\n// logs application/vnd.oasis.opendocument.image\n\nconsole.log(mimes.oti)\n// logs application/vnd.oasis.opendocument.image-template\n\nconsole.log(mimes.odp)\n// logs application/vnd.oasis.opendocument.presentation\n\nconsole.log(mimes.otp)\n// logs application/vnd.oasis.opendocument.presentation-template\n\nconsole.log(mimes.ods)\n// logs application/vnd.oasis.opendocument.spreadsheet\n\nconsole.log(mimes.ots)\n// logs application/vnd.oasis.opendocument.spreadsheet-template\n\nconsole.log(mimes.odt)\n// logs application/vnd.oasis.opendocument.text\n\nconsole.log(mimes.odm)\n// logs application/vnd.oasis.opendocument.text-master\n\nconsole.log(mimes.ott)\n// logs application/vnd.oasis.opendocument.text-template\n\nconsole.log(mimes.oth)\n// logs application/vnd.oasis.opendocument.text-web\n\nconsole.log(mimes.xo)\n// logs application/vnd.olpc-sugar\n\nconsole.log(mimes.dd2)\n// logs application/vnd.oma.dd2+xml\n\nconsole.log(mimes.oxt)\n// logs application/vnd.openofficeorg.extension\n\nconsole.log(mimes.pptx)\n// logs application/vnd.openxmlformats-officedocument.presentationml.presentation\n\nconsole.log(mimes.sldx)\n// logs application/vnd.openxmlformats-officedocument.presentationml.slide\n\nconsole.log(mimes.ppsx)\n// logs application/vnd.openxmlformats-officedocument.presentationml.slideshow\n\nconsole.log(mimes.potx)\n// logs application/vnd.openxmlformats-officedocument.presentationml.template\n\nconsole.log(mimes.xlsx)\n// logs application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\n\nconsole.log(mimes.xltx)\n// logs application/vnd.openxmlformats-officedocument.spreadsheetml.template\n\nconsole.log(mimes.docx)\n// logs application/vnd.openxmlformats-officedocument.wordprocessingml.document\n\nconsole.log(mimes.dotx)\n// logs application/vnd.openxmlformats-officedocument.wordprocessingml.template\n\nconsole.log(mimes.mgp)\n// logs application/vnd.osgeo.mapguide.package\n\nconsole.log(mimes.dp)\n// logs application/vnd.osgi.dp\n\nconsole.log(mimes.esa)\n// logs application/vnd.osgi.subsystem\n\nconsole.log(mimes.pdb)\n// logs application/x-pilot\n\nconsole.log(mimes.pqa)\n// logs application/vnd.palm\n\nconsole.log(mimes.oprc)\n// logs application/vnd.palm\n\nconsole.log(mimes.paw)\n// logs application/vnd.pawaafile\n\nconsole.log(mimes.str)\n// logs application/vnd.pg.format\n\nconsole.log(mimes.ei6)\n// logs application/vnd.pg.osasli\n\nconsole.log(mimes.efif)\n// logs application/vnd.picsel\n\nconsole.log(mimes.wg)\n// logs application/vnd.pmi.widget\n\nconsole.log(mimes.plf)\n// logs application/vnd.pocketlearn\n\nconsole.log(mimes.pbd)\n// logs application/vnd.powerbuilder6\n\nconsole.log(mimes.box)\n// logs application/vnd.previewsystems.box\n\nconsole.log(mimes.mgz)\n// logs application/vnd.proteus.magazine\n\nconsole.log(mimes.qps)\n// logs application/vnd.publishare-delta-tree\n\nconsole.log(mimes.ptid)\n// logs application/vnd.pvi.ptid1\n\nconsole.log(mimes.qxd)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.qxt)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.qwd)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.qwt)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.qxl)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.qxb)\n// logs application/vnd.quark.quarkxpress\n\nconsole.log(mimes.bed)\n// logs application/vnd.realvnc.bed\n\nconsole.log(mimes.mxl)\n// logs application/vnd.recordare.musicxml\n\nconsole.log(mimes.musicxml)\n// logs application/vnd.recordare.musicxml+xml\n\nconsole.log(mimes.cryptonote)\n// logs application/vnd.rig.cryptonote\n\nconsole.log(mimes.cod)\n// logs application/vnd.rim.cod\n\nconsole.log(mimes.rm)\n// logs application/vnd.rn-realmedia\n\nconsole.log(mimes.rmvb)\n// logs application/vnd.rn-realmedia-vbr\n\nconsole.log(mimes.link66)\n// logs application/vnd.route66.link66+xml\n\nconsole.log(mimes.st)\n// logs application/vnd.sailingtracker.track\n\nconsole.log(mimes.see)\n// logs application/vnd.seemail\n\nconsole.log(mimes.sema)\n// logs application/vnd.sema\n\nconsole.log(mimes.semd)\n// logs application/vnd.semd\n\nconsole.log(mimes.semf)\n// logs application/vnd.semf\n\nconsole.log(mimes.ifm)\n// logs application/vnd.shana.informed.formdata\n\nconsole.log(mimes.itp)\n// logs application/vnd.shana.informed.formtemplate\n\nconsole.log(mimes.iif)\n// logs application/vnd.shana.informed.interchange\n\nconsole.log(mimes.ipk)\n// logs application/vnd.shana.informed.package\n\nconsole.log(mimes.twd)\n// logs application/vnd.simtech-mindmapper\n\nconsole.log(mimes.twds)\n// logs application/vnd.simtech-mindmapper\n\nconsole.log(mimes.mmf)\n// logs application/vnd.smaf\n\nconsole.log(mimes.teacher)\n// logs application/vnd.smart.teacher\n\nconsole.log(mimes.sdkm)\n// logs application/vnd.solent.sdkm+xml\n\nconsole.log(mimes.sdkd)\n// logs application/vnd.solent.sdkm+xml\n\nconsole.log(mimes.dxp)\n// logs application/vnd.spotfire.dxp\n\nconsole.log(mimes.sfs)\n// logs application/vnd.spotfire.sfs\n\nconsole.log(mimes.sdc)\n// logs application/vnd.stardivision.calc\n\nconsole.log(mimes.sda)\n// logs application/vnd.stardivision.draw\n\nconsole.log(mimes.sdd)\n// logs application/vnd.stardivision.impress\n\nconsole.log(mimes.smf)\n// logs application/vnd.stardivision.math\n\nconsole.log(mimes.sdw)\n// logs application/vnd.stardivision.writer\n\nconsole.log(mimes.vor)\n// logs application/vnd.stardivision.writer\n\nconsole.log(mimes.sgl)\n// logs application/vnd.stardivision.writer-global\n\nconsole.log(mimes.smzip)\n// logs application/vnd.stepmania.package\n\nconsole.log(mimes.sm)\n// logs application/vnd.stepmania.stepchart\n\nconsole.log(mimes.wadl)\n// logs application/vnd.sun.wadl+xml\n\nconsole.log(mimes.sxc)\n// logs application/vnd.sun.xml.calc\n\nconsole.log(mimes.stc)\n// logs application/vnd.sun.xml.calc.template\n\nconsole.log(mimes.sxd)\n// logs application/vnd.sun.xml.draw\n\nconsole.log(mimes.std)\n// logs application/vnd.sun.xml.draw.template\n\nconsole.log(mimes.sxi)\n// logs application/vnd.sun.xml.impress\n\nconsole.log(mimes.sti)\n// logs application/vnd.sun.xml.impress.template\n\nconsole.log(mimes.sxm)\n// logs application/vnd.sun.xml.math\n\nconsole.log(mimes.sxw)\n// logs application/vnd.sun.xml.writer\n\nconsole.log(mimes.sxg)\n// logs application/vnd.sun.xml.writer.global\n\nconsole.log(mimes.stw)\n// logs application/vnd.sun.xml.writer.template\n\nconsole.log(mimes.sus)\n// logs application/vnd.sus-calendar\n\nconsole.log(mimes.susp)\n// logs application/vnd.sus-calendar\n\nconsole.log(mimes.svd)\n// logs application/vnd.svd\n\nconsole.log(mimes.sis)\n// logs application/vnd.symbian.install\n\nconsole.log(mimes.sisx)\n// logs application/vnd.symbian.install\n\nconsole.log(mimes.xsm)\n// logs application/vnd.syncml+xml\n\nconsole.log(mimes.bdm)\n// logs application/vnd.syncml.dm+wbxml\n\nconsole.log(mimes.xdm)\n// logs application/vnd.syncml.dm+xml\n\nconsole.log(mimes.tao)\n// logs application/vnd.tao.intent-module-archive\n\nconsole.log(mimes.pcap)\n// logs application/vnd.tcpdump.pcap\n\nconsole.log(mimes.cap)\n// logs application/vnd.tcpdump.pcap\n\nconsole.log(mimes.dmp)\n// logs application/vnd.tcpdump.pcap\n\nconsole.log(mimes.tmo)\n// logs application/vnd.tmobile-livetv\n\nconsole.log(mimes.tpt)\n// logs application/vnd.trid.tpt\n\nconsole.log(mimes.mxs)\n// logs application/vnd.triscape.mxs\n\nconsole.log(mimes.tra)\n// logs application/vnd.trueapp\n\nconsole.log(mimes.ufd)\n// logs application/vnd.ufdl\n\nconsole.log(mimes.ufdl)\n// logs application/vnd.ufdl\n\nconsole.log(mimes.utz)\n// logs application/vnd.uiq.theme\n\nconsole.log(mimes.umj)\n// logs application/vnd.umajin\n\nconsole.log(mimes.unityweb)\n// logs application/vnd.unity\n\nconsole.log(mimes.uoml)\n// logs application/vnd.uoml+xml\n\nconsole.log(mimes.vcx)\n// logs application/vnd.vcx\n\nconsole.log(mimes.vsd)\n// logs application/vnd.visio\n\nconsole.log(mimes.vst)\n// logs application/vnd.visio\n\nconsole.log(mimes.vss)\n// logs application/vnd.visio\n\nconsole.log(mimes.vsw)\n// logs application/vnd.visio\n\nconsole.log(mimes.vis)\n// logs application/vnd.visionary\n\nconsole.log(mimes.vsf)\n// logs application/vnd.vsf\n\nconsole.log(mimes.wbxml)\n// logs application/vnd.wap.wbxml\n\nconsole.log(mimes.wmlc)\n// logs application/vnd.wap.wmlc\n\nconsole.log(mimes.wmlsc)\n// logs application/vnd.wap.wmlscriptc\n\nconsole.log(mimes.wtb)\n// logs application/vnd.webturbo\n\nconsole.log(mimes.nbp)\n// logs application/vnd.wolfram.player\n\nconsole.log(mimes.wpd)\n// logs application/vnd.wordperfect\n\nconsole.log(mimes.wqd)\n// logs application/vnd.wqd\n\nconsole.log(mimes.stf)\n// logs application/vnd.wt.stf\n\nconsole.log(mimes.xar)\n// logs application/vnd.xara\n\nconsole.log(mimes.xfdl)\n// logs application/vnd.xfdl\n\nconsole.log(mimes.hvd)\n// logs application/vnd.yamaha.hv-dic\n\nconsole.log(mimes.hvs)\n// logs application/vnd.yamaha.hv-script\n\nconsole.log(mimes.hvp)\n// logs application/vnd.yamaha.hv-voice\n\nconsole.log(mimes.osf)\n// logs application/vnd.yamaha.openscoreformat\n\nconsole.log(mimes.osfpvg)\n// logs application/vnd.yamaha.openscoreformat.osfpvg+xml\n\nconsole.log(mimes.saf)\n// logs application/vnd.yamaha.smaf-audio\n\nconsole.log(mimes.spf)\n// logs application/vnd.yamaha.smaf-phrase\n\nconsole.log(mimes.cmp)\n// logs application/vnd.yellowriver-custom-menu\n\nconsole.log(mimes.zir)\n// logs application/vnd.zul\n\nconsole.log(mimes.zirz)\n// logs application/vnd.zul\n\nconsole.log(mimes.zaz)\n// logs application/vnd.zzazz.deck+xml\n\nconsole.log(mimes.vxml)\n// logs application/voicexml+xml\n\nconsole.log(mimes.wasm)\n// logs application/wasm\n\nconsole.log(mimes.wgt)\n// logs application/widget\n\nconsole.log(mimes.hlp)\n// logs application/winhlp\n\nconsole.log(mimes.wsdl)\n// logs application/wsdl+xml\n\nconsole.log(mimes.wspolicy)\n// logs application/wspolicy+xml\n\nconsole.log(mimes.7z)\n// logs application/x-7z-compressed\n\nconsole.log(mimes.abw)\n// logs application/x-abiword\n\nconsole.log(mimes.ace)\n// logs application/x-ace-compressed\n\nconsole.log(mimes.dmg)\n// logs application/octet-stream\n\nconsole.log(mimes.arj)\n// logs application/x-arj\n\nconsole.log(mimes.aab)\n// logs application/x-authorware-bin\n\nconsole.log(mimes.x32)\n// logs application/x-authorware-bin\n\nconsole.log(mimes.u32)\n// logs application/x-authorware-bin\n\nconsole.log(mimes.vox)\n// logs application/x-authorware-bin\n\nconsole.log(mimes.aam)\n// logs application/x-authorware-map\n\nconsole.log(mimes.aas)\n// logs application/x-authorware-seg\n\nconsole.log(mimes.bcpio)\n// logs application/x-bcpio\n\nconsole.log(mimes.bdoc)\n// logs application/bdoc\n\nconsole.log(mimes.torrent)\n// logs application/x-bittorrent\n\nconsole.log(mimes.blb)\n// logs application/x-blorb\n\nconsole.log(mimes.blorb)\n// logs application/x-blorb\n\nconsole.log(mimes.bz)\n// logs application/x-bzip\n\nconsole.log(mimes.bz2)\n// logs application/x-bzip2\n\nconsole.log(mimes.boz)\n// logs application/x-bzip2\n\nconsole.log(mimes.cbr)\n// logs application/x-cbr\n\nconsole.log(mimes.cba)\n// logs application/x-cbr\n\nconsole.log(mimes.cbt)\n// logs application/x-cbr\n\nconsole.log(mimes.cbz)\n// logs application/x-cbr\n\nconsole.log(mimes.cb7)\n// logs application/x-cbr\n\nconsole.log(mimes.vcd)\n// logs application/x-cdlink\n\nconsole.log(mimes.cfs)\n// logs application/x-cfs-compressed\n\nconsole.log(mimes.chat)\n// logs application/x-chat\n\nconsole.log(mimes.pgn)\n// logs application/x-chess-pgn\n\nconsole.log(mimes.crx)\n// logs application/x-chrome-extension\n\nconsole.log(mimes.cco)\n// logs application/x-cocoa\n\nconsole.log(mimes.nsc)\n// logs application/x-conference\n\nconsole.log(mimes.cpio)\n// logs application/x-cpio\n\nconsole.log(mimes.csh)\n// logs application/x-csh\n\nconsole.log(mimes.deb)\n// logs application/x-debian-package\n\nconsole.log(mimes.udeb)\n// logs application/x-debian-package\n\nconsole.log(mimes.dgc)\n// logs application/x-dgc-compressed\n\nconsole.log(mimes.dir)\n// logs application/x-director\n\nconsole.log(mimes.dcr)\n// logs application/x-director\n\nconsole.log(mimes.dxr)\n// logs application/x-director\n\nconsole.log(mimes.cst)\n// logs application/x-director\n\nconsole.log(mimes.cct)\n// logs application/x-director\n\nconsole.log(mimes.cxt)\n// logs application/x-director\n\nconsole.log(mimes.w3d)\n// logs application/x-director\n\nconsole.log(mimes.fgd)\n// logs application/x-director\n\nconsole.log(mimes.swa)\n// logs application/x-director\n\nconsole.log(mimes.wad)\n// logs application/x-doom\n\nconsole.log(mimes.ncx)\n// logs application/x-dtbncx+xml\n\nconsole.log(mimes.dtb)\n// logs application/x-dtbook+xml\n\nconsole.log(mimes.res)\n// logs application/x-dtbresource+xml\n\nconsole.log(mimes.dvi)\n// logs application/x-dvi\n\nconsole.log(mimes.evy)\n// logs application/x-envoy\n\nconsole.log(mimes.eva)\n// logs application/x-eva\n\nconsole.log(mimes.bdf)\n// logs application/x-font-bdf\n\nconsole.log(mimes.gsf)\n// logs application/x-font-ghostscript\n\nconsole.log(mimes.psf)\n// logs application/x-font-linux-psf\n\nconsole.log(mimes.pcf)\n// logs application/x-font-pcf\n\nconsole.log(mimes.snf)\n// logs application/x-font-snf\n\nconsole.log(mimes.pfa)\n// logs application/x-font-type1\n\nconsole.log(mimes.pfb)\n// logs application/x-font-type1\n\nconsole.log(mimes.pfm)\n// logs application/x-font-type1\n\nconsole.log(mimes.afm)\n// logs application/x-font-type1\n\nconsole.log(mimes.arc)\n// logs application/x-freearc\n\nconsole.log(mimes.spl)\n// logs application/x-futuresplash\n\nconsole.log(mimes.gca)\n// logs application/x-gca-compressed\n\nconsole.log(mimes.ulx)\n// logs application/x-glulx\n\nconsole.log(mimes.gnumeric)\n// logs application/x-gnumeric\n\nconsole.log(mimes.gramps)\n// logs application/x-gramps-xml\n\nconsole.log(mimes.gtar)\n// logs application/x-gtar\n\nconsole.log(mimes.hdf)\n// logs application/x-hdf\n\nconsole.log(mimes.php)\n// logs application/x-httpd-php\n\nconsole.log(mimes.install)\n// logs application/x-install-instructions\n\nconsole.log(mimes.iso)\n// logs application/octet-stream\n\nconsole.log(mimes.jardiff)\n// logs application/x-java-archive-diff\n\nconsole.log(mimes.jnlp)\n// logs application/x-java-jnlp-file\n\nconsole.log(mimes.latex)\n// logs application/x-latex\n\nconsole.log(mimes.luac)\n// logs application/x-lua-bytecode\n\nconsole.log(mimes.lzh)\n// logs application/x-lzh-compressed\n\nconsole.log(mimes.lha)\n// logs application/x-lzh-compressed\n\nconsole.log(mimes.run)\n// logs application/x-makeself\n\nconsole.log(mimes.mie)\n// logs application/x-mie\n\nconsole.log(mimes.prc)\n// logs application/x-pilot\n\nconsole.log(mimes.mobi)\n// logs application/x-mobipocket-ebook\n\nconsole.log(mimes.application)\n// logs application/x-ms-application\n\nconsole.log(mimes.lnk)\n// logs application/x-ms-shortcut\n\nconsole.log(mimes.wmd)\n// logs application/x-ms-wmd\n\nconsole.log(mimes.wmz)\n// logs application/x-ms-wmz\n\nconsole.log(mimes.xbap)\n// logs application/x-ms-xbap\n\nconsole.log(mimes.mdb)\n// logs application/x-msaccess\n\nconsole.log(mimes.obd)\n// logs application/x-msbinder\n\nconsole.log(mimes.crd)\n// logs application/x-mscardfile\n\nconsole.log(mimes.clp)\n// logs application/x-msclip\n\nconsole.log(mimes.exe)\n// logs application/x-msdos-program\n\nconsole.log(mimes.exe)\n// logs application/x-msdos-program\n\nconsole.log(mimes.dll)\n// logs application/octet-stream\n\nconsole.log(mimes.com)\n// logs application/x-msdownload\n\nconsole.log(mimes.bat)\n// logs application/x-msdownload\n\nconsole.log(mimes.msi)\n// logs application/octet-stream\n\nconsole.log(mimes.mvb)\n// logs application/x-msmediaview\n\nconsole.log(mimes.m13)\n// logs application/x-msmediaview\n\nconsole.log(mimes.m14)\n// logs application/x-msmediaview\n\nconsole.log(mimes.wmf)\n// logs image/wmf\n\nconsole.log(mimes.wmz)\n// logs application/x-ms-wmz\n\nconsole.log(mimes.emf)\n// logs image/emf\n\nconsole.log(mimes.emz)\n// logs application/x-msmetafile\n\nconsole.log(mimes.mny)\n// logs application/x-msmoney\n\nconsole.log(mimes.pub)\n// logs application/x-mspublisher\n\nconsole.log(mimes.scd)\n// logs application/x-msschedule\n\nconsole.log(mimes.trm)\n// logs application/x-msterminal\n\nconsole.log(mimes.wri)\n// logs application/x-mswrite\n\nconsole.log(mimes.nc)\n// logs application/x-netcdf\n\nconsole.log(mimes.cdf)\n// logs application/x-netcdf\n\nconsole.log(mimes.pac)\n// logs application/x-ns-proxy-autoconfig\n\nconsole.log(mimes.nzb)\n// logs application/x-nzb\n\nconsole.log(mimes.pl)\n// logs application/x-perl\n\nconsole.log(mimes.pm)\n// logs application/x-perl\n\nconsole.log(mimes.prc)\n// logs application/x-pilot\n\nconsole.log(mimes.pdb)\n// logs application/x-pilot\n\nconsole.log(mimes.p12)\n// logs application/x-pkcs12\n\nconsole.log(mimes.pfx)\n// logs application/x-pkcs12\n\nconsole.log(mimes.p7b)\n// logs application/x-pkcs7-certificates\n\nconsole.log(mimes.spc)\n// logs application/x-pkcs7-certificates\n\nconsole.log(mimes.p7r)\n// logs application/x-pkcs7-certreqresp\n\nconsole.log(mimes.rar)\n// logs application/x-rar-compressed\n\nconsole.log(mimes.rpm)\n// logs application/x-redhat-package-manager\n\nconsole.log(mimes.ris)\n// logs application/x-research-info-systems\n\nconsole.log(mimes.sea)\n// logs application/x-sea\n\nconsole.log(mimes.sh)\n// logs application/x-sh\n\nconsole.log(mimes.shar)\n// logs application/x-shar\n\nconsole.log(mimes.swf)\n// logs application/x-shockwave-flash\n\nconsole.log(mimes.xap)\n// logs application/x-silverlight-app\n\nconsole.log(mimes.sql)\n// logs application/x-sql\n\nconsole.log(mimes.sit)\n// logs application/x-stuffit\n\nconsole.log(mimes.sitx)\n// logs application/x-stuffitx\n\nconsole.log(mimes.srt)\n// logs application/x-subrip\n\nconsole.log(mimes.sv4cpio)\n// logs application/x-sv4cpio\n\nconsole.log(mimes.sv4crc)\n// logs application/x-sv4crc\n\nconsole.log(mimes.t3)\n// logs application/x-t3vm-image\n\nconsole.log(mimes.gam)\n// logs application/x-tads\n\nconsole.log(mimes.tar)\n// logs application/x-tar\n\nconsole.log(mimes.tcl)\n// logs application/x-tcl\n\nconsole.log(mimes.tk)\n// logs application/x-tcl\n\nconsole.log(mimes.tex)\n// logs application/x-tex\n\nconsole.log(mimes.tfm)\n// logs application/x-tex-tfm\n\nconsole.log(mimes.texinfo)\n// logs application/x-texinfo\n\nconsole.log(mimes.texi)\n// logs application/x-texinfo\n\nconsole.log(mimes.obj)\n// logs application/x-tgif\n\nconsole.log(mimes.ustar)\n// logs application/x-ustar\n\nconsole.log(mimes.hdd)\n// logs application/x-virtualbox-hdd\n\nconsole.log(mimes.ova)\n// logs application/x-virtualbox-ova\n\nconsole.log(mimes.ovf)\n// logs application/x-virtualbox-ovf\n\nconsole.log(mimes.vbox)\n// logs application/x-virtualbox-vbox\n\nconsole.log(mimes.vbox-extpack)\n// logs application/x-virtualbox-vbox-extpack\n\nconsole.log(mimes.vdi)\n// logs application/x-virtualbox-vdi\n\nconsole.log(mimes.vhd)\n// logs application/x-virtualbox-vhd\n\nconsole.log(mimes.vmdk)\n// logs application/x-virtualbox-vmdk\n\nconsole.log(mimes.src)\n// logs application/x-wais-source\n\nconsole.log(mimes.webapp)\n// logs application/x-web-app-manifest+json\n\nconsole.log(mimes.der)\n// logs application/x-x509-ca-cert\n\nconsole.log(mimes.crt)\n// logs application/x-x509-ca-cert\n\nconsole.log(mimes.pem)\n// logs application/x-x509-ca-cert\n\nconsole.log(mimes.fig)\n// logs application/x-xfig\n\nconsole.log(mimes.xlf)\n// logs application/x-xliff+xml\n\nconsole.log(mimes.xpi)\n// logs application/x-xpinstall\n\nconsole.log(mimes.xz)\n// logs application/x-xz\n\nconsole.log(mimes.z1)\n// logs application/x-zmachine\n\nconsole.log(mimes.z2)\n// logs application/x-zmachine\n\nconsole.log(mimes.z3)\n// logs application/x-zmachine\n\nconsole.log(mimes.z4)\n// logs application/x-zmachine\n\nconsole.log(mimes.z5)\n// logs application/x-zmachine\n\nconsole.log(mimes.z6)\n// logs application/x-zmachine\n\nconsole.log(mimes.z7)\n// logs application/x-zmachine\n\nconsole.log(mimes.z8)\n// logs application/x-zmachine\n\nconsole.log(mimes.xaml)\n// logs application/xaml+xml\n\nconsole.log(mimes.xdf)\n// logs application/xcap-diff+xml\n\nconsole.log(mimes.xenc)\n// logs application/xenc+xml\n\nconsole.log(mimes.xhtml)\n// logs application/xhtml+xml\n\nconsole.log(mimes.xht)\n// logs application/xhtml+xml\n\nconsole.log(mimes.xml)\n// logs text/xml\n\nconsole.log(mimes.xsl)\n// logs application/xml\n\nconsole.log(mimes.xsd)\n// logs application/xml\n\nconsole.log(mimes.rng)\n// logs application/xml\n\nconsole.log(mimes.dtd)\n// logs application/xml-dtd\n\nconsole.log(mimes.xop)\n// logs application/xop+xml\n\nconsole.log(mimes.xpl)\n// logs application/xproc+xml\n\nconsole.log(mimes.xslt)\n// logs application/xslt+xml\n\nconsole.log(mimes.xspf)\n// logs application/xspf+xml\n\nconsole.log(mimes.mxml)\n// logs application/xv+xml\n\nconsole.log(mimes.xhvml)\n// logs application/xv+xml\n\nconsole.log(mimes.xvml)\n// logs application/xv+xml\n\nconsole.log(mimes.xvm)\n// logs application/xv+xml\n\nconsole.log(mimes.yang)\n// logs application/yang\n\nconsole.log(mimes.yin)\n// logs application/yin+xml\n\nconsole.log(mimes.zip)\n// logs application/zip\n\nconsole.log(mimes.3gpp)\n// logs video/3gpp\n\nconsole.log(mimes.adp)\n// logs audio/adpcm\n\nconsole.log(mimes.au)\n// logs audio/basic\n\nconsole.log(mimes.snd)\n// logs audio/basic\n\nconsole.log(mimes.mid)\n// logs audio/midi\n\nconsole.log(mimes.midi)\n// logs audio/midi\n\nconsole.log(mimes.kar)\n// logs audio/midi\n\nconsole.log(mimes.rmi)\n// logs audio/midi\n\nconsole.log(mimes.mp3)\n// logs audio/mp3\n\nconsole.log(mimes.m4a)\n// logs audio/mp4\n\nconsole.log(mimes.mp4a)\n// logs audio/mp4\n\nconsole.log(mimes.mpga)\n// logs audio/mpeg\n\nconsole.log(mimes.mp2)\n// logs audio/mpeg\n\nconsole.log(mimes.mp2a)\n// logs audio/mpeg\n\nconsole.log(mimes.mp3)\n// logs audio/mp3\n\nconsole.log(mimes.m2a)\n// logs audio/mpeg\n\nconsole.log(mimes.m3a)\n// logs audio/mpeg\n\nconsole.log(mimes.oga)\n// logs audio/ogg\n\nconsole.log(mimes.ogg)\n// logs audio/ogg\n\nconsole.log(mimes.spx)\n// logs audio/ogg\n\nconsole.log(mimes.s3m)\n// logs audio/s3m\n\nconsole.log(mimes.sil)\n// logs audio/silk\n\nconsole.log(mimes.uva)\n// logs audio/vnd.dece.audio\n\nconsole.log(mimes.uvva)\n// logs audio/vnd.dece.audio\n\nconsole.log(mimes.eol)\n// logs audio/vnd.digital-winds\n\nconsole.log(mimes.dra)\n// logs audio/vnd.dra\n\nconsole.log(mimes.dts)\n// logs audio/vnd.dts\n\nconsole.log(mimes.dtshd)\n// logs audio/vnd.dts.hd\n\nconsole.log(mimes.lvp)\n// logs audio/vnd.lucent.voice\n\nconsole.log(mimes.pya)\n// logs audio/vnd.ms-playready.media.pya\n\nconsole.log(mimes.ecelp4800)\n// logs audio/vnd.nuera.ecelp4800\n\nconsole.log(mimes.ecelp7470)\n// logs audio/vnd.nuera.ecelp7470\n\nconsole.log(mimes.ecelp9600)\n// logs audio/vnd.nuera.ecelp9600\n\nconsole.log(mimes.rip)\n// logs audio/vnd.rip\n\nconsole.log(mimes.wav)\n// logs audio/wave\n\nconsole.log(mimes.wav)\n// logs audio/wave\n\nconsole.log(mimes.weba)\n// logs audio/webm\n\nconsole.log(mimes.aac)\n// logs audio/x-aac\n\nconsole.log(mimes.aif)\n// logs audio/x-aiff\n\nconsole.log(mimes.aiff)\n// logs audio/x-aiff\n\nconsole.log(mimes.aifc)\n// logs audio/x-aiff\n\nconsole.log(mimes.caf)\n// logs audio/x-caf\n\nconsole.log(mimes.flac)\n// logs audio/x-flac\n\nconsole.log(mimes.m4a)\n// logs audio/mp4\n\nconsole.log(mimes.mka)\n// logs audio/x-matroska\n\nconsole.log(mimes.m3u)\n// logs audio/x-mpegurl\n\nconsole.log(mimes.wax)\n// logs audio/x-ms-wax\n\nconsole.log(mimes.wma)\n// logs audio/x-ms-wma\n\nconsole.log(mimes.ram)\n// logs audio/x-pn-realaudio\n\nconsole.log(mimes.ra)\n// logs audio/x-realaudio\n\nconsole.log(mimes.rmp)\n// logs audio/x-pn-realaudio-plugin\n\nconsole.log(mimes.ra)\n// logs audio/x-realaudio\n\nconsole.log(mimes.wav)\n// logs audio/wave\n\nconsole.log(mimes.xm)\n// logs audio/xm\n\nconsole.log(mimes.cdx)\n// logs chemical/x-cdx\n\nconsole.log(mimes.cif)\n// logs chemical/x-cif\n\nconsole.log(mimes.cmdf)\n// logs chemical/x-cmdf\n\nconsole.log(mimes.cml)\n// logs chemical/x-cml\n\nconsole.log(mimes.csml)\n// logs chemical/x-csml\n\nconsole.log(mimes.xyz)\n// logs chemical/x-xyz\n\nconsole.log(mimes.ttc)\n// logs font/collection\n\nconsole.log(mimes.otf)\n// logs font/otf\n\nconsole.log(mimes.ttf)\n// logs font/ttf\n\nconsole.log(mimes.woff)\n// logs font/woff\n\nconsole.log(mimes.woff2)\n// logs font/woff2\n\nconsole.log(mimes.exr)\n// logs image/aces\n\nconsole.log(mimes.apng)\n// logs image/apng\n\nconsole.log(mimes.bmp)\n// logs image/bmp\n\nconsole.log(mimes.cgm)\n// logs image/cgm\n\nconsole.log(mimes.drle)\n// logs image/dicom-rle\n\nconsole.log(mimes.emf)\n// logs image/emf\n\nconsole.log(mimes.fits)\n// logs image/fits\n\nconsole.log(mimes.g3)\n// logs image/g3fax\n\nconsole.log(mimes.gif)\n// logs image/gif\n\nconsole.log(mimes.heic)\n// logs image/heic\n\nconsole.log(mimes.heics)\n// logs image/heic-sequence\n\nconsole.log(mimes.heif)\n// logs image/heif\n\nconsole.log(mimes.heifs)\n// logs image/heif-sequence\n\nconsole.log(mimes.hej2)\n// logs image/hej2k\n\nconsole.log(mimes.hsj2)\n// logs image/hsj2\n\nconsole.log(mimes.ief)\n// logs image/ief\n\nconsole.log(mimes.jls)\n// logs image/jls\n\nconsole.log(mimes.jp2)\n// logs image/jp2\n\nconsole.log(mimes.jpg2)\n// logs image/jp2\n\nconsole.log(mimes.jpeg)\n// logs image/jpeg\n\nconsole.log(mimes.jpg)\n// logs image/jpeg\n\nconsole.log(mimes.jpe)\n// logs image/jpeg\n\nconsole.log(mimes.jph)\n// logs image/jph\n\nconsole.log(mimes.jhc)\n// logs image/jphc\n\nconsole.log(mimes.jpm)\n// logs image/jpm\n\nconsole.log(mimes.jpx)\n// logs image/jpx\n\nconsole.log(mimes.jpf)\n// logs image/jpx\n\nconsole.log(mimes.jxr)\n// logs image/jxr\n\nconsole.log(mimes.jxra)\n// logs image/jxra\n\nconsole.log(mimes.jxrs)\n// logs image/jxrs\n\nconsole.log(mimes.jxs)\n// logs image/jxs\n\nconsole.log(mimes.jxsc)\n// logs image/jxsc\n\nconsole.log(mimes.jxsi)\n// logs image/jxsi\n\nconsole.log(mimes.jxss)\n// logs image/jxss\n\nconsole.log(mimes.ktx)\n// logs image/ktx\n\nconsole.log(mimes.png)\n// logs image/png\n\nconsole.log(mimes.btif)\n// logs image/prs.btif\n\nconsole.log(mimes.pti)\n// logs image/prs.pti\n\nconsole.log(mimes.sgi)\n// logs image/sgi\n\nconsole.log(mimes.svg)\n// logs image/svg+xml\n\nconsole.log(mimes.svgz)\n// logs image/svg+xml\n\nconsole.log(mimes.t38)\n// logs image/t38\n\nconsole.log(mimes.tif)\n// logs image/tiff\n\nconsole.log(mimes.tiff)\n// logs image/tiff\n\nconsole.log(mimes.tfx)\n// logs image/tiff-fx\n\nconsole.log(mimes.psd)\n// logs image/vnd.adobe.photoshop\n\nconsole.log(mimes.azv)\n// logs image/vnd.airzip.accelerator.azv\n\nconsole.log(mimes.uvi)\n// logs image/vnd.dece.graphic\n\nconsole.log(mimes.uvvi)\n// logs image/vnd.dece.graphic\n\nconsole.log(mimes.uvg)\n// logs image/vnd.dece.graphic\n\nconsole.log(mimes.uvvg)\n// logs image/vnd.dece.graphic\n\nconsole.log(mimes.djvu)\n// logs image/vnd.djvu\n\nconsole.log(mimes.djv)\n// logs image/vnd.djvu\n\nconsole.log(mimes.sub)\n// logs text/vnd.dvb.subtitle\n\nconsole.log(mimes.dwg)\n// logs image/vnd.dwg\n\nconsole.log(mimes.dxf)\n// logs image/vnd.dxf\n\nconsole.log(mimes.fbs)\n// logs image/vnd.fastbidsheet\n\nconsole.log(mimes.fpx)\n// logs image/vnd.fpx\n\nconsole.log(mimes.fst)\n// logs image/vnd.fst\n\nconsole.log(mimes.mmr)\n// logs image/vnd.fujixerox.edmics-mmr\n\nconsole.log(mimes.rlc)\n// logs image/vnd.fujixerox.edmics-rlc\n\nconsole.log(mimes.ico)\n// logs image/x-icon\n\nconsole.log(mimes.dds)\n// logs image/vnd.ms-dds\n\nconsole.log(mimes.mdi)\n// logs image/vnd.ms-modi\n\nconsole.log(mimes.wdp)\n// logs image/vnd.ms-photo\n\nconsole.log(mimes.npx)\n// logs image/vnd.net-fpx\n\nconsole.log(mimes.tap)\n// logs image/vnd.tencent.tap\n\nconsole.log(mimes.vtf)\n// logs image/vnd.valve.source.texture\n\nconsole.log(mimes.wbmp)\n// logs image/vnd.wap.wbmp\n\nconsole.log(mimes.xif)\n// logs image/vnd.xiff\n\nconsole.log(mimes.pcx)\n// logs image/x-pcx\n\nconsole.log(mimes.webp)\n// logs image/webp\n\nconsole.log(mimes.wmf)\n// logs image/wmf\n\nconsole.log(mimes.3ds)\n// logs image/x-3ds\n\nconsole.log(mimes.ras)\n// logs image/x-cmu-raster\n\nconsole.log(mimes.cmx)\n// logs image/x-cmx\n\nconsole.log(mimes.fh)\n// logs image/x-freehand\n\nconsole.log(mimes.fhc)\n// logs image/x-freehand\n\nconsole.log(mimes.fh4)\n// logs image/x-freehand\n\nconsole.log(mimes.fh5)\n// logs image/x-freehand\n\nconsole.log(mimes.fh7)\n// logs image/x-freehand\n\nconsole.log(mimes.ico)\n// logs image/x-icon\n\nconsole.log(mimes.jng)\n// logs image/x-jng\n\nconsole.log(mimes.sid)\n// logs image/x-mrsid-image\n\nconsole.log(mimes.bmp)\n// logs image/bmp\n\nconsole.log(mimes.pcx)\n// logs image/x-pcx\n\nconsole.log(mimes.pic)\n// logs image/x-pict\n\nconsole.log(mimes.pct)\n// logs image/x-pict\n\nconsole.log(mimes.pnm)\n// logs image/x-portable-anymap\n\nconsole.log(mimes.pbm)\n// logs image/x-portable-bitmap\n\nconsole.log(mimes.pgm)\n// logs image/x-portable-graymap\n\nconsole.log(mimes.ppm)\n// logs image/x-portable-pixmap\n\nconsole.log(mimes.rgb)\n// logs image/x-rgb\n\nconsole.log(mimes.tga)\n// logs image/x-tga\n\nconsole.log(mimes.xbm)\n// logs image/x-xbitmap\n\nconsole.log(mimes.xpm)\n// logs image/x-xpixmap\n\nconsole.log(mimes.xwd)\n// logs image/x-xwindowdump\n\nconsole.log(mimes.disposition-notification)\n// logs message/disposition-notification\n\nconsole.log(mimes.u8msg)\n// logs message/global\n\nconsole.log(mimes.u8dsn)\n// logs message/global-delivery-status\n\nconsole.log(mimes.u8mdn)\n// logs message/global-disposition-notification\n\nconsole.log(mimes.u8hdr)\n// logs message/global-headers\n\nconsole.log(mimes.eml)\n// logs message/rfc822\n\nconsole.log(mimes.mime)\n// logs message/rfc822\n\nconsole.log(mimes.wsc)\n// logs message/vnd.wfa.wsc\n\nconsole.log(mimes.3mf)\n// logs model/3mf\n\nconsole.log(mimes.gltf)\n// logs model/gltf+json\n\nconsole.log(mimes.glb)\n// logs model/gltf-binary\n\nconsole.log(mimes.igs)\n// logs model/iges\n\nconsole.log(mimes.iges)\n// logs model/iges\n\nconsole.log(mimes.msh)\n// logs model/mesh\n\nconsole.log(mimes.mesh)\n// logs model/mesh\n\nconsole.log(mimes.silo)\n// logs model/mesh\n\nconsole.log(mimes.stl)\n// logs model/stl\n\nconsole.log(mimes.dae)\n// logs model/vnd.collada+xml\n\nconsole.log(mimes.dwf)\n// logs model/vnd.dwf\n\nconsole.log(mimes.gdl)\n// logs model/vnd.gdl\n\nconsole.log(mimes.gtw)\n// logs model/vnd.gtw\n\nconsole.log(mimes.mts)\n// logs model/vnd.mts\n\nconsole.log(mimes.ogex)\n// logs model/vnd.opengex\n\nconsole.log(mimes.x_b)\n// logs model/vnd.parasolid.transmit.binary\n\nconsole.log(mimes.x_t)\n// logs model/vnd.parasolid.transmit.text\n\nconsole.log(mimes.usdz)\n// logs model/vnd.usdz+zip\n\nconsole.log(mimes.bsp)\n// logs model/vnd.valve.source.compiled-map\n\nconsole.log(mimes.vtu)\n// logs model/vnd.vtu\n\nconsole.log(mimes.wrl)\n// logs model/vrml\n\nconsole.log(mimes.vrml)\n// logs model/vrml\n\nconsole.log(mimes.x3db)\n// logs model/x3d+binary\n\nconsole.log(mimes.x3dbz)\n// logs model/x3d+binary\n\nconsole.log(mimes.x3db)\n// logs model/x3d+binary\n\nconsole.log(mimes.x3dv)\n// logs model/x3d-vrml\n\nconsole.log(mimes.x3dvz)\n// logs model/x3d+vrml\n\nconsole.log(mimes.x3d)\n// logs model/x3d+xml\n\nconsole.log(mimes.x3dz)\n// logs model/x3d+xml\n\nconsole.log(mimes.x3dv)\n// logs model/x3d-vrml\n\nconsole.log(mimes.appcache)\n// logs text/cache-manifest\n\nconsole.log(mimes.manifest)\n// logs text/cache-manifest\n\nconsole.log(mimes.ics)\n// logs text/calendar\n\nconsole.log(mimes.ifb)\n// logs text/calendar\n\nconsole.log(mimes.coffee)\n// logs text/coffeescript\n\nconsole.log(mimes.litcoffee)\n// logs text/coffeescript\n\nconsole.log(mimes.css)\n// logs text/css\n\nconsole.log(mimes.csv)\n// logs text/csv\n\nconsole.log(mimes.html)\n// logs text/html\n\nconsole.log(mimes.htm)\n// logs text/html\n\nconsole.log(mimes.shtml)\n// logs text/html\n\nconsole.log(mimes.jade)\n// logs text/jade\n\nconsole.log(mimes.jsx)\n// logs text/jsx\n\nconsole.log(mimes.less)\n// logs text/less\n\nconsole.log(mimes.markdown)\n// logs text/markdown\n\nconsole.log(mimes.md)\n// logs text/markdown\n\nconsole.log(mimes.mml)\n// logs text/mathml\n\nconsole.log(mimes.mdx)\n// logs text/mdx\n\nconsole.log(mimes.n3)\n// logs text/n3\n\nconsole.log(mimes.txt)\n// logs text/plain\n\nconsole.log(mimes.text)\n// logs text/plain\n\nconsole.log(mimes.conf)\n// logs text/plain\n\nconsole.log(mimes.def)\n// logs text/plain\n\nconsole.log(mimes.list)\n// logs text/plain\n\nconsole.log(mimes.log)\n// logs text/plain\n\nconsole.log(mimes.in)\n// logs text/plain\n\nconsole.log(mimes.ini)\n// logs text/plain\n\nconsole.log(mimes.dsc)\n// logs text/prs.lines.tag\n\nconsole.log(mimes.rtx)\n// logs text/richtext\n\nconsole.log(mimes.rtf)\n// logs text/rtf\n\nconsole.log(mimes.sgml)\n// logs text/sgml\n\nconsole.log(mimes.sgm)\n// logs text/sgml\n\nconsole.log(mimes.shex)\n// logs text/shex\n\nconsole.log(mimes.slim)\n// logs text/slim\n\nconsole.log(mimes.slm)\n// logs text/slim\n\nconsole.log(mimes.stylus)\n// logs text/stylus\n\nconsole.log(mimes.styl)\n// logs text/stylus\n\nconsole.log(mimes.tsv)\n// logs text/tab-separated-values\n\nconsole.log(mimes.t)\n// logs text/troff\n\nconsole.log(mimes.tr)\n// logs text/troff\n\nconsole.log(mimes.roff)\n// logs text/troff\n\nconsole.log(mimes.man)\n// logs text/troff\n\nconsole.log(mimes.me)\n// logs text/troff\n\nconsole.log(mimes.ms)\n// logs text/troff\n\nconsole.log(mimes.ttl)\n// logs text/turtle\n\nconsole.log(mimes.uri)\n// logs text/uri-list\n\nconsole.log(mimes.uris)\n// logs text/uri-list\n\nconsole.log(mimes.urls)\n// logs text/uri-list\n\nconsole.log(mimes.vcard)\n// logs text/vcard\n\nconsole.log(mimes.curl)\n// logs text/vnd.curl\n\nconsole.log(mimes.dcurl)\n// logs text/vnd.curl.dcurl\n\nconsole.log(mimes.mcurl)\n// logs text/vnd.curl.mcurl\n\nconsole.log(mimes.scurl)\n// logs text/vnd.curl.scurl\n\nconsole.log(mimes.sub)\n// logs text/vnd.dvb.subtitle\n\nconsole.log(mimes.fly)\n// logs text/vnd.fly\n\nconsole.log(mimes.flx)\n// logs text/vnd.fmi.flexstor\n\nconsole.log(mimes.gv)\n// logs text/vnd.graphviz\n\nconsole.log(mimes.3dml)\n// logs text/vnd.in3d.3dml\n\nconsole.log(mimes.spot)\n// logs text/vnd.in3d.spot\n\nconsole.log(mimes.jad)\n// logs text/vnd.sun.j2me.app-descriptor\n\nconsole.log(mimes.wml)\n// logs text/vnd.wap.wml\n\nconsole.log(mimes.wmls)\n// logs text/vnd.wap.wmlscript\n\nconsole.log(mimes.vtt)\n// logs text/vtt\n\nconsole.log(mimes.s)\n// logs text/x-asm\n\nconsole.log(mimes.asm)\n// logs text/x-asm\n\nconsole.log(mimes.c)\n// logs text/x-c\n\nconsole.log(mimes.cc)\n// logs text/x-c\n\nconsole.log(mimes.cxx)\n// logs text/x-c\n\nconsole.log(mimes.cpp)\n// logs text/x-c\n\nconsole.log(mimes.h)\n// logs text/x-c\n\nconsole.log(mimes.hh)\n// logs text/x-c\n\nconsole.log(mimes.dic)\n// logs text/x-c\n\nconsole.log(mimes.htc)\n// logs text/x-component\n\nconsole.log(mimes.f)\n// logs text/x-fortran\n\nconsole.log(mimes.for)\n// logs text/x-fortran\n\nconsole.log(mimes.f77)\n// logs text/x-fortran\n\nconsole.log(mimes.f90)\n// logs text/x-fortran\n\nconsole.log(mimes.hbs)\n// logs text/x-handlebars-template\n\nconsole.log(mimes.java)\n// logs text/x-java-source\n\nconsole.log(mimes.lua)\n// logs text/x-lua\n\nconsole.log(mimes.mkd)\n// logs text/x-markdown\n\nconsole.log(mimes.nfo)\n// logs text/x-nfo\n\nconsole.log(mimes.opml)\n// logs text/x-opml\n\nconsole.log(mimes.org)\n// logs text/x-org\n\nconsole.log(mimes.p)\n// logs text/x-pascal\n\nconsole.log(mimes.pas)\n// logs text/x-pascal\n\nconsole.log(mimes.pde)\n// logs text/x-processing\n\nconsole.log(mimes.sass)\n// logs text/x-sass\n\nconsole.log(mimes.scss)\n// logs text/x-scss\n\nconsole.log(mimes.etx)\n// logs text/x-setext\n\nconsole.log(mimes.sfv)\n// logs text/x-sfv\n\nconsole.log(mimes.ymp)\n// logs text/x-suse-ymp\n\nconsole.log(mimes.uu)\n// logs text/x-uuencode\n\nconsole.log(mimes.vcs)\n// logs text/x-vcalendar\n\nconsole.log(mimes.vcf)\n// logs text/x-vcard\n\nconsole.log(mimes.xml)\n// logs text/xml\n\nconsole.log(mimes.yaml)\n// logs text/yaml\n\nconsole.log(mimes.yml)\n// logs text/yaml\n\nconsole.log(mimes.3gp)\n// logs video/3gpp\n\nconsole.log(mimes.3gpp)\n// logs video/3gpp\n\nconsole.log(mimes.3g2)\n// logs video/3gpp2\n\nconsole.log(mimes.h261)\n// logs video/h261\n\nconsole.log(mimes.h263)\n// logs video/h263\n\nconsole.log(mimes.h264)\n// logs video/h264\n\nconsole.log(mimes.jpgv)\n// logs video/jpeg\n\nconsole.log(mimes.jpm)\n// logs image/jpm\n\nconsole.log(mimes.jpgm)\n// logs video/jpm\n\nconsole.log(mimes.mj2)\n// logs video/mj2\n\nconsole.log(mimes.mjp2)\n// logs video/mj2\n\nconsole.log(mimes.ts)\n// logs video/mp2t\n\nconsole.log(mimes.mp4)\n// logs video/mp4\n\nconsole.log(mimes.mp4v)\n// logs video/mp4\n\nconsole.log(mimes.mpg4)\n// logs video/mp4\n\nconsole.log(mimes.mpeg)\n// logs video/mpeg\n\nconsole.log(mimes.mpg)\n// logs video/mpeg\n\nconsole.log(mimes.mpe)\n// logs video/mpeg\n\nconsole.log(mimes.m1v)\n// logs video/mpeg\n\nconsole.log(mimes.m2v)\n// logs video/mpeg\n\nconsole.log(mimes.ogv)\n// logs video/ogg\n\nconsole.log(mimes.qt)\n// logs video/quicktime\n\nconsole.log(mimes.mov)\n// logs video/quicktime\n\nconsole.log(mimes.uvh)\n// logs video/vnd.dece.hd\n\nconsole.log(mimes.uvvh)\n// logs video/vnd.dece.hd\n\nconsole.log(mimes.uvm)\n// logs video/vnd.dece.mobile\n\nconsole.log(mimes.uvvm)\n// logs video/vnd.dece.mobile\n\nconsole.log(mimes.uvp)\n// logs video/vnd.dece.pd\n\nconsole.log(mimes.uvvp)\n// logs video/vnd.dece.pd\n\nconsole.log(mimes.uvs)\n// logs video/vnd.dece.sd\n\nconsole.log(mimes.uvvs)\n// logs video/vnd.dece.sd\n\nconsole.log(mimes.uvv)\n// logs video/vnd.dece.video\n\nconsole.log(mimes.uvvv)\n// logs video/vnd.dece.video\n\nconsole.log(mimes.dvb)\n// logs video/vnd.dvb.file\n\nconsole.log(mimes.fvt)\n// logs video/vnd.fvt\n\nconsole.log(mimes.mxu)\n// logs video/vnd.mpegurl\n\nconsole.log(mimes.m4u)\n// logs video/vnd.mpegurl\n\nconsole.log(mimes.pyv)\n// logs video/vnd.ms-playready.media.pyv\n\nconsole.log(mimes.uvu)\n// logs video/vnd.uvvu.mp4\n\nconsole.log(mimes.uvvu)\n// logs video/vnd.uvvu.mp4\n\nconsole.log(mimes.viv)\n// logs video/vnd.vivo\n\nconsole.log(mimes.webm)\n// logs video/webm\n\nconsole.log(mimes.f4v)\n// logs video/x-f4v\n\nconsole.log(mimes.fli)\n// logs video/x-fli\n\nconsole.log(mimes.flv)\n// logs video/x-flv\n\nconsole.log(mimes.m4v)\n// logs video/x-m4v\n\nconsole.log(mimes.mkv)\n// logs video/x-matroska\n\nconsole.log(mimes.mk3d)\n// logs video/x-matroska\n\nconsole.log(mimes.mks)\n// logs video/x-matroska\n\nconsole.log(mimes.mng)\n// logs video/x-mng\n\nconsole.log(mimes.asf)\n// logs video/x-ms-asf\n\nconsole.log(mimes.asx)\n// logs video/x-ms-asf\n\nconsole.log(mimes.vob)\n// logs video/x-ms-vob\n\nconsole.log(mimes.wm)\n// logs video/x-ms-wm\n\nconsole.log(mimes.wmv)\n// logs video/x-ms-wmv\n\nconsole.log(mimes.wmx)\n// logs video/x-ms-wmx\n\nconsole.log(mimes.wvx)\n// logs video/x-ms-wvx\n\nconsole.log(mimes.avi)\n// logs video/x-msvideo\n\nconsole.log(mimes.movie)\n// logs video/x-sgi-movie\n\nconsole.log(mimes.smv)\n// logs video/x-smv\n\nconsole.log(mimes.ice)\n// logs x-conference/x-cooltalk\n\n"), h4({
      id: 'changelog'
    }, 'changelog'), h5({
      id: 'changelog-0.0.1'
    }, '0.0.1'), p('first publish'), h2({
      id: 'source'
    }, 'source'), p(['the source for this page is in the ', Link({
      to: 'https://github.com/magic/fs/tree/master/example'
    }, 'example directory'), ' and gets built and published to github using ', Link({
      to: 'https://github.com/magic/core'
    }, '@magic/core')])];
  },
  '/mime-types/404/': function mimeTypes404() {
    return div('404 - not found');
  }
};
app({
  init: [_objectSpread({}, initialState, {
    url: window.location.pathname,
    hash: window.location.hash.substr(1)
  }), [[lib.db.get, {
    key: 'magic-gdpr',
    action: actions.gdpr.show
  }]]],
  subscriptions: function subscriptions(state) {
    return [[helpers.listenPopState, actions.pop]];
  },
  view: function view(state) {
    var url = pages[state.url] ? state.url : '/404/';
    var page = pages[url];
    var s = state.pages && state.pages[url];

    if (s) {
      Object.keys(s).forEach(function (key) {
        state[key] = s[key];
      });
    }

    return Page({
      page: page,
      state: state
    }, [Gdpr(state), LightSwitch(state)]);
  },
  node: document.getElementById('Magic')
});