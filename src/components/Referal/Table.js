import React from 'react';

const Table = () => {
    return (
        <div className="referal_table">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Owner</th>
                        <th scope="col">Pension Id</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jane Cooper</td>
                        <td className="pen">PEN123456</td>
                        <td>
                            <div className="status1">Pending</div>
                        </td>
                    </tr>

                    <tr>
                        <td>Jane Cooper</td>
                        <td className="pen">PEN123456</td>
                        <td>
                            <div className="status2">Active</div>
                        </td>
                    </tr>

                    <tr>
                        <td>Jane Cooper</td>
                        <td className="pen">PEN123456</td>
                        <td>
                            <div className="status1">Pending</div>
                        </td>
                    </tr>

                    <tr>
                        <td>Jane Cooper</td>
                        <td className="pen">PEN123456</td>
                        <td>
                            <div className="status2">Active</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;