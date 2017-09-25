// Validate.ja recommends using Moment.js for datetime and date validation, just FYI.

//validate Vin number seventeen alpha/numeric

/* Validate Owner Details Page */

// validate.js regex method (format) is broken with complex regex expressions, custom version to fix it

// Custom Regex method (validate.js regex method (format) is broken with complex regex expressions, custom version to fix it)
validate.validators.regex = function (value, options, key, attributes) {
  let regExp = new RegExp(options.pattern);

  if (!regExp.test(value)) {
    return options.message;
  }
};

var constraints = {
  fname: {
    presence: true,
    length: {
      minimum: 6,
      message: 'Must be at least 6 characters',
    }
  },
  lname: {
    presence: true,
    length: {
      minimum: 2,
      message: 'Must be at least 2 characters',
    }
  }

}

$('#owner-details input').blur(function () {


  var id = this.id;
  var value = $(this).val();
  var result = '' + id + ':' + value;
  
  let msgs = validate.single(value, {});
  let msg = validate(result, constraints);

  $('.validator-msg').html(JSON.stringify(msg) || '');

  /*     let pass = {
          pass: $('#password').val(),
          passConfirm: $('#password-confirm').val()
        };
   */

});
/*   let constraints = {
        pass: {
          presence: true,
          regex: {
            pattern: '(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])',
            message: "Must contain a capital, lowercase, and number"
          },
  
          length: {
            minimum: 8
          }
        },
  
        passConfirm: {
          presence: true,
          equality: {
            attribute: "pass",
            message: "Passwords do not match",
            comparator: (v1, v2) => {
              return v1 === v2;
            }
          }
        }
      }; 
    $('#message').html(JSON.stringify(val) || '');
  });
  */
