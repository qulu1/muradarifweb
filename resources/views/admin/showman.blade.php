@extends('layouts.layouts')

@section('content')
	<tr>
		<th>Title</th>
		<th>Photo</th>
		<th class="text-center">Action</th>
	</tr>
	@foreach($showman as $key)
	<tr>
		<td>{!! $key->text !!}</td>
		<td><img style="width: 100px;height: 100px;" src="/images/{{ $key->photo }}"></td> 
		<td><a href= {{ url("/admin/video/" . $key->id . "/edit") }} class="btn btn-success">Update</a></td>
		<td><a href= {{ url("/admin/video/" . $key->id . "/delete") }} class="btn btn-danger">Delete</a></td>
	</tr>
	@endforeach
@endsection

@section('form')
	<hr>
	<form action={{ url('/admin/video') }} method="POST" enctype="multipart/form-data">
	{!! csrf_field() !!}
		<div class="form-group">
			<label name='text'>Text:</label>
			<textarea  name="text"></textarea>

		</div>
		<div class="form-group">
			<label name='text'>Photo:</label>
			<input type="file" name="photo" value="">

		</div>
		<button type="submit" class="btn btn-success">Submit</button>
	</form>

<script src={{ url("//cdn.ckeditor.com/4.5.7/standard/ckeditor.js")  }}></script>


@endsection
