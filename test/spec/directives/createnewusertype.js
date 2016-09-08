'use strict';

describe('Directive: createNewUserType', function () {

  // load the directive's module
  beforeEach(module('armsAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<create-new-user-type></create-new-user-type>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the createNewUserType directive');
  }));
});
