'use strict';

angular.module('fitStatsApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getMFP: {
        method: 'GET',
        params: {
          id:'mfpId'
        }
      }
	  });
  });
