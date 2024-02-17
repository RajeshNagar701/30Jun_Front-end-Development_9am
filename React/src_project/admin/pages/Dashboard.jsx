import React from 'react'

function Dashboard() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">ADMIN DASHBOARD</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-info back-widget-set text-center">
              <i className="fa fa-history fa-5x" />
              <h3>500+&nbsp; <i className="fa fa-dollar" /></h3>
              Amount Pending For Approval
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-success back-widget-set text-center">
              <i className="fa fa-bars fa-5x" />
              <h3>300+ Tasks</h3>
              Pending For New Events
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-warning back-widget-set text-center">
              <i className="fa fa-recycle fa-5x" />
              <h3>56+ Calls</h3>
              To Be Made For New Orders
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-danger back-widget-set text-center">
              <i className="fa fa-briefcase fa-5x" />
              <h3>30+ Issues </h3>
              That Should Be Resolved Now
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard