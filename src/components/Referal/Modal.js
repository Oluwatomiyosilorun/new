import React from 'react';

const Modal = () => {
    return (
        <div className="modal fade" id="referal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add a referred user</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">x</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">User's name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Pension ID</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="">
                                <button className="btn btn-success w-100">Add user</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;