import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('mvoeveag');

	if (state.succeeded) {
		return <p text-center>Thanks for your submission!</p>;
	}

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-lg-6'>
					<form
						action='https://formspree.io/f/mvoeveag'
						method='POST'
						onSubmit={handleSubmit}
					>
						<div className='mb-3'>
							<label
								htmlFor='name'
								className='form-label visually-hidden'
							>
								Name
							</label>
							<input
								className='form-control'
								id='name'
								type='text'
								name='name'
								placeholder='Name'
								required
							/>
							<ValidationError
								prefix='Name'
								field='name'
								errors={state.errors}
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='email'
								className='form-label visually-hidden'
							>
								Email
							</label>
							<input
								className='form-control'
								id='email'
								type='email'
								name='email'
								placeholder='Email'
								required
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='message'
								className='form-label visually-hidden'
							>
								Message
							</label>
							<textarea
								className='form-control'
								id='message'
								name='message'
								placeholder='Message'
								required
							></textarea>
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
						</div>

						<div className='text-center mb-3'>
							<button
								type='submit'
								disabled={state.submitting}
								className='custom-btn btn'
								style={{
									marginTop: '2rem',
									color: '#fafafa',
									backgroundColor: '#cd4662',
									fontSize: '1.3rem',
									borderRadius: '0',
								}}
							>
								{state.submitting ? 'Submitting...' : 'Submit'}
							</button>
						</div>
						<ValidationError errors={state.errors} />
					</form>
				</div>
			</div>
		</div>
	);
}
