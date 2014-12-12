function buttonPick(map)
{

		var countries;
		var buttonPicked;
		var buttonType;
		var data = {}, key = [], value= [];

		function getStyle(feature)
		{
			return {border: 'black', color: 'white', weight: 2,  fillOpacity: 0.1};
		}

		function onEachFeature(feature, layer)
		{
			layer.on(
			{
				click: highlightFeature, 
				mouseout: resetHighlight
			});
			data[feature.properties.title] = feature.properties.hyperlink;
		}
		
		function highlightFeature(e) 
		{
			var layer = e.target;
			for(var keys in data)
			{
				key.push(keys);
   				value.push(keys[key]);
			}

			layer.setStyle(
			{
				weight: 2,
				color: 'red',
				fillOpacity: 0.5
			});
			if (!L.Browser.ie && !L.Browser.opera) 
			{
				layer.bringToFront();
			}
			
			
			if (layer.feature.properties && layer.feature.properties.hyperlink) 
			{
				$('#sidecol').empty();
				$('#sidecol').append("<p><h3><center>COUNTRY NAME:<br>" + "<u>" + layer.feature.properties.country + "</center></u></h3>");
			}
			for(var keys in data)
			{
				if (layer.feature.properties && layer.feature.properties.hyperlink && buttonType.value == buttonPicked && data[keys]) 
				{
					$('#sidecol').append("<b>Abstract:</b> " + layer.feature.properties.abstract + "<br>"
					+ "<b>Description:</b> " + layer.feature.properties.description + "<br>"
					+ "<b>Development Goals</b> " + layer.feature.properties.dev_goal + "<br>"
					+ "<b>Audience:</b> " + layer.feature.properties.audience + "<br>");
					$('#sidecol').append("<b>Map Title:</b> " + keys + "<br>"
					+ "<b>hyperlink:  </b><a href =' " + data[keys] + " ' target= _blank>click here </a> <br></p>");
				}
			}
			if (layer.feature.properties && !layer.feature.properties.hyperlink) 
			{
				$('#sidecol').empty();
				$('#sidecol').append('<p><h3><center> COUNTRY NAME:<br>' + '<u>' + layer.feature.properties.country + '</center></u></b>');
			}

		}

		function resetHighlight(e) 
		{
			countries.resetStyle(e.target);
		}


		$('#NSM').click(function()
		{
			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'NSM';
			buttonType = document.getElementById('NSM');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#SDG').click(function(){
			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'SDG';
			buttonType = document.getElementById('SDG');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#CMP').click(function(){

			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'CMP';
			buttonType = document.getElementById('CMP');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#CSM').click(function(){

			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'CSM';
			buttonType = document.getElementById('CSM');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#EDU').click(function(){

			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'EDU';
			buttonType = document.getElementById('EDU');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#USR').click(function(){

			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'USR';
			buttonType = document.getElementById('USR');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});

		$('#OPM').click(function(){

			if(map.hasLayer(countries))
			{
				map.removeLayer(countries);
			} 

			$('#sidecol').empty();
			data = [];
			buttonPicked = 'OPM';
			buttonType = document.getElementById('OPM');
			countries = new L.esri.featureLayer(featureURL, 
			{
				style: getStyle, 
				onEachFeature: onEachFeature,
				where: "type like "+"'"+buttonType.value+"'"
			}).addTo(map);
		});


}
