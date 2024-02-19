import React from 'react'

function Add_emp() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Employee</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                BASIC FORM
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label>Enter Name</label>
                    <input className="form-control" type="text" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Enter Email</label>
                    <input className="form-control" type="text" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Text area</label>
                    <textarea className="form-control" rows={3} defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label>Select Example</label>
                    <select className="form-control">
                      <option>One Vale</option>
                      <option>Two Vale</option>
                      <option>Three Vale</option>
                      <option>Four Vale</option>
                    </select>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Multiple Select Example</label>
                    <select multiple className="form-control">
                      <option>One Vale</option>
                      <option>Two Vale</option>
                      <option>Three Vale</option>
                      <option>Four Vale</option>
                    </select>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Checkboxes</label>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Checkbox Example One
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Checkbox Example Two
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Checkbox Example Three
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Checkbox Example Four
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Radio Button Examples</label>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />Radio Example One
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Radio Example Two
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />Radio Example Three
                      </label>
                    </div>
                  </div>
                </form></div>
              <button type="submit" className="btn btn-info">Send Message </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_emp