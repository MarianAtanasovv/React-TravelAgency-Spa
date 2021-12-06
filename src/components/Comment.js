const Comment = ({ comment }) => {
  console.log(comment);
  return (
    // <div className="container mt-5">
    //   <div className="d-flex justify-content-center row">
    //     <div className="col-md-8">
    //       <div className="d-flex flex-column comment-section">
    //         <div className="bg-white p-2">
    //           <div className="d-flex flex-row user-info">
    //             <img
    //               className="rounded-circle"
    //               src="https://i.imgur.com/RpzrMR2.jpg"
    //               width="40"
    //             />
    //             <div className="d-flex flex-column justify-content-start ml-2">
    //               <span className="d-block font-weight-bold name">
    //                 {comment?.username}
    //               </span>
    //               <span className="date text-black-50">
    //                 Shared publicly - Jan 2020
    //               </span>
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <p className="comment-text">{comment?.comment}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="comment-wrapper">
      <div class="d-flex justify-content-center row">
        <div class="col-md-8">
          <div class="commenting-box">
            <div class="bg-white p-2">
              <div class="d-flex flex-column justify-content-start ml-2">
                <span class="d-block font-weight-bold name">
                 Username: {comment.username}
                </span>
              </div>
            </div>
            <div class="mt-2">
              <p class="comment-text">{comment.comment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
