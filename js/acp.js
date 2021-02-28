function ReCreate() {


Swal.fire({
  title: '確認',
  text: "条件を変えて再作成しますか？",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      '確認',
      '再作成しました',
      'success'
    )
  }
})


}    