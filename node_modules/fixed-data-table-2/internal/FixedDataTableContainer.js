"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require('react'));

var _redux = require('redux');

var _invariant = _interopRequireDefault(require('././stubs/invariant'));

var _pick = _interopRequireDefault(require('lodash/pick'));

var ActionTypes = _interopRequireWildcard(require('././actions/ActionTypes'));

var columnActions = _interopRequireWildcard(require('././actions/columnActions'));

var scrollActions = _interopRequireWildcard(require('././actions/scrollActions'));

var _FixedDataTable = _interopRequireDefault(require('././FixedDataTable'));

var _FixedDataTableStore = _interopRequireDefault(require('././FixedDataTableStore'));

var _Scrollbar = _interopRequireDefault(require('././plugins/Scrollbar'));

var _ScrollContainer = _interopRequireDefault(require('././plugins/ScrollContainer'));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableContainer, _React$Component);

  var _super = _createSuper(FixedDataTableContainer);

  function FixedDataTableContainer(props) {
    var _this;

    _classCallCheck(this, FixedDataTableContainer);

    _this = _super.call(this, props);
    _this.reduxStore = _FixedDataTableStore["default"].get();
    _this.scrollActions = (0, _redux.bindActionCreators)(scrollActions, _this.reduxStore.dispatch);
    _this.columnActions = (0, _redux.bindActionCreators)(columnActions, _this.reduxStore.dispatch);

    _this.reduxStore.dispatch({
      type: ActionTypes.INITIALIZE,
      props: props
    });

    _this.unsubscribe = _this.reduxStore.subscribe(_this.onStoreUpdate.bind(_assertThisInitialized(_this)));
    _this.state = {
      boundState: FixedDataTableContainer.getBoundState(_this.reduxStore),
      // the state from the redux store
      reduxStore: _this.reduxStore,
      // put store instance in local state so that getDerivedStateFromProps can access it
      props: props // put props in local state so that getDerivedStateFromProps can access it

    };
    return _this;
  }

  _createClass(FixedDataTableContainer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }

      this.reduxStore = null;
    }
  }, {
    key: "render",
    value: function render() {
      var fdt = /*#__PURE__*/_react["default"].createElement(_FixedDataTable["default"], _extends({}, this.props, this.state.boundState, {
        scrollActions: this.scrollActions,
        columnActions: this.columnActions
      })); // For backward compatibility, by default we render FDT-2 scrollbars


      if (this.props.defaultScrollbars) {
        return /*#__PURE__*/_react["default"].createElement(_ScrollContainer["default"], this.props, fdt);
      }

      return fdt;
    }
  }, {
    key: "onStoreUpdate",
    value: function onStoreUpdate() {
      var newBoundState = FixedDataTableContainer.getBoundState(this.reduxStore); // If onStoreUpdate was called through a prop change, then skip updating local state.
      // This is fine because getDerivedStateFromProps already calculates the new state.

      if (this.state.boundState.propsRevision !== newBoundState.propsRevision) {
        return;
      }

      this.setState({
        boundState: newBoundState
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, currentState) {
      (0, _invariant["default"])(nextProps.height !== undefined || nextProps.maxHeight !== undefined, 'You must set either a height or a maxHeight'); // getDerivedStateFromProps is called for both prop and state updates.
      // If props are unchanged here, then there's no need to recalculate derived state.

      if (nextProps === currentState.props) {
        // return null to indicate that state should be unchanged
        return null;
      } // Props have changed, so update the redux store with the latest props


      currentState.reduxStore.dispatch({
        type: ActionTypes.PROP_CHANGE,
        newProps: nextProps,
        oldProps: currentState.props
      }); // return the new state from the updated redux store

      return {
        boundState: FixedDataTableContainer.getBoundState(currentState.reduxStore),
        props: nextProps
      };
    }
  }, {
    key: "getBoundState",
    value: function getBoundState(reduxStore) {
      var state = reduxStore.getState();
      var boundState = (0, _pick["default"])(state, ['columnGroupProps', 'columnProps', 'columnReorderingData', 'columnResizingData', 'elementHeights', 'elementTemplates', 'firstRowIndex', 'endRowIndex', 'isColumnReordering', 'isColumnResizing', 'maxScrollX', 'maxScrollY', 'propsRevision', 'rows', 'rowOffsets', 'rowSettings', 'scrollContentHeight', 'scrollFlags', 'scrollX', 'scrollY', 'scrolling', 'scrollJumpedX', 'scrollJumpedY', 'tableSize']);
      return boundState;
    }
  }]);

  return FixedDataTableContainer;
}(_react["default"].Component);

_defineProperty(FixedDataTableContainer, "defaultProps", {
  defaultScrollbars: true,
  scrollbarXHeight: _Scrollbar["default"].SIZE,
  scrollbarYWidth: _Scrollbar["default"].SIZE
});

var _default = (0, _reactLifecyclesCompat.polyfill)(FixedDataTableContainer);

exports["default"] = _default;