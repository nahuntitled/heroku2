import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
    width: '100%',
    padding: '20px 30px',
    marginTop: 24,
	},
	input: {
    width: '500px',
	},
	button: {
		width: '300px',
		background: '#007bff',
		color: 'white'
	}
}

class Admin extends React.Component {
	state = {
		logo: "",
		header_img: "",
		header_title: "",
		email: "",
		phone: "",
		location: "",
		instagram: "",
		twitter: "",
		facebook: "",
		google: ""
	}

	handleChange = name => event => {
    this.setState({ [name]: event.target.value });
	};

	componentWillMount() {
		fetch('/api/admin').then(res => res.json()).then(data => {
			this.setState({
				logo: data.logo,
				header_img: data.header_img,
				header_title: data.header_title,
				email: data.contacts.email,
				phone: data.contacts.phone,
				location: data.contacts.location,
				instagram: data.socials.instagram,
				twitter: data.socials.twitter,
				facebook: data.socials.facebook,
				google: data.socials.google
			})
			setTimeout(() => {
				document.getElementById('header_title').value = this.state.header_title;
				document.getElementById('email').value = this.state.email;
				document.getElementById('phone').value = this.state.phone;
				document.getElementById('location').value = this.state.location;
				document.getElementById('instagram').value = this.state.instagram;
				document.getElementById('twitter').value = this.state.twitter;
				document.getElementById('facebook').value = this.state.facebook;
				document.getElementById('google').value = this.state.google;
			}, 100);
		})
	}

	onSubmit = e => {
		e.preventDefault();

		const pic = new FormData();

		if (document.getElementById('logo').files[0]) {
			pic.append('file', document.getElementById('logo').files[0]);
			fetch('/api/upload', {
				method: 'POST',
				body: pic
			}).then(res => res.json()).then(i => {
				this.setState({
					logo: i
				})
			})
			pic.delete('file');
		}

		if (document.getElementById('header_img').files[0]) {
			pic.append('file', document.getElementById('header_img').files[0]);
			fetch('/api/upload', {
				method: 'POST',
				body: pic
			}).then(res => res.json()).then(i => {
				this.setState({
					header_img: i
				})
			})
			pic.delete('file');
		}

		setTimeout(() => {
			const obj ={
				logo: this.state.logo,
				header_img: this.state.header_img,
				header_title: this.state.header_title,
				contacts: {
					email: this.state.email,
					phone: this.state.phone,
					location: this.state.location
				},
				socials: {
					instagram: this.state.instagram,
					twitter: this.state.twitter,
					facebook: this.state.facebook,
					google: this.state.google
				}
			}

			fetch('/api/admin/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
      })
		}, 2000);

	}
	
	render() {
		const { classes } = this.props
		return(
			<Paper className={classes.root}>
			<form noValidate autoComplete="off" onSubmit={this.onSubmit}>
				<Typography variant="body2" gutterBottom>
					Логотип
				</Typography>
				<TextField
					id="logo"
					type="file"
					name="logo"
					margin="normal"
					accept="image/*"
				/>
				<br />
				<Typography variant="body2" gutterBottom>
        	Бекграунд хедера
      	</Typography>
				<TextField
					id="header_img"
					type="file"
					name="header_img"
					margin="normal"
					accept="image/*"
				/>
				<br />
				<TextField
          id="header_title"
					label="Заголовок хедера"
					type="text"
					name="header_title"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('header_title')}
					margin="normal"
        />
				<br />
				<TextField
          id="email"
					label="Email"
					type="email"
					name="email"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('email')}
					margin="normal"
        />
				<br />
				<TextField
          id="phone"
					label="Телфон"
					type="text"
					name="phone"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('phone')}
					margin="normal"
        />
				<br />
				<TextField
          id="location"
					label="Расположение"
					type="text"
					name="location"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('location')}
					margin="normal"
        />
				<br />
				<TextField
          id="instagram"
					label="Instgram"
					type="text"
					name="instagram"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('instagram')}
					margin="normal"
        />
				<br />
				<TextField
          id="twitter"
					label="Twitter"
					type="text"
					name="twitter"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('twitter')}
					margin="normal"
        />
				<br />
				<TextField
          id="facebook"
					label="Facebook"
					type="text"
					name="facebook"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('facebook')}
					margin="normal"
        />
				<br />
				<TextField
          id="google"
					label="Google+"
					type="text"
					name="google"
					defaultValue="2"
					className={classes.input}
					onChange={this.handleChange('google')}
					margin="normal"
        />
				<br />
				<TextField
					id="submit"
					type="submit"
					margin="normal"
					variant="outlined"
					className={classes.button}
				/>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Admin);