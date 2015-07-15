(function(){
	var root = this;
	var Physics = Physics||{};

	Physics.accelerationf = function(force){
		return function(particle,timeDelta){
			particle.velocity.iadd(force.muls(timeDelta));
		}
	}

	Physics.dampingf = function(damping){
		return function(particle,timeDelta){
			particle.velocity.x *= damping;
			particle.velocity.y *= damping;
		}
	}

	Physics.wind = function(particle,timeDelta){
		particle.velocity.x += timeDelta*Math.random()*200;
	}

	root.Physics = Physics;
}).call(this);